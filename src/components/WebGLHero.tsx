import { useRef, useEffect } from 'react';

// WebGL particle system with mouse interaction
export default function WebGLHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true });
    if (!gl) return;

    // Vertex shader
    const vertSrc = `
      attribute vec2 a_position;
      attribute float a_size;
      attribute float a_alpha;
      uniform vec2 u_resolution;
      varying float v_alpha;
      void main() {
        vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
        clip.y *= -1.0;
        gl_Position = vec4(clip, 0.0, 1.0);
        gl_PointSize = a_size;
        v_alpha = a_alpha;
      }
    `;

    // Fragment shader
    const fragSrc = `
      precision mediump float;
      varying float v_alpha;
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float alpha = smoothstep(0.5, 0.1, dist) * v_alpha;
        gl_FragColor = vec4(0.75, 0.75, 0.75, alpha);
      }
    `;

    function createShader(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const vs = createShader(gl.VERTEX_SHADER, vertSrc);
    const fs = createShader(gl.FRAGMENT_SHADER, fragSrc);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const posLoc = gl.getAttribLocation(prog, 'a_position');
    const sizeLoc = gl.getAttribLocation(prog, 'a_size');
    const alphaLoc = gl.getAttribLocation(prog, 'a_alpha');
    const resLoc = gl.getUniformLocation(prog, 'u_resolution');

    // Particles
    const NUM = 300;
    const particles = Array.from({ length: NUM }, () => ({
      x: Math.random() * canvas!.width,
      y: Math.random() * canvas!.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 3 + 1,
      alpha: Math.random() * 0.3 + 0.05,
    }));

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let mouseActive = false;

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      mouseActive = true;
    };
    const handleLeave = () => { mouseActive = false; };

    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mouseleave', handleLeave);

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = canvas!.clientWidth * dpr;
      canvas!.height = canvas!.clientHeight * dpr;
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
    }
    resize();
    window.addEventListener('resize', resize);

    const posBuf = gl.createBuffer();
    const sizeBuf = gl.createBuffer();
    const alphaBuf = gl.createBuffer();

    let raf: number;
    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;

      gl!.clearColor(0, 0, 0, 0);
      gl!.clear(gl!.COLOR_BUFFER_BIT);
      gl!.uniform2f(resLoc, w, h);

      const positions: number[] = [];
      const sizes: number[] = [];
      const alphas: number[] = [];

      for (const p of particles) {
        // Mouse repulsion
        if (mouseActive) {
          const dx = p.x - mouseX * (window.devicePixelRatio || 1);
          const dy = p.y - mouseY * (window.devicePixelRatio || 1);
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150 * 0.8;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // Damping
        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        positions.push(p.x, p.y);
        sizes.push(p.size * (window.devicePixelRatio || 1));
        alphas.push(p.alpha);
      }

      // Draw particles
      gl!.bindBuffer(gl!.ARRAY_BUFFER, posBuf);
      gl!.bufferData(gl!.ARRAY_BUFFER, new Float32Array(positions), gl!.DYNAMIC_DRAW);
      gl!.enableVertexAttribArray(posLoc);
      gl!.vertexAttribPointer(posLoc, 2, gl!.FLOAT, false, 0, 0);

      gl!.bindBuffer(gl!.ARRAY_BUFFER, sizeBuf);
      gl!.bufferData(gl!.ARRAY_BUFFER, new Float32Array(sizes), gl!.DYNAMIC_DRAW);
      gl!.enableVertexAttribArray(sizeLoc);
      gl!.vertexAttribPointer(sizeLoc, 1, gl!.FLOAT, false, 0, 0);

      gl!.bindBuffer(gl!.ARRAY_BUFFER, alphaBuf);
      gl!.bufferData(gl!.ARRAY_BUFFER, new Float32Array(alphas), gl!.DYNAMIC_DRAW);
      gl!.enableVertexAttribArray(alphaLoc);
      gl!.vertexAttribPointer(alphaLoc, 1, gl!.FLOAT, false, 0, 0);

      gl!.drawArrays(gl!.POINTS, 0, NUM);

      // Draw connections between close particles (lines via canvas overlay)
      drawConnections(positions, w, h);

      raf = requestAnimationFrame(draw);
    }

    // Use a 2D canvas overlay for connection lines
    let lineCanvas: HTMLCanvasElement | null = null;
    let lineCtx: CanvasRenderingContext2D | null = null;

    function drawConnections(positions: number[], w: number, h: number) {
      if (!lineCanvas) {
        lineCanvas = document.createElement('canvas');
        lineCanvas.style.position = 'absolute';
        lineCanvas.style.top = '0';
        lineCanvas.style.left = '0';
        lineCanvas.style.width = '100%';
        lineCanvas.style.height = '100%';
        lineCanvas.style.pointerEvents = 'none';
        canvas!.parentElement!.appendChild(lineCanvas);
        lineCtx = lineCanvas.getContext('2d');
      }

      const dpr = window.devicePixelRatio || 1;
      if (lineCanvas.width !== w || lineCanvas.height !== h) {
        lineCanvas.width = w;
        lineCanvas.height = h;
      }

      lineCtx!.clearRect(0, 0, w, h);

      for (let i = 0; i < NUM; i++) {
        for (let j = i + 1; j < NUM; j++) {
          const dx = positions[i * 2] - positions[j * 2];
          const dy = positions[i * 2 + 1] - positions[j * 2 + 1];
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100 * dpr) {
            const alpha = (1 - dist / (100 * dpr)) * 0.08;
            lineCtx!.strokeStyle = `rgba(192,192,192,${alpha})`;
            lineCtx!.lineWidth = 0.5;
            lineCtx!.beginPath();
            lineCtx!.moveTo(positions[i * 2], positions[i * 2 + 1]);
            lineCtx!.lineTo(positions[j * 2], positions[j * 2 + 1]);
            lineCtx!.stroke();
          }
        }
      }
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseleave', handleLeave);
      if (lineCanvas?.parentElement) {
        lineCanvas.parentElement.removeChild(lineCanvas);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

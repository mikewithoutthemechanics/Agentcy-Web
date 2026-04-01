import React, { useState } from 'react';
import './Folder.css';

interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
  frontIcon?: React.ReactNode;
  onPaperClick?: (index: number) => void;
}

const darkenColor = (color: string, percent: number): string => {
  if (color.startsWith('rgba') || color.startsWith('rgb')) {
    const match = color.match(/[\d.]+/g);
    if (!match) return color;
    const [r, g, b, a = 1] = match.map(Number);
    return `rgba(${Math.max(0, Math.floor(r * (1 - percent)))}, ${Math.max(0, Math.floor(g * (1 - percent)))}, ${Math.max(0, Math.floor(b * (1 - percent)))}, ${a})`;
  }
  let hex = color.startsWith('#') ? color.slice(1) : color;
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  const num = parseInt(hex, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder: React.FC<FolderProps> = ({ color = '#3AAFA9', size = 1, items = [], className = '', frontIcon, onPaperClick }) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.12);

  const handleClick = () => {
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.1;
    const offsetY = (e.clientY - centerY) * 0.1;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (_e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle: React.CSSProperties = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': '#f0f0f0',
    '--paper-2': '#f5f5f5',
    '--paper-3': '#ffffff',
  } as React.CSSProperties;

  const folderClassName = `folder ${open ? 'open' : ''}`.trim();
  const scaleStyle = { transform: `scale(${size})` };

  return (
    <div style={scaleStyle} className={className}>
      <div className={folderClassName} style={folderStyle} onClick={handleClick}>
        <div className="folder__back">
          {papers.map((item, i) => (
            <div
              key={i}
              className={`paper paper-${i + 1}`}
              onMouseMove={e => handlePaperMouseMove(e, i)}
              onMouseLeave={e => handlePaperMouseLeave(e, i)}
              onClick={(e) => { e.stopPropagation(); onPaperClick?.(i); }}
              style={
                open
                  ? ({
                    '--magnet-x': `${paperOffsets[i]?.x || 0}px`,
                    '--magnet-y': `${paperOffsets[i]?.y || 0}px`,
                  } as React.CSSProperties)
                  : {}
              }
            >
              {item}
            </div>
          ))}
          <div className="folder__front">
            {frontIcon && (
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}>
                {frontIcon}
              </div>
            )}
          </div>
          <div className="folder__front right" />
        </div>
      </div>
    </div>
  );
};

export default Folder;

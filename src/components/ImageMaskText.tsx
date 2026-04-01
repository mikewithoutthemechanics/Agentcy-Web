import { useMemo } from 'react';

interface ImageMaskTextProps {
  text: string;
  imageSrc: string;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: string;
  lineHeight?: string;
  imageFit?: 'cover' | 'contain' | 'percent';
  imagePercent?: number;
}

export default function ImageMaskText({
  text,
  imageSrc,
  fontSize = 120,
  fontWeight = 900,
  letterSpacing = '-0.05em',
  lineHeight = '0.85',
  imageFit = 'cover',
  imagePercent = 100,
}: ImageMaskTextProps) {
  const bgSize = useMemo(() => {
    if (imageFit === 'cover') return 'cover';
    if (imageFit === 'contain') return 'contain';
    return `${imagePercent}%`;
  }, [imageFit, imagePercent]);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <span
        aria-label={text}
        style={{
          fontFamily: "'Space Grotesk', 'Inter', sans-serif",
          fontSize,
          fontWeight,
          letterSpacing,
          lineHeight,
          display: 'inline-block',
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: bgSize,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {text}
      </span>
    </div>
  );
}

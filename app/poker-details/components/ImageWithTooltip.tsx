'use client';

import React from 'react';

interface ImageWithTooltipProps {
  src: string;
  alt: string;
  description: string;
}

const ImageWithTooltip: React.FC<ImageWithTooltipProps> = ({ src, alt, description }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        marginBottom: '20px',
        width: '600px',
        height: '400px',
        overflow: 'hidden',
        border: '1px solid #ccc',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '10px',
          opacity: isHovered ? '1' : '0',
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        <p style={{ margin: '0' }}>{description}</p>
      </div>
    </div>
  );
};

export default ImageWithTooltip;

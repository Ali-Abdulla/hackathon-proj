import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div style={{
      backgroundColor: 'white',
      width: '454px',
      borderRadius: '8px',
      padding: '24px',
    }}>
      {children}
    </div>
  );
}
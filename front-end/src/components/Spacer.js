import React from 'react';

export const Spacer = ({ size = 'md', className = '' }) => {
  // Définition des tailles d'espacement
  const sizeMap = {
    sm: 'h-4 w-4',     // small: 1rem (16px)
    md: 'h-8 w-8',     // medium: 2rem (32px)
    lg: 'h-16 w-16',   // large: 4rem (64px)
  };

  // Il manquait le return ici!
  return <div className={`${sizeMap[size]} ${className}`} aria-hidden="true" />;
};

export default Spacer;
import React, { CSSProperties } from 'react';

interface CustomIconProps {
  logoSvg: string;
  link: string;
  style?: CSSProperties | undefined;
  className?: string | undefined;
}

export const CustomIcon: (props: CustomIconProps) => JSX.Element = ({
  logoSvg,
  link,
  style,
  className = 'custom-icon',
}: CustomIconProps) => {
  return (
    <a href={link} target='_blank'>
      <img src={logoSvg} alt={className} style={{ ...style }} className={className} />
    </a>
  );
};

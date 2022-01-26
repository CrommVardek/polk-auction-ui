import React, { CSSProperties } from 'react';
import './Common.css';

interface CustomIconProps {
  logoSvg: string | undefined;
  link: string | undefined;
  style?: CSSProperties | undefined;
  className?: string | undefined;
  withHover?: boolean;
}

export const CustomIcon: (props: CustomIconProps) => JSX.Element = ({
  logoSvg,
  link,
  style,
  className = 'custom-icon',
}: CustomIconProps) => {
  const image = <img src={logoSvg} style={{ ...style }} className={className} />;
  return link === undefined ? (
    <span style={{ ...style }} className={className} />
  ) : (
    <a href={link} target='_blank'>
      {image}
    </a>
  );
};

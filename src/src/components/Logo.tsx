import React from 'react';
import logoGl from '../static/logo_gl.png';
import logoTI from '../static/logo_ti.png';

export type LogoProps = React.ComponentPropsWithoutRef<'div'>;

export default function Logo(props: LogoProps) {
  return (
    <div {...props}>
      <div className="top-left-logo">
        <img alt="top-left-logo" src={logoGl}></img>
      </div>
      <div className="bottom-left-logo">
        <img alt="bottom-left-logo" src={logoTI}></img>
      </div>
    </div>
  );
}

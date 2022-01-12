import React from 'react';
import logoGl from '../../utils/logo/logo_gl.png';
import logoTI from '../../utils/logo/logo_ti.png';
import { WarpperLogoMap } from './style';

export type LogoProps = React.ComponentPropsWithoutRef<'div'>;

export default function Logo(props: LogoProps) {
  return (
    <WarpperLogoMap {...props}>
      <div className="top-left-logo">
        <img alt="top-left-logo" src={logoGl}></img>
      </div>
      <div className="bottom-left-logo">
        <img alt="bottom-left-logo" src={logoTI}></img>
      </div>
    </WarpperLogoMap>
  );
}

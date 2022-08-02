import React, { useContext } from 'react';
import { IconAdd } from '../../../assets/svg/IconAdd';
import { ConfContext } from '../../../providers/ConfProvider';
import { AddPoint, WarpperAddPoint } from './style';

export default function AddButton() {
  const config = useContext(ConfContext).bottomRightButtons;

  return (
    <WarpperAddPoint>
      {config.map((buttonConf, index) => (
        <a key={index} href={buttonConf.url} target="_blank" rel="noreferrer">
          <AddPoint>
            <span>
              <IconAdd />
            </span>
            <p>{buttonConf.text}</p>
          </AddPoint>
        </a>
      ))}
    </WarpperAddPoint>
  );
}

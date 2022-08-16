import React from 'react';
import { useSelector } from 'react-redux';
import { IconAdd } from '../../../assets/svg/IconAdd';
import { getBottomRightButtons } from '../../../store/app';
import { AddPoint, WarpperAddPoint } from './style';

export default function AddButton() {
  const bottomRightButtons = useSelector(getBottomRightButtons);

  return (
    <WarpperAddPoint>
      {bottomRightButtons.map((buttonConf, index) => (
        <a
          key={index}
          href="https://demarches.guichet-recette.grandlyon.com/projets-de-crowdsourcing/ajouter-un-marchand/"
          target="_blank"
          rel="noreferrer"
        >
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

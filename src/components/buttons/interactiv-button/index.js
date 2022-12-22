import React from 'react';
import { useSelector } from 'react-redux';
import { IconAdd } from '../../../assets/svg/IconAdd';
import { getBottomRightButtons, getThemeName } from '../../../store/kepler/selectors';
import { ButtonDefault } from '../../buttons/button-type';
import { AddPoint, WarpperAddPoint } from './style';

export default function AddButton() {
  const bottomRightButtons = useSelector(getBottomRightButtons);
  const themeName = useSelector(getThemeName);

  if (themeName === 'industries') {
    return (
      <>
        {bottomRightButtons.map((buttonConf, index) => (
          <a
            key={index}
            href="https://demarches.guichet-recette.grandlyon.com/projets-de-crowdsourcing/ajouter-un-marchand/"
            target="_blank"
            rel="noreferrer"
          >
            <ButtonDefault btnType="" text={buttonConf.text} bg="black" />
          </a>
        ))}
      </>
    );
  } else {
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
}

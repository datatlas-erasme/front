import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { ConfContext } from '../../../providers/ConfProvider';
import Button from '../Button';
import { AddPoint, WarpperAddPoint } from './style';

export default function AddButton(){
  const config = useContext(ConfContext).bottomRightButtons;

  return (
    <WarpperAddPoint>
      {config.map((buttonConf, index) => (
        <a key={index} href={buttonConf.url} target="_blank" rel="noreferrer">
          <AddPoint>
            <FontAwesomeIcon icon={faCartPlus} />
            <p>{buttonConf.text}</p>
          </AddPoint>
        </a>
      ))}
    </WarpperAddPoint>
  );
};

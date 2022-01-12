import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <FontAwesomeIcon icon={["fa-solid", "fa-circle-plus"]} />
            {buttonConf.text}
          </AddPoint>
        </a>
      ))}
    </WarpperAddPoint>
  );
};

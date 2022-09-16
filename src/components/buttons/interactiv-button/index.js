import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { getBottomRightButtons } from '../../../store/app';
import { AddPoint, WarpperAddPoint } from './style';

export default function AddButton() {
  const bottomRightButtons = useSelector(getBottomRightButtons);

  return (
    <WarpperAddPoint>
      <a href={bottomRightButtons[0].url} target="_blank" rel="noreferrer">
        <AddPoint>
          <span>
            <FontAwesomeIcon icon={faPlusCircle} />
          </span>
          <p>{bottomRightButtons[0].text}</p>
        </AddPoint>
      </a>
    </WarpperAddPoint>
  );
}

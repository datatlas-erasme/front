import { IconAdd } from '../../../assets/svg/IconAdd';
import { AddPoint, WarpperAddPoint } from './style';

export default function AddButton({ bottomRightButtons }) {
  const config = bottomRightButtons;

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

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { getBottomRightButtons } from '../../../store/app';
import { NavButton, ExtLink, WarpperMobilebutton } from './style';

export default function MenuButtonMobile() {
  const [isShow, setIsShow] = useState(false);
  const bottomRightButtons = useSelector(getBottomRightButtons);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <WarpperMobilebutton>
      {isShow &&
        bottomRightButtons.map((buttonConf, index) => (
          <ExtLink key={index} href={buttonConf.url} target="_blank" rel="noreferrer">
            {buttonConf.text}
          </ExtLink>
        ))}
      <NavButton onClick={handleClick}>
        <span>
          <FontAwesomeIcon icon={faPlusCircle} />
        </span>
      </NavButton>
    </WarpperMobilebutton>
  );
}

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import AnimateHeight from 'react-animate-height';
import classnames from 'classnames';
import { Override } from '../../../types/Override';
// import { AppStore } from '../../store';
import {FarmerIcon} from '../../../utils/svg/FarmerIcon';
import List from '../lists';
import { ButtonDay } from '../button-type';
import { ButtonCollapse } from './style';

export type CollapseProps = Override<
  React.ComponentPropsWithoutRef<'button'>,
  {
    text: string;
    btnType?: 'parent' | 'child';
    listNames?: string[];
    idFilter?: string;
    layerId?: string | '';
    src?: string;
    string?: string;
    filtername?: string;
  }
>;

const Collapse = ({
  text,
  btnType,
  listNames,
  idFilter,
  layerId,
  className,
  src,
  filtername,
  ...props
}: CollapseProps) => {
  // const dispatch = useDispatch();
  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
  };
  
  // Toggle the button linked layer vibility
  const [isLayerVisible, setIsLayerVisible] = useState(true);
  const isLayerVisibleState = () => {
    setIsLayerVisible(!isLayerVisible);
  };

  function capitalizeFirstLetter(string : string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const listday = text[1];

  // console.log(listday);

  // console.log(listNames)
  
  if (btnType === 'parent') {
    return (
      <div className="btn-parent" >
          {/* <FontAwesomeIcon icon={isLayerVisible ? faEye : faEyeSlash} onClick={isLayerVisibleState}/> */}
        <button className="btn" {...props}>
          {text.substring(0, 30) }
        </button>
      </div>
    );
  }

  // Medium button styling + lits display
  else if (btnType === 'child') {
    // console.log("ID FILTER", idFilter)
    // console.log("List Names", listNames)

    return (
      <>
        <ButtonCollapse
          onClick={isActiveState}
          className={classnames('btn', className, { active: !isActive })}
          {...props}
        >
          <span>
            <FontAwesomeIcon icon={!isActive ? faChevronRight : faChevronDown} />{' '}
          </span>

          {capitalizeFirstLetter(text?.substring(0, 30))}

        </ButtonCollapse>
        
        <AnimateHeight
          duration={500}
          height={!isActive ? 0 : 'auto'} 
          // see props documentation bellow
        >
            <List 
              listNames={listNames} 
              idFilter={idFilter}
            />

        </AnimateHeight>

        {/* <ButtonDay>
            {listNames.map((item, index) => (
              <li key={index} onClick={() => setFilterValue(item)}>
                {/* <ButtonIcon text={item}/> 
              </li>
            ))}
          </ButtonDay> */}
      </>
    );
  } else {
    return (
      <button
        onClick={isActiveState}
        className={classnames('btn', className, { selected: isActive })}
        {...props}
      >
        <FarmerIcon/>
        {text.substring(0, 30)}
      </button>
    );
  }
};

export default Collapse;

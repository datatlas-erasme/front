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
import List from '../lists';
import { ButtonDay } from '../button-type';
import { ButtonCollapse } from './style';

export type CollapseProps = Override<
  React.ComponentPropsWithoutRef<'button'>,
  {
    text: string;
    textType: string;
    textProduits: string;
    btnType?: 'parent' | 'child';
    listNames?: string[] | any;
    idFilter?: string;
    filtername?: string;
    dayList?: string[];
  }
>;

const Collapse = ({
  text,
  textType,
  textProduits,
  btnType,
  listNames,
  idFilter,
  className,
  filtername,
  dayList,
  ...props
}: CollapseProps) => {
  // const dispatch = useDispatch();
  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
  };

  const [height, setHeight] = useState(0);
  
  // Toggle the button linked layer vibility
  const [isLayerVisible, setIsLayerVisible] = useState(true);
  const isLayerVisibleState = () => {
    setIsLayerVisible(!isLayerVisible);
  };

  // function capitalizeFirstLetter(string : string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }
  // Medium button styling + lits display
  
    // console.log("ID FILTER", idFilter)
    // console.log("List Names", listNames)

    return (
      <>
        <ButtonCollapse
        aria-expanded={ height !== 0 }
        aria-controls='example-panel' 
          onClick={isActiveState}
          className={classnames('btn', className, { active: !isActive })}
          {...props}
        >
          <span>
            <FontAwesomeIcon 
            icon={!isActive ? faChevronRight : faChevronDown} 
            />{' '}
          </span>
          {text}
        </ButtonCollapse>
        
        <AnimateHeight
          style={{flexShrink: 0}}
          duration={500}
          height={!isActive ? 0 : 'auto'} 
          easing={'ease'}
        >
            <List 
              listNames={listNames} 
              idFilter={idFilter}
            />
        </AnimateHeight>
      </>
    ); 
};

export default Collapse;

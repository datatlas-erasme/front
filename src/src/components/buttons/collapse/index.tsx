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
    listTypes?: string[];
    listProduits?: string[];
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
  listTypes,
  listProduits,
  ...props
}: CollapseProps) => {
  // const dispatch = useDispatch();
  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
  };

  console.log(text);
  
  // Toggle the button linked layer vibility
  const [isLayerVisible, setIsLayerVisible] = useState(true);
  const isLayerVisibleState = () => {
    setIsLayerVisible(!isLayerVisible);
  };

  function capitalizeFirstLetter(string : string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // Medium button styling + lits display
  
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
            <FontAwesomeIcon 
            icon={!isActive ? faChevronRight : faChevronDown} 
            />{' '}
          </span>
          {capitalizeFirstLetter(text?.substring(0, 30))}
        </ButtonCollapse>
        
        <AnimateHeight
          duration={500}
          height={!isActive ? 0 : 'auto'} 
        >
            <List 
              listNames={listNames} 
              idFilter={idFilter}
              textType={textType}
              textProduits={textProduits}
            />
        </AnimateHeight>
      </>
    ); 
};

export default Collapse;
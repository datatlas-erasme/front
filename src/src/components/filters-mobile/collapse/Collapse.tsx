import React, { useState, useEffect } from 'react';
import {
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import AnimateHeight from 'react-animate-height';
import classnames from 'classnames';
import { Override } from '../../../types/Override';
// import { AppStore } from '../../store';
import List from '../lists/Lists';
import { ButtonCollapse, SubHeading } from './style';

library.add(faChevronRight,faChevronDown);

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
    icon: IconDefinition;
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
  icon,
  ...props
}: CollapseProps) => {
  // const dispatch = useDispatch();
  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
  };

  const [height, setHeight] = useState(0);

  // useEffect(() => {
  //   setHeight();
  // }, []);
  
  // Toggle the button linked layer vibility
  const [isLayerVisible, setIsLayerVisible] = useState(true);
  const isLayerVisibleState = () => {
    setIsLayerVisible(!isLayerVisible);
  };
  
  function TextCollaps(){
    if(text[0] === 'soustype'){
      return 'TYPE';
    } else if (text[0] === 'produits') {
      return 'PRODUITS';
    } else if (text[0] === 'label') {
      return 'LABEL & CERTIF.';
    } else if (text[0] === 'joursouverture') {
      return 'OUVERTURE';
    }
  }

  // Medium button styling + lits display
    // console.log("ID FILTER", idFilter)
    // console.log("List Names", listNames)

    return (
      <>
        <ButtonCollapse
        aria-expanded={ height !== 0 }
        aria-controls='panel-filter' 
          onClick={isActiveState}
          className={classnames(className, { active: isActive })}
          {...props}
        >
          <h4>{TextCollaps()}</h4>
        </ButtonCollapse>
        
        <AnimateHeight
          style={{
            flexShrink: 0,
            position: 'fixed',
            bottom: 0,
            width: '100vw',

          }}
          duration={500}
          delay={300}
          height={!isActive ? 0 : 'auto'} 
          easing={'ease'}
          className={'animateheight'}
        >
          <SubHeading>{TextCollaps()}</SubHeading>
            <List 
              listNames={listNames} 
              idFilter={idFilter}
              text={text}
            />
        </AnimateHeight>
      </>
    ); 
};

export default Collapse;

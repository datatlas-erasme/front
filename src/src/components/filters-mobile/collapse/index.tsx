import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import List from '../lists';
import { Colors } from '../../../styles';
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
  
  // Toggle the button linked layer vibility
  const [isLayerVisible, setIsLayerVisible] = useState(true);
  const isLayerVisibleState = () => {
    setIsLayerVisible(!isLayerVisible);
  };

  console.log(text);
  
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
            position: 'absolute',
            top: 1110,
            backgroundColor: 'white',
            padding: '20px 40px '
          }}
          duration={500}
          animationStateClasses={{animatingDown:'rah-animating--down'}}
          height={!isActive ? 0 : 'auto'} 
          easing={'ease'}
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

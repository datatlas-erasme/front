import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import AnimateHeight from 'react-animate-height';
import { Override } from '../../../types/Override';
import List from '../lists';
import { ButtonCollapse } from './style';

export type CollapseProps = Override<
  React.ComponentPropsWithoutRef<'button'>,
  {
    text: string;
    textType: string;
    textProduits: string;
    listNames?: string[] | any;
    idFilter?: number;
    filtername?: string;
    dayList?: string[];
    icon: IconDefinition;
    index?: number;
    isActive?: boolean;
    className?: string;
    onItemClick?: (item: any) => void;
  }
>;

const Collapse = ({
  text,
  textType,
  textProduits,
  listNames,
  idFilter,
  className,
  filtername,
  dayList,
  icon,
  index,
  isActive,
  onItemClick,
  ...props
}: CollapseProps) => {
  // Toggle the visibility of buttons parent list
  const [height] = useState(0);

  function TextCollaps() {
    if (!!text && text[0] === 'type') {
      return 'Qui ?';
    } else if (text[0] === 'produits') {
      return 'Quoi ?';
    } else if (text[0] === 'label') {
      return 'Label et Certifications';
    }
  }

  return (
    <>
      <ButtonCollapse
        aria-expanded={height !== 0}
        aria-controls="panel-filter"
        className={isActive ? 'active' : ''}
        aria-disabled={isActive === idFilter ? 'true' : 'false'}
        onClick={onItemClick}
      >
        <span>
          <FontAwesomeIcon icon={!isActive ? faChevronRight : faChevronDown} />{' '}
        </span>
        {TextCollaps()}
      </ButtonCollapse>

      <AnimateHeight
        id="panel-filter"
        style={{ flexShrink: 0 }}
        duration={500}
        height={!isActive ? 0 : 'auto'}
        easing={'ease'}
      >
        <List listNames={listNames} idFilter={idFilter} className={className} text={text} />
      </AnimateHeight>
    </>
  );
};

export default Collapse;

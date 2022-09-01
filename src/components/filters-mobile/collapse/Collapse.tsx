import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import AnimateHeight from 'react-animate-height';
import { Override } from '../../../types/Override';
import List from '../lists/Lists';
import { ButtonCollapse, SubHeading } from './style';

export type CollapseProps = Override<
  React.ComponentPropsWithoutRef<'button'>,
  {
    text: string;
    listNames?: string[] | any;
    idFilter?: string;
    icon: IconDefinition;
    isActive?: boolean;
    className?: string;
    onItemClick?: (item: any) => void;
  }
>;

const Collapse = ({
  text,
  listNames,
  idFilter,
  isActive,
  className,
  onItemClick,
  ...props
}: CollapseProps) => {
  const [height] = useState(0);

  function TextCollaps() {
    if (text[0] === 'type') {
      return 'QUI ?';
    } else if (text[0] === 'produits') {
      return 'QUOI ?';
    } else if (text[0] === 'joursouverture') {
      return 'QUAND ?';
    } else if (text[0] === 'label') {
      return 'LABEL';
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
          backgroundColor: '#fff',
          zIndex: 10,
          borderRadius: '35px 35px 0 0',
        }}
        duration={500}
        delay={300}
        height={!isActive ? 0 : 'auto'}
        easing={'ease'}
        className={'animateheight'}
      >
        <SubHeading onClick={onItemClick}>
          {TextCollaps()}
          <span>
            <FontAwesomeIcon icon={!isActive ? faChevronDown : faChevronRight} />{' '}
          </span>
        </SubHeading>
        <List listNames={listNames} idFilter={idFilter} text={text} />
      </AnimateHeight>
    </>
  );
};

export default Collapse;

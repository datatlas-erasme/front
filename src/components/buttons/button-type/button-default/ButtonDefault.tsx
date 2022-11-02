import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { layerConfigChange } from 'erasme-kepler.gl/actions';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import AnimateHeight from 'react-animate-height';
import classnames from 'classnames';
import { LightenDarkenColor } from 'lighten-darken-color';
import { Override } from '../../../../types/Override';
import { List } from '../../../filters-desktop/lists/Lists';
import { Button, ColorDot, ParentBtn, ParentBtnFooter, ParentBtnFooterContainer } from './style';

export type ButtonDefaultProps = Override<
  React.ComponentPropsWithoutRef<'button'>,
  {
    text: string;
    bg?: string;
    textSize?: string;
    btnType?: 'parent' | 'child';
    listNames?: string[];
    idFilter?: string;
    layerId?: string;
    iconName?: IconName;
    btnActive?: boolean;
    layer?: object;
  }
>;

const ButtonDefault = ({
  text,
  bg,
  textSize,
  btnType,
  listNames,
  idFilter = '0',
  layerId = '0',
  className,
  iconName,
  btnActive,
  layer,
  ...props
}: ButtonDefaultProps) => {
  const dispatch = useDispatch();

  // Toggle the visibility of buttons child list
  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
  };

  // Toggle the visibility of buttons child list
  const [isActiveParent, setIsActiveParent] = useState(false);
  const isActiveParentState = () => {
    setIsActiveParent(!isActiveParent);
  };

  // Toggle the button linked layer vibility
  const [isLayerVisible, setIsLayerVisible] = useState(true);
  const isLayerVisibleState = () => {
    setIsLayerVisible(!isLayerVisible);
  };

  useEffect(() => {
    if (layer) {
      dispatch(layerConfigChange(layer, { isVisible: isLayerVisible }));
    }
  }, [layer, layerId, isLayerVisible, dispatch]);

  // Big button style
  if (btnType === 'parent') {
    return (
      <div className="btn-parent">
        <Button
          {...props}
          style={{
            backgroundColor: 'black',
            borderRadius: btnActive ? '5px 5px 0px 0px' : '5px 5px 5px 5px',
          }}
        >
          <ColorDot onClick={isLayerVisibleState} style={{ backgroundColor: bg }} />
          {text.substring(0, 30)}
          <span>{btnActive ? '-' : '+'}</span>
        </Button>
      </div>
    );
  }
  // Medium button styling + lits display
  else if (btnType === 'child') {
    return (
      <div>
        <ParentBtn
          onClick={isActiveState}
          style={{ backgroundColor: LightenDarkenColor(bg, 30), fontSize: textSize }}
          className={classnames('btn', className, { active: !isActive })}
          {...props}
        >
          Filtrer par {text?.substring(0, 30)}
          <span>{isActive ? '-' : '+'}</span>
        </ParentBtn>
        <AnimateHeight
          duration={500}
          height={!isActive ? 0 : 'auto'} // see props documentation bellow
        >
          <div className="list">
            <List listNames={listNames} backgroundColor={bg} idFilter={idFilter} />
          </div>
        </AnimateHeight>
      </div>
    );
  } else if (btnType === 'parent-footer') {
    return (
      <ParentBtnFooterContainer>
        <ParentBtnFooter onClick={isLayerVisibleState}>Masquer ce calque</ParentBtnFooter>
        <ParentBtnFooter> A Propos du calque</ParentBtnFooter>
      </ParentBtnFooterContainer>
    );
  } else {
    return (
      <Button
        onClick={isActiveState}
        style={{ backgroundColor: bg, fontSize: textSize }}
        className={classnames('btn', className, { selected: !isActive })}
        {...props}
      >
        {text.substring(0, 30)}
      </Button>
    );
  }
};

ButtonDefault.defaultProps = {
  bg: '#ff241a',
  fontSize: '20px',
};

export default ButtonDefault;

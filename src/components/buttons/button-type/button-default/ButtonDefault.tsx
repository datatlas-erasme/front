import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layerConfigChange } from 'erasme-kepler.gl/actions';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import AnimateHeight from 'react-animate-height';
import classnames from 'classnames';
import { LightenDarkenColor } from 'lighten-darken-color';
import { Override } from '../../../../types/Override';
import { RootState } from '../../../../store';
import { List } from '../../../filters-desktop/lists/Lists';
import { IndustriesButton, ColorDot } from './style';

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
  }
>;

const ButtonDefault = ({
  text,
  bg,
  textSize,
  btnType,
  listNames,
  idFilter = '0',
  layerId,
  className,
  iconName,
  btnActive,
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

  // get the old layer state
  const layer = useSelector<RootState>((state) =>
    layerId !== undefined ? state.keplerGl.visState?.layers[layerId] : undefined,
  );

  useEffect(() => {
    //console.log(isLayerVisible)
    if (layer) {
      dispatch(layerConfigChange(layer, { isVisible: isLayerVisible }));
    }
  }, [layer, isLayerVisible, dispatch]);

  // Big button style
  if (btnType === 'parent') {
    return (
      <div className="btn-parent">
        <IndustriesButton {...props} style={{ backgroundColor: 'black' }}>
          <ColorDot onClick={isLayerVisibleState} style={{ backgroundColor: bg }} />
          {text.substring(0, 30)}
          <span>{btnActive ? '-' : '+'}</span>
        </IndustriesButton>
      </div>
    );
  }
  // Medium button styling + lits display
  else if (btnType === 'child') {
    return (
      <div>
        <IndustriesButton
          onClick={isActiveState}
          style={{ backgroundColor: LightenDarkenColor(bg, 30), fontSize: textSize }}
          className={classnames('btn', className, { active: !isActive })}
          {...props}
        >
          Filtrer par {text?.substring(0, 30)}
          <span>{isActive ? '-' : '+'}</span>
        </IndustriesButton>
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
  } else {
    return (
      <IndustriesButton
        onClick={isActiveState}
        style={{ backgroundColor: LightenDarkenColor(bg, 10), fontSize: textSize }}
        className={classnames('btn', className, { selected: !isActive })}
        {...props}
      >
        {text.substring(0, 30)}
      </IndustriesButton>
    );
  }
};

ButtonDefault.defaultProps = {
  bg: '#ff241a',
  fontSize: '20px',
};

export default ButtonDefault;

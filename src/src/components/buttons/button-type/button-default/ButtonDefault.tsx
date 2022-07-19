import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layerConfigChange } from 'erasme-kepler.gl/actions';
import AnimateHeight from 'react-animate-height';
import classnames from 'classnames';
import { LightenDarkenColor } from 'lighten-darken-color';
import { AppStore } from '../../redux/store';
import { List } from '../../../filters-desktop/lists/Lists';

export const ButtonDefault = ({
  text,
  bg,
  textSize,
  btnType,
  listNames,
  idFilter = '0',
  layerId,
  className,
  iconName,
  theme,
  ...props
}) => {
  const dispatch = useDispatch();

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

  // get the old layer state
  const layer = useSelector((state: AppStore) =>
    layerId !== undefined ? state.keplerGl.map?.visState?.layers[layerId] : undefined,
  );

  useEffect(() => {
    //console.log(isLayerVisible)
    if (layer) {
      dispatch(layerConfigChange(layer, { isVisible: isLayerVisible }));
    }
  }, [layer, isLayerVisible, dispatch]);

  console.log('btn type : ', btnType);

  // Big button style
  if (btnType === 'parent') {
    return (
      <div className="btn-parent" style={{ backgroundColor: bg, fontSize: textSize }}>
        <p onClick={isLayerVisibleState}></p>
        <button className="btn" {...props} style={{ backgroundColor: bg }}>
          {text.substring(0, 30)}
        </button>
      </div>
    );
  }

  if (btnType === 'child') {
    return (
      <div>
        <button
          onClick={isActiveState}
          style={{ backgroundColor: LightenDarkenColor(bg, 30), fontSize: textSize }}
          className={classnames('btn', className, { active: !isActive })}
          {...props}
        >
          {text?.substring(0, 30)}
        </button>
        <AnimateHeight
          duration={500}
          height={!isActive ? 0 : 'auto'} // see props documentation bellow
        >
          <div className="list">
            <List theme={theme} listNames={listNames} backgroundColor={bg} idFilter={idFilter} />
          </div>
        </AnimateHeight>
      </div>
    );
  } else {
    return (
      <button
        onClick={isActiveState}
        style={{ backgroundColor: LightenDarkenColor(bg, 60), fontSize: textSize }}
        className={classnames('btn', className, { selected: !isActive })}
        {...props}
      >
        {text.substring(0, 30)}
      </button>
    );
  }
};

ButtonDefault.defaultProps = {
  bg: '#ff241a',
  fontSize: '20px',
};

export default ButtonDefault;

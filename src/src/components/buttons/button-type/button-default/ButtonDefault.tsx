import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layerConfigChange } from 'erasme-kepler.gl/actions';
import { IconName, IconPrefix, IconProp, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEye, faMapMarked, faMapMarker, faUserFriends, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimateHeight from 'react-animate-height';
import classnames from 'classnames';
import { LightenDarkenColor } from 'lighten-darken-color';
import { Override } from '../../types/Override';
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
  ...props
}
) => {

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

  console.log("btn type : ", btnType)
 
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
          <div className='list'>
            <List listNames={listNames} backgroundColor={bg} idFilter={idFilter} />
          </div>
        </AnimateHeight>
      </div>
    );
  }
}

ButtonDefault.defaultProps = {
  bg: '#ff241a',
  fontSize: '20px',
};

export default ButtonDefault
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
import { RootState } from '../../../../store';
import { List } from '../../../filters-desktop/lists/Lists';

library.add(fab, faCheckSquare, faCoffee, faMapMarker, faUserFriends, faEye, faPlus, faTimes)

export type ButtonProps = Override<
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
  }
>;

const Button = ({
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
}: ButtonProps) => {
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
      <div className="btn-parent" style={{ backgroundColor: bg, fontSize: textSize }}>
        <button className="btn" style={{ backgroundColor: bg }} {...props}>
          <p onClick={isLayerVisibleState}>
            <span className='circle' style={{ backgroundColor: bg}}></span>
          </p>
          {text.substring(0, 30)}
        </button>
      </div>
    );
  }
  // Medium button styling + lits display
  else if (btnType === 'child') {

    return (
      <div>
        <button
          onClick={isActiveState}
          style={{ backgroundColor: LightenDarkenColor(bg, 30), fontSize: textSize }}
          className={classnames('btn', className, { active: !isActive })}
          {...props}
        >
          Filtrer par {text?.substring(0, 30)}

          <span>{isActive ? "-" : "+"}</span>
        </button>
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

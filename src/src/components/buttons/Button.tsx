import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { layerConfigChange } from 'kepler.gl/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import AnimateHeight from 'react-animate-height';
import classnames from 'classnames';
import { LightenDarkenColor } from 'lighten-darken-color';
import { ButtonCollapse } from '../../styles/buttons/button-collapse';
import { Override } from '../../types/Override';
// import { AppStore } from '../../store';
import {FarmerIcon} from '../../utils/svg/FarmerIcon';
import List from './List';

export type ButtonProps = Override<
  React.ComponentPropsWithoutRef<'button'>,
  {
    text: string;
    bg?: string;
    textSize?: string;
    btnType?: 'parent' | 'child';
    listNames?: string[];
    idFilter?: string;
    layerId?: string | '';
    src?: string;
  }
>;

const Button = ({
  text,
  bg,
  textSize,
  btnType,
  listNames,
  idFilter,
  layerId,
  className,
  src,
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

  // // get the old layer state
  // const layer = useSelector((state: AppStore) =>
  //   layerId !== undefined ? state.keplerGl.map?.visState?.layers[layerId] : undefined,
  // );

  // useEffect(() => {
  //   //console.log(isLayerVisible)
  //   if (layer) {
  //     dispatch(layerConfigChange(layer, { isVisible: isLayerVisible }));
  //   }
  // }, [layer, isLayerVisible, dispatch]);

  // Big button style
  
  if (btnType === 'parent') {
    return (
      <div className="btn-parent" style={{ backgroundColor: bg, fontSize: textSize }}>
        <ButtonCollapse className="btn" {...props}>
          {text.substring(0, 30) }
        </ButtonCollapse>
      </div>
    );
  }
  // Medium button styling + lits display
  else if (btnType === 'child') {
    // console.log("ID FILTER", idFilter)
    //console.log("List Names", listNames)

    return (
      <>
        <button
          onClick={isActiveState}
          style={{ backgroundColor: LightenDarkenColor(bg, -20), fontSize: textSize }}
          className={classnames('btn', className, { active: !isActive })}
          {...props}
        >
          <span>
            <FontAwesomeIcon icon={!isActive ? faChevronRight : faChevronDown} />{' '}
          </span>

          {text?.substring(0, 30)}
        </button>
        
        <AnimateHeight
          duration={500}
          height={!isActive ? 0 : 'auto'} 
          // see props documentation bellow
        >
            <List 
              listNames={listNames} 
              backgroundColor={bg} 
              idFilter={idFilter}
            />

        </AnimateHeight>
      </>
    );
  } else {
    return (
      <button
        onClick={isActiveState}
        style={{ backgroundColor: LightenDarkenColor(bg, -60), fontSize: textSize }}
        className={classnames('btn', className, { selected: isActive })}
        {...props}
      >
        <FarmerIcon/>
        {text.substring(0, 30)}
      </button>
    );
  }
};

export default Button;

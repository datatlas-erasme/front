import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { layerConfigChange } from 'erasme-kepler.gl/actions';
import classnames from 'classnames';
import { Override } from '../../types/Override';
import {FarmerIcon} from '../../utils/svg/FarmerIcon';

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

  // Big button style

  // Medium button styling + lits display

    // console.log("ID FILTER", idFilter)
    //console.log("List Names", listNames)

    return (
      <button
        onClick={isActiveState}
        // style={{ backgroundColor: LightenDarkenColor(bg, -60), fontSize: textSize }}
        className={classnames('btn', className, { selected: isActive })}
        {...props}
      >
        <FarmerIcon/>
        {text.substring(0, 30)}
      </button>
    );
  };

// Button.defaultProps = {
//   bg: '#ff241a',
//   fontSize: '20px',
// };

export default Button;

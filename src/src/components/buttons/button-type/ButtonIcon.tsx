import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { layerConfigChange } from 'erasme-kepler.gl/actions';
import classnames from 'classnames';
import { Override } from '../../../types/Override';
import { 
  FishIcon,
  CatererIcon,
  CheeseIcon,
  CreamryIcon,
  DrinkIcon,
  FruitIcon,
  GroceryIcon,
  HoneyIcon,
  MeatIcon,
  VegetablesIcon
} from '../../../utils/svg/products';
import {BakeryIcon} from '../../../utils/svg/products/BakeryIcon'
import { Badge } from './style';

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

export default function ButtonIcon ({
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
}: ButtonProps){

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

    return (
      <Badge
        onClick={isActiveState}
        // style={{ backgroundColor: LightenDarkenColor(bg, -60), fontSize: textSize }}
        className={classnames('btn', className, { selected: isActive })}
        {...props}
      >
        <BakeryIcon/>
        <p>{text.substring(0, 30)}</p>
      </Badge>
    );
  };
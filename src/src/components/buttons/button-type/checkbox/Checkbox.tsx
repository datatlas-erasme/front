import { useState } from "react";
import { useDispatch } from 'react-redux';
// import classnames from 'classnames';
import { Override } from '../../../../types/Override';

export type CheckboxProps = Override<
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

export default function Checkbox({  
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
}: CheckboxProps){

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

    return(
        <>
                <input type="checkbox" />
                <label> {text} </label>
      </>
    )
};
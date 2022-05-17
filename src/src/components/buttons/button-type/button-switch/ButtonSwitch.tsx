import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { layerConfigChange } from 'erasme-kepler.gl/actions';
import classnames from 'classnames';
import { Override } from '../../../../types/Override';
import { SwitchWrapper } from './style';

export type ButtonProps = Override<
  React.ComponentPropsWithoutRef<'button'>,
  {
    filterglobal: any;
    handleToggle: any;
    isOn: boolean; 
    layer : 2;
  }
>;

export default function ButtonSwitch ({
    isOn,
    handleToggle,
    filterglobal,
    ...props}: ButtonProps) {

        const dispatch = useDispatch();

// Toggle the button linked layer vibility
        const [isLayerVisible, setIsLayerVisible] = useState(true);
        const isLayerVisibleState = () => {
        setIsLayerVisible(!isLayerVisible);
        };

        console.log(isLayerVisible);
        
// get the old layer state
        console.log(filterglobal);

        useEffect(() => {
            //console.log(isLayerVisible)
            if (filterglobal) {
            dispatch(layerConfigChange(filterglobal, { isVisible: isLayerVisible }));
            }
            }, [filterglobal, isLayerVisible, dispatch]);

    return (
      <SwitchWrapper>
        <input
            onClick={isLayerVisibleState}
            checked={isOn}
            onChange={handleToggle}
            className="switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
        />
        <label
          className="switch-label"
          htmlFor={`switch-button`}
        >
          <span className={`switch-button`} />
        </label>
      </SwitchWrapper>
    );
  };
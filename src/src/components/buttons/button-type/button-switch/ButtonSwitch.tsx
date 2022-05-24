import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { layerConfigChange } from 'erasme-kepler.gl/actions';
import {useViewport} from '../../../../utils/ViewportConext';
import { Override } from '../../../../types/Override';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel  } from './style';

export type ButtonProps = Override<
  React.ComponentPropsWithoutRef<'button'>,
  {
    filterglobal: any;
    layer : 2;
    handleToggle: any;
    dataOn: any;
    }
>;

export default function ButtonSwitch ({
    filterglobal,
    handleToggle,
    dataOn,
    ...props}: ButtonProps) {

// Toggle the button linked layer vibility
const [isLayerVisible, setIsLayerVisible] = useState(false);
const handlechange = () => {
        setIsLayerVisible(!isLayerVisible);
        console.log(isLayerVisible);
        };

const dispatch = useDispatch();

useEffect(() => {
    if (filterglobal) {
        dispatch(layerConfigChange(filterglobal, { isVisible: !isLayerVisible }));
    }
}, [filterglobal, isLayerVisible, dispatch]);

const { width } = useViewport();
const breakpoint = 1024;

    return (
      width < breakpoint ? (
        <CheckBoxWrapper>
        <CheckBox
              onChange={handlechange}
              checked={isLayerVisible}
              id={`checkbox`}
              type="checkbox"
            />
          <CheckBoxLabel
            className="switch-label"
            htmlFor={`checkbox`}
          />
      </CheckBoxWrapper>
      ) : (
      <>
        <h4>Les marchés de Lyon</h4>
        <CheckBoxWrapper>
          <CheckBox
                onChange={handlechange}
                checked={isLayerVisible}
                id={`checkbox`}
                type="checkbox"
              />
            <CheckBoxLabel
              className="switch-label"
              htmlFor={`checkbox`}
            />
        </CheckBoxWrapper>
      </>
          ) 
    );
  };

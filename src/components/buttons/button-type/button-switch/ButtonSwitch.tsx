import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layerConfigChange } from 'erasme-kepler.gl/actions';
import { useViewport } from '../../../../utils/ViewportConext';
// import { Override } from '../../../../types/Override';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './style';

export default function ButtonSwitch() {
  // Toggle the button linked layer vibility
  const [isLayerVisible, setIsLayerVisible] = useState(false);
  const { width } = useViewport();
  const breakpoint = 1024;
  const dispatch = useDispatch();

  // Get isVisible from Kepler state
  const layerGlobalMarket = useSelector((state: any) => state.keplerGl.map.visState.layers[1]);
  const handlechange = () => setIsLayerVisible(!isLayerVisible);

  useEffect(() => {
    dispatch(layerConfigChange(layerGlobalMarket, { isVisible: isLayerVisible }));
  }, [layerGlobalMarket, isLayerVisible, dispatch]);

  return width < breakpoint ? (
    <CheckBoxWrapper>
      <CheckBox onChange={handlechange} checked={isLayerVisible} id={`checkbox`} type="checkbox" />
      <CheckBoxLabel className="switch-label" htmlFor={`checkbox`} />
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
        <CheckBoxLabel className="switch-label" htmlFor={`checkbox`} />
      </CheckBoxWrapper>
    </>
  );
}

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layerConfigChange } from 'erasme-kepler.gl/actions';
import { getFirstLayers } from '../../../../store/keplerGl';
import { useViewport } from '../../../../utils/ViewportConext';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel, CheckBoxTitle } from './style';

export default function ButtonSwitch() {
  // Toggle the button linked layer vibility
  const [isLayerVisible, setIsLayerVisible] = useState(false);
  const { width } = useViewport();
  const breakpoint = 1024;
  const dispatch = useDispatch();

  // Get isVisible from Kepler state
  const layerGlobalMarket = useSelector(getFirstLayers);
  const handlechange = () => setIsLayerVisible(!isLayerVisible);

  useEffect(() => {
    if (layerGlobalMarket) {
      dispatch(layerConfigChange(layerGlobalMarket, { isVisible: !isLayerVisible }));
    }

    return;
  }, [layerGlobalMarket, isLayerVisible, dispatch]);

  return (
    <>
      {width < breakpoint ? (
        <CheckBoxTitle>VOIR LES MARCHÉS</CheckBoxTitle>
      ) : (
        <CheckBoxTitle>Voir les marchés de la métropole</CheckBoxTitle>
      )}
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

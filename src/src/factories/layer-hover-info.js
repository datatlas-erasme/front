import { LayerHoverInfoFactory } from 'kepler.gl/components';
import AuxLayerHoverInfo from './AuxLayerHoverInfo';

const CustomLayerHoverInfoFactory = () => AuxLayerHoverInfo;

export function replaceLayerHoverInfo() {
  return [LayerHoverInfoFactory, CustomLayerHoverInfoFactory];
}

import React from 'react';
import CustomLayerHoverInfo from "./CustomLayerHoverInfo"

// This component is responsible for inheriting the props of LayerHoverInfoFactory and pass it down to our custom layerHoverInfo component.
const AuxLayerHoverInfo = (props) => <CustomLayerHoverInfo {...props} />

export default AuxLayerHoverInfo

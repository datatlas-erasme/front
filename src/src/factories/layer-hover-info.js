import AuxLayerHoverInfo from "./AuxLayerHoverInfo"
import {LayerHoverInfoFactory} from "kepler.gl/components"

const CustomLayerHoverInfoFactory = () => AuxLayerHoverInfo

export function replaceLayerHoverInfo() {
    return [LayerHoverInfoFactory, CustomLayerHoverInfoFactory]
}

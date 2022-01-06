import { FilterPanel } from "../filters";
import Crowdsourcing from "../buttons/Crowdsourcing";
import {Panel} from "../../styles/panel"

export default function PanelControl() {
    return(
        <Panel>
            <div>
                <FilterPanel/>
            </div>
            <Crowdsourcing/>
        </Panel>   
    )
}
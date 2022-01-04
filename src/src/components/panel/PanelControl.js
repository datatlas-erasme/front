import { FilterPanel } from "../filters";
import Crowdsourcing from "../buttons/Crowdsourcing";
import SearchBar from "../search-bar/SearchBar";
import {Panel} from "../../styles/panel"

export default function PanelControl() {
    return(
        <Panel>
            <div>
                <SearchBar/>
                <FilterPanel/>
            </div>
            <Crowdsourcing/>
        </Panel>   
    )
}
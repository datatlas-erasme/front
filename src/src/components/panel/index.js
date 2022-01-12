import { FilterPanel } from "../filters";
import AddButton from "../buttons/interactiv-button";
import {Panel} from "./style"

export default function PanelControl() {
    return(
        <Panel>
            <FilterPanel/>
            <AddButton/>
        </Panel>   
    )
}
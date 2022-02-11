import { useMemo, useContext } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { toggleModal, setFilterUpdater } from 'erasme-kepler.gl/actions';
import FilterMod from '../filters/filter-mod';
import AddButton from "../buttons/interactiv-button";
import {Panel} from "./style"

const PanelControl = () => {

    const dispatch = useDispatch();
    // Get the filter values, id  and map them to buttons
    const filtersDomain = useSelector( state => state.keplerGl.map?.visState?.filters ?? []);
    const layers = useSelector( state => state.keplerGl.map?.visState?.layers ?? {});

    const filterTree = useMemo(() => {
        return Object.values(layers).map((value, i) => {
            return { label: value.config.label, id: value.config.dataId, key: i};
            });
    }, [layers]);

    const Filters = filterTree.map((value, index) => {
        return <FilterMod key={index} value={value} index={index} filtersDomain={filtersDomain} />;
    });

    return(
        <Panel>
            {Filters}
            <AddButton/>
        </Panel>   
    )
};

const dispatchToProps = (dispatch) => ({ dispatch });

export default connect(dispatchToProps, setFilterUpdater, toggleModal)(PanelControl);
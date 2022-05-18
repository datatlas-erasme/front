import { useMemo, useEffect} from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { toggleModal, setFilterUpdater, layerTypeChange } from 'erasme-kepler.gl/actions';
import { DesktopPanelControl } from '../filters-desktop';
import { MobilePanelControl } from '../filters-mobile';
import AddButton from '../buttons/interactiv-button';
import {useViewport} from '../../utils/ViewportConext';
import {Panel} from "./style"

const PanelControl = () => {

    const { width } = useViewport();
    const breakpoint = 1024;

    const dispatch = useDispatch();

    // Get the filter values, id  and map them to buttons
    const filtersDomain = useSelector( state => state.keplerGl.map?.visState?.filters ?? []);
    const layers = useSelector( state => state.keplerGl.map?.visState?.layers ?? {});
    // const layerGlobal = useSelector( state => state.keplerGl.map?.visState?.filters ?? []);
    // console.log(filtersDomain);
    // useEffect(() => {
    //     dispatch(layerTypeChange(layers[0], 'cluster'));

    // }, [layers[0]])

    const filterTree = useMemo(() => {
        return Object.values(layers).map((value, i) => {
            return { label: value.config.label, dataid: value.config.dataId, key: i, id: value.id };
            });
    }, [layers]);

    const Filters = filterTree.map((value, index) => {
        return (
            !!value.id && value.id === 'esul18e' ? (
                width < breakpoint ? (
                    <MobilePanelControl key={index} value={value} index={index} filtersDomain={filtersDomain} />
                ) : (
                    <DesktopPanelControl key={index} value={value} index={index} filtersDomain={filtersDomain} layers={layers}/>
                )
            ) : null
        );
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
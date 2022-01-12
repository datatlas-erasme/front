import { useMemo, useContext } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import {toggleModal} from 'kepler.gl/actions';
// import { ConfContext } from '../../../providers/ConfProvider';
import Button from '../../buttons/Button';
//Todo use redux instead ?
import FilterMod from '../filter-mod';

const FilterSidePanel = (props) => {
  
  // const exportDataBtn = useContext(ConfContext).modules.exportDataBtn;
  // console.log(exportDataBtn);
  const dispatch = useDispatch();
  // Get the filter values, id  and map them to buttons
  const filtersDomain = useSelector((state) => state.keplerGl.map?.visState?.filters ?? []);
  const layers = useSelector((state) => state.keplerGl.map?.visState?.layers ?? {}
  );

  console.log(filtersDomain);
  // console.log(layers.config);

  const filterTree = useMemo(() => {
    return Object.values(layers).map((value) => {
      return { label: value.config.label, id: value.config.dataId };
    });
  }, [layers]);

  // console.log(layers);

  //TODO Get layer color and use it for buttons bg color

  const Filters = filterTree.map((value, index) => {
    return <FilterMod key={index} value={value} index={index} filtersDomain={filtersDomain} />;
  });

  const openAddData = () => {
    dispatch(toggleModal('addData'));
  };

  const exportFilteredData = () => {
    dispatch(toggleModal('exportData'));
  };

  return (
    <>
      {Filters}
      {/* <ul>
        <Button btnType="parent" bg="#5a8aa5" onClick={openAddData} text="Ajouter un calque" />
        {exportDataBtn ??<Button
          btnType="parent"
          bg="white"
          onClick={exportFilteredData}
          text="exporter les données filtrées"
        /> }
      </ul> */}
    </>
  );
};

const dispatchToProps = (dispatch) => ({ dispatch });

export default connect(dispatchToProps)(FilterSidePanel);

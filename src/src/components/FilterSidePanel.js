import React, { useMemo, useContext } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import {
  toggleModal,
  setExportFiltered,
  setExportDataType,
  showExportDropdown,
} from 'erasme-kepler.gl/actions';
import { ConfContext } from '../providers/ConfProvider';
import Button from './filter-side-panel/Button';
//Todo use redux instead ?
import FilterMod from './FilterMod';
import BottomRightSection from './BottomRightSection';

const FilterSidePanel = () => {
  
  const exportDataBtn = useContext(ConfContext).modules.exportDataBtn;
  const dispatch = useDispatch();
  // Get the filter values, id  and map them to buttons
  const filtersDomain = useSelector((state) => state.keplerGl.map?.visState?.filters ?? []);
  const layers = useSelector((state) => state.keplerGl.map?.visState?.layers ?? {});

  const filterTree = useMemo(() => {
    return Object.values(layers).map((value) => {
      return { label: value.config.label, id: value.config.dataId };
    });
  }, [filtersDomain, layers]);
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
    <div className="filters">
      {Filters}
      
      <BottomRightSection />
    </div>
  );
};

const dispatchToProps = (dispatch) => ({ dispatch });

export default connect(dispatchToProps)(FilterSidePanel);

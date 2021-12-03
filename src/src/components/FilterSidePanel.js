import React, { useMemo } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import {
  toggleModal,
  setExportFiltered,
  setExportDataType,
  showExportDropdown,
} from 'kepler.gl/actions';
import Button from './filter-side-panel/Button';
//Todo use redux instead ?
import FilterMod from './FilterMod';

const FilterSidePanel = () => {
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
      <ul>
        <Button btnType="parent" bg="#5a8aa5" onClick={openAddData} text="Ajouter un calque" />
        <Button
          btnType="parent"
          bg="#5a8aa5"
          onClick={exportFilteredData}
          text="exporter les données filtrées"
        />
      </ul>
    </div>
  );
};

const dispatchToProps = (dispatch) => ({ dispatch });

export default connect(dispatchToProps)(FilterSidePanel);

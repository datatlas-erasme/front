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
import About from './About';

const FilterSidePanel = () => {
  
  const exportDataBtn = useContext(ConfContext).modules.exportDataBtn;
  const dispatch = useDispatch();
  // Get the filter values, id  and map them to buttons
  const filtersDomain = useSelector((state) => state.keplerGl.map?.visState?.filters ?? []);
  const layers = useSelector((state) => state.keplerGl.map?.visState?.layers ?? {});
// TODO PUT in a helper file
const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16)

  return hex.length === 1 ? '0' + hex : hex
}).join('')

const filterTree = useMemo(() => {
  return Object.values(layers).map((value) => {

    // WIP trying to get layer color to map to filter btn color
    var colorRgb = value.config.color
    var colorHexa = rgbToHex(colorRgb[0], colorRgb[1], colorRgb[2])
    //console.log(colorRgb)
    //console.log(rgbToHex(colorRgb[0], colorRgb[1], colorRgb[2]))

    return { label: value.config.label, id: value.config.dataId, colorHexa: colorHexa};
  });
}, [filtersDomain, layers]);
//TODO Get layer color and use it for buttons bg color

const Filters = filterTree.map((value, index, color) => {
  return <FilterMod key={index} value={value} index={index} filtersDomain={filtersDomain} color={value.colorHexa} />;
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
      <About/>
    </div>
  );
};

const dispatchToProps = (dispatch) => ({ dispatch });

export default connect(dispatchToProps)(FilterSidePanel);

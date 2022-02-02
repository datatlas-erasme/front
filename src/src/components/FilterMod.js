import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AnimateHeight from 'react-animate-height';
import instanceConf from '../static/instanceConf.json';
import Button from './filter-side-panel/Button';

const buttonColorRange = instanceConf.theme.filterSidePanel.buttonColorRange;

const FilterMod = ({ value, index, filtersDomain }) => {
  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const datasetLabel = value.label;
  const datasetId = value.id;
  const datasetIndex = index;
  //const datasetIcon = useSelector((state) => state.keplerGl.map?.visState?.datasets[datasetId]?.fields.map((field,index) => field.name === "icon" ? index :  null).filter(name => name ? name : "") ?? {});
  const datasetIconIndex = useSelector((state) => state.keplerGl.map?.visState?.datasets[datasetId]?.fields.filter((field, index) => field.name  === "icon")[0].fieldIdx ?? {});
  const datasetIcon = useSelector((state) => state.keplerGl.map?.visState.datasets[datasetId]?.allData[0][datasetIconIndex] ?? {});

  //TODO add those icons in the icon.json and rename to font awesome naming
  function fontAwesomeName() {
    if(datasetIcon === "place") {
      return  "map-marker"
    }
    else if (datasetIcon === "employees") {
      return  "user-friends"
    }
    else {
      return "eye"
    }
  }

  //console.log(fontAwesomeName)
  const ParentBtn = (
    <Button
      onClick={handleClick}
      btnType="parent"
      bg={buttonColorRange[datasetIndex]}
      text={datasetLabel}
      layerId={index}
      iconName={fontAwesomeName(datasetIcon)}
    />
  );

  const Domains = filtersDomain?.map((filter, index) => {
    const filterName = filter?.name;
    const filterId = filter?.dataId;
    const filterDomain = filter?.domain;
    if (filterId == datasetId) {
      return (
        <div className='filter'>
          <li key={index} className="filter-parent">
            <Button
              bg={buttonColorRange[datasetIndex]}
              btnType="child"
              text={filterName[0].replace(/_/g, ' ')}
              listNames={filterDomain}
              idFilter={index}
            />
            }
          </li>
        </div>
      );
    }
  });

  return (
    <ul>
      {ParentBtn}

      <AnimateHeight
        duration={500}
        height={!isActive ? 0 : 'auto'} // see props documentation bellow
      >
        <>{Domains}</>
      </AnimateHeight>
    </ul>
  );
};

export default FilterMod;

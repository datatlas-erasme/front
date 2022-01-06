import { useState } from 'react';
import SearchBar from '../../search-bar/SearchBar';
// import AnimateHeight from 'react-animate-height';
import instanceConf from '../../../conf/instanceConf.json';
import Button from '../../buttons/Button';
import { ButtonCollapse } from '../../../styles/buttons/button-collapse';
import { BlockFilters } from '../../../styles/bock-filters/block-filters';

const buttonColorRange = instanceConf.theme.filterSidePanel.buttonColorRange;

const FilterMod = ({ value, index, filtersDomain }) => {

  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const datasetLabel = value.label;
  const datasetIndex = index;

  console.log(datasetLabel);
  console.log(datasetIndex);
  // const datasetId = value.id;

  const ParentBtn = (
    <Button
      onClick={handleClick}
      btnType="parent"
      bg={buttonColorRange[datasetIndex]}
      text={datasetLabel}
      layerId={index}
    />
  );

  console.log(buttonColorRange);

  const Domains = filtersDomain?.map((filter, index) => {
    const filterName = filter?.name;
    const filterDomain = filter?.domain;
    // const filterId = filter?.dataId;

      return (
          <li key={index} id="filter-parent-1" className="filter-parent">
            <ButtonCollapse
              bg={buttonColorRange[datasetIndex]}
              btnType="child"
              text={filterName[0]}
              listNames={filterDomain}
              idFilter={index}
            />
          </li>
      );
  });

console.log(Domains);

  return (
    <BlockFilters>

      <h2>{datasetLabel}</h2>

      <SearchBar/>

      {/* {ParentBtn} */}

      {/* <AnimateHeight
        duration={500}
        height={!isActive ? 0 : 'auto'} // see props documentation bellow
      > */}

        <ul>{Domains}</ul>

      {/* </AnimateHeight> */}

    </BlockFilters>
  );
};

export default FilterMod;

import { useState } from 'react';
import SearchBar from '../../search-bar';
// import AnimateHeight from 'react-animate-height';
import Collapse from '../../buttons/collapse'
import { ButtonDay } from '../../buttons/button-type';
import { BlockFilters, ParentFilter, DomainFilter, HeadingFilter } from './style';

const FilterMod = ({ value, index, filtersDomain }) => {

  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const datasetLabel = value.label;
  const datasetIndex = index;

  // console.log(datasetLabel);
  // console.log(datasetIndex);
  // const datasetId = value.id;

  // const ParentBtn = (
  //   <Collapse
  //     onClick={handleClick}
  //     btnType="parent"
  //     bg={buttonColorRange[datasetIndex]}
  //     text={datasetLabel}
  //     layerId={index}
  //   />
  // );

  const Domains = filtersDomain?.map((filter, index) => {
    const filterName = filter?.name;
    const filterDomain = filter?.domain;
    // const filterId = filter?.dataId;

    console.log(filterName);
    console.log(filterDomain);

      return (
          <ParentFilter key={index} id="filter-parent-1" className="filter-parent">
            <Collapse
              btnType="child"
              text={filterName[0]}
              listNames={filterDomain}
              idFilter={index}
            />
          </ParentFilter>
      );
  });

console.log(filtersDomain);

  return (
    <BlockFilters>
      
      <HeadingFilter>{datasetLabel}</HeadingFilter>

      <SearchBar/>

      {/* {ParentBtn} */}

      {/* <AnimateHeight
        duration={500}
        height={!isActive ? 0 : 'auto'} // see props documentation bellow
      > */}

        <DomainFilter>{Domains}</DomainFilter>

        <ButtonDay/>

      {/* </AnimateHeight> */}

    </BlockFilters>
  );
};

export default FilterMod;

import { useState } from 'react';
import SearchBar from '../../search-bar';
// import AnimateHeight from 'react-animate-height';
import Collapse from '../../buttons/collapse'
import { ButtonDay } from '../../buttons/button-type';
import { BlockFilters, ParentFilter, DomainFilter, HeadingFilter } from './style';

const FilterMod = ({ value, index, filtersDomain }) => {

  // Toggle the visibility of buttons parent list
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive(!isActive);
  // };

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

  console.log(filtersDomain[0].name[0]);

  // const Domains = filtersDomain?.map((filter, index) => {
  //   const filterName = filter?.name;
  //   const filterDomain = filter?.domain;
  //   // const filterId = filter?.dataId;
  //   console.log(filterDomain);

  //     return (
  //       <>
  //         <ParentFilter key={index} id="filter-parent-1" className="filter-parent">
  //           <Collapse
  //             btnType="child"
  //             text={filterName[0]}
  //             textType={filtersDomain[0].name[0]}
  //             textProduits={filtersDomain[2].name[0]}
  //             listTypes={filtersDomain[0].domain}
  //             listProduits={filtersDomain[2].domain}
  //             listNames={filterDomain}
  //           />
  //         </ParentFilter>
  //         </>
  //     );
  // });

  // const allowed = ['0', '2'];
  // const collapseFilter = Object.keys(filtersDomain)
  //             .filter(key => allowed.includes(key))
  //             .reduce((obj, key) => {

  //               return {
  //                 ...obj,
  //               [key]: filtersDomain[key]
  //             };
  //             }, {});
  const key = '1';
  const { [key]: _, ...newFiltersDomain } = filtersDomain;

  const Domains = Object.keys(newFiltersDomain).map((filter, index) => {
    const filterName = newFiltersDomain[filter].name;
    const filterDomain = newFiltersDomain[filter].domain;
    const filterId = newFiltersDomain[filter].dataId;

    console.log(newFiltersDomain[filter].domain);

      return (
        <>
          <ParentFilter key={index} id="filter-parent-1" className="filter-parent">
            <Collapse
              btnType="child"
              text={filterName[0]}
              listNames={filterDomain}
              idFilter={index}
            />
          </ParentFilter>
        </>
      );
  });
console.log(Domains);

  return (
    <BlockFilters> 
      <HeadingFilter>{datasetLabel}</HeadingFilter>
      {/* <SearchBar/> */}
      <DomainFilter>{Domains}</DomainFilter>
      <ButtonDay dayList={filtersDomain[1].domain} text={filtersDomain[1].name[0]} idFilter={1}></ButtonDay>
    </BlockFilters>
  );
};

export default FilterMod;

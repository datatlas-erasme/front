import { useState } from 'react';
import SearchBar from '../../search-bar';
// import AnimateHeight from 'react-animate-height';
import Collapse from '../collapse'
import { setFilterUpdater } from '../../../store/reducer';
import { ButtonDay } from '../../buttons/button-type';
import { BlockFilters, ParentFilter, DomainFilter, HeadingFilter } from './style';

const DesktopPanelControl = ({ filtersDomain, initialActiveItemIndex, closeOtherItemsOnClick }) => {

  // Toggle the visibility of buttons parent list
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive(!isActive);
  // };

  // const datasetLabel = filtersDomain.dataId;
  // const datasetIndex = index;

  // const filterLabel = filtersDomain.name

  // const ParentBtn = (
  //   <Collapse
  //     onClick={handleClick}
  //     btnType="parent"
  //     bg={buttonColorRange[datasetIndex]}
  //     text={datasetLabel}
  //     layerId={index}
  //   />
  // );

  //   const allowed = ['1', '2', '4'];
  // const newFiltersDomain = Object.keys(filtersDomain)
  //             .filter(key => allowed.includes(key))
  //             .reduce((obj, key) => {

  //               return {
  //                 ...obj,
  //               [key]: filtersDomain[key]
  //             };
  //             }, {});

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
  //             textType={filtersDomain[1].name[1]}
  //             textProduits={filtersDomain[2].name[0]}
  //             listTypes={filtersDomain[1].domain}
  //             listProduits={filtersDomain[2].domain}
  //             listNames={filterDomain}
  //           />
  //         </ParentFilter>
  //         </>
  //     );
  // });

  // const key = '1';
  // const { [key]: _, ...newFiltersDomain } = filtersDomain;

// const conditions = ['type', 'produits', 'label'];

// const filteredResults = filtersDomain.filter(el => conditions.some(filterEl => el[filterEl.name] === filterEl.name));
// const res1 = filtersDomain.filter(data => {
//   console.log(data.name);
  
//   return data.name === 'type';
// });
// console.log(res1);

// const res2 = filtersDomain.filter(data => {
//   for (let key in conditions) {
//     if (data[key] === undefined || data[key] != conditions[key])
//       return false;
//   }

//   return true;
// });

// console.log(res2);

  // const Domains = filtersDomain.map((filter, index, newArray) => {
  //   const filterTypeName= filter[index].name;
  //   const filterTypeDomain= filter[1].domain;

  //   const filterDomain = filter.domain;
  //   const filterId = filter?.dataId;

  //   console.log(filter);
  //   console.log(filterDomain);
  //   // console.log(filtersDomain[3]);
  //   // console.log(filtersDomain[4]);
    
  //     return (
  //       <>
  //         <ParentFilter key={index} id="filter-parent-1" className="filter-parent">
  //           <Collapse
  //             btnType="child"
  //             textType={filterTypeName}
  //             listTypesNames={filterTypeDomain}
  //             idFilter={index}
  //           />
  //         </ParentFilter>
  //       </>
  //     )
  // });

  const [activeItemIndexes, setActiveItemIndexes] = useState([initialActiveItemIndex || 2])

  const handleItemClick = (index) => {
    const newIndexes = activeItemIndexes.includes(index)

    if (closeOtherItemsOnClick) {
      setActiveItemIndexes(newIndexes ? [] : [index])

      return
      }
          
    let newActiveItemIndexes = [activeItemIndexes]
    console.log(newActiveItemIndexes);
    if (newIndexes) {
      newActiveItemIndexes = newActiveItemIndexes.filter(item => item !== index)
    } else {
      newActiveItemIndexes.push(index)
    }
    setActiveItemIndexes(newActiveItemIndexes)
  };

  console.log(setActiveItemIndexes);

  // si on clique sur un bouton parent, on affiche les filtres correspondants et on cache les autres.

  console.log(activeItemIndexes);
  console.log(closeOtherItemsOnClick);

const Domains =  Object.keys(filtersDomain).map((filter, index) =>{
      const filterName = filtersDomain[filter].name
      const filterItem = filtersDomain[filter].domain
      // console.log(filterName);
      // console.log(filterItem);
      
      return (
        <ParentFilter 
          key={index} 
          id={`filter-parent-${index}`} 
          className="filter-parent"
          initialActiveItemIndex={index}
          closeOtherItemsOnClick={closeOtherItemsOnClick}

        >
          <Collapse
            btnType="child"
            text={filterName}
            idFilter={index}
            listNames={filterItem}
            isActive={activeItemIndexes.includes(index)} 
            onItemClick={() => handleItemClick(index)}
            />
          </ParentFilter>
      )
    })

  return (
  <>
    
    <BlockFilters> 
    <HeadingFilter>Trouve ton plan Bouffe</HeadingFilter>
      {/* <SearchBar/> */}
      <DomainFilter>
        {Domains}
      </DomainFilter>
      <ButtonDay dayList={filtersDomain[5].domain} text={filtersDomain[5].name[0]} idFilter={5}></ButtonDay>
    </BlockFilters>
  </>
  );
};

export default DesktopPanelControl;

{/* <ParentFilter key={index} id="filter-parent-1" className="filter-parent">
<Collapse
  btnType="child"
  text={filtersDomain[1].name}
  listNames={filtersDomain[1].domain}
  idFilter={1}
/>
</ParentFilter>
<ParentFilter key={index} id="filter-parent-1" className="filter-parent">
<Collapse
  btnType="child"
  text={filtersDomain[3].name}
  listNames={filtersDomain[3].domain}
  idFilter={1}
/>
</ParentFilter>
<ParentFilter key={index} id="filter-parent-1" className="filter-parent">
<Collapse
  btnType="child"
  text={filtersDomain[4].name}
  listNames={filtersDomain[4].domain}
  idFilter={1}
/>
</ParentFilter> */}
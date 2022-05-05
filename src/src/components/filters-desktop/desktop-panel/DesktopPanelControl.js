import { useState } from 'react';
// import SearchBar from '../../search-bar';
// import AnimateHeight from 'react-animate-height';
import Collapse from '../collapse'
import { ButtonDay } from '../../buttons/button-type';
import { BlockFilters, ParentFilter, DomainFilter, HeadingFilter } from './style';

const DesktopPanelControl = ({ filtersDomain, initialActiveItemIndex, closeOtherItemsOnClick }) => {

  // Accordion comportment
  const [activeItemIndexes, setActiveItemIndexes] = useState([initialActiveItemIndex || 1])
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

const Domains =  Object.keys(filtersDomain).map((filter, index) =>{
      const filterName = filtersDomain[filter].name
      const filterItem = filtersDomain[filter].domain
      
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
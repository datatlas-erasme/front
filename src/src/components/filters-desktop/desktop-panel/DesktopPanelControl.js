import { useState } from 'react';
// import SearchBar from '../../search-bar';
// import AnimateHeight from 'react-animate-height';
import Collapse from '../collapse'
import { ButtonDay } from '../../buttons/button-type';
import { ButtonSwitch } from '../../buttons/button-type';
import { BlockFilters, ParentFilter, DomainFilter } from './style';

const DesktopPanelControl = ({ filtersDomain, initialActiveItemIndex, closeOtherItemsOnClick, layers }) => {

  // Accordion comportment
  const [activeItemIndexes, setActiveItemIndexes] = useState([initialActiveItemIndex || 1])
  const handleItemClick = (index) => {
    const newIndexes = activeItemIndexes.includes(index)

    if (closeOtherItemsOnClick) {
      setActiveItemIndexes(newIndexes ? [] : [index])

      return
      }
          
    let newActiveItemIndexes = [activeItemIndexes]
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
    // console.log(filtersDomain);
    // console.log(filtersDomain[5].domain);

  return (
  <>
    
    <BlockFilters> 
    {/* <HeadingFilter>Trouve ton plan Bouffe</HeadingFilter> */}
      {/* <SearchBar/> */}
      <DomainFilter>
        {Domains}
      </DomainFilter>
      
      <ButtonDay dayList={filtersDomain[5].domain} text={filtersDomain[5].name[0]} idFilter={5}></ButtonDay>
      <ButtonSwitch 

          filterglobal={layers[1]}
          />
    </BlockFilters>
  </>
  );
};

export default DesktopPanelControl;

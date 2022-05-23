import { useState, useSelector } from 'react';
import AnimateHeight from 'react-animate-height';
import SearchBar from '../../search-bar';
// import SearchBar from '../../search-bar';
// import AnimateHeight from 'react-animate-height';
import Collapse from '../collapse'
import { ButtonDay, ButtonDefault } from '../../buttons/button-type';
import { BlockFilters, ParentFilter, DomainFilter, HeadingFilter } from './style';

const DesktopPanelControl = ({instance, color,value, filtersDomain, initialActiveItemIndex, closeOtherItemsOnClick }) => {

  // get the theme name
  console.log("instance", instance)
  const theme = instance.conf.theme.name
  const datasetLabel = value.label;
  const datasetId = value.id;

  // Handle Parent button opening
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

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

const ParentBtn = (
  <ButtonDefault
    onClick={handleClick}
    btnType="parent"
    bg={color}
    text={datasetLabel}
  />
);

const Domains =  Object.keys(filtersDomain).map((filter, index) =>{
      const filterName = filtersDomain[filter].name
      const filterItem = filtersDomain[filter].domain
      const filterId = filtersDomain[filter].dataId

      console.log(filterItem);
      console.log(filterName);
      console.log("theme", theme);
      if(theme == "industries") {
        console.log("Desktop Panel Control industries", filterId, datasetId)
        if (filterId == datasetId) {
          return (
            <div className='filter'>
              <li key={index} className="filter-parent">
                <ButtonDefault
                  bg={color}
                  btnType="child"
                  text={filterName[0]}
                  listNames={filterItem}
                  idFilter={index}
                />
              </li>
            </div>
          );
        }
      }
      else {

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
      }
    })

    if(theme == "industries") {
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
   
      )
    }
    else {
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
    }
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
import { useState } from 'react';
import SearchBar from '../../search-bar';
// import AnimateHeight from 'react-animate-height';
import Collapse from '../collapse'
import { ButtonDay } from '../../buttons/button-type';
import { BlockFilters, ParentFilter, DomainFilter, HeadingFilter } from './style';

const DesktopPanelControl = ({instance, value, index, filtersDomain, props }) => {
  const theme = instance.conf.theme.name
  console.log(instance.conf.theme.name)
  
const Domains =  Object.keys(filtersDomain).map((filter, i) =>{
      const filterName = filtersDomain[filter].name
      const filterItem = filtersDomain[filter].domain
      // console.log(filterName);
      // console.log(filterItem);
      if(theme == "industries") {
        return ""
      }
      else{
        return (
          <ParentFilter key={i} id={`filter-parent-${i}`} className="filter-parent">
          <Collapse
            btnType="child"
            text={filterName}
            idFilter={i}
            listNames={filterItem}
          />
        </ParentFilter>
        )
      }
    })

  if(theme == "industries") {
   return ""
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
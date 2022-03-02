import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import SearchBar from '../../search-bar';
import Collapse from '../collapse'
import { ButtonDay } from '../../buttons/button-type';
import { BlockFilters, ParentFilter, DomainFilter, HeadingFilter } from './style';

const MobilePanelControl = ({ index, filtersDomain }) => {

const Domains =  Object.keys(filtersDomain).map((filter, i) =>{
      const filterName = filtersDomain[filter].name
      const filterItem = filtersDomain[filter].domain
      // console.log(filterName);
      // console.log(filterItem);
      
      return (
        <Collapse
          key={i} 
          id={`filter-parent-${i}`} 
          className="filter-parent"
          text={filterName}
          idFilter={i}
          listNames={filterItem}
        /> 
     )
    })

  return (
  <>
    <DomainFilter>
        {Domains}
    </DomainFilter>
    
      {/* <SearchBar/> */}

      {/* <ButtonDay dayList={filtersDomain[5].domain} text={filtersDomain[5].name[0]} idFilter={5}></ButtonDay> */}
  </>
  );
};

export default MobilePanelControl;
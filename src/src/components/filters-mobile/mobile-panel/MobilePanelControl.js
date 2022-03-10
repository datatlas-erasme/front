import Collapse from '../collapse'
import {DomainFilter } from './style';

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
  </>
  );
};

export default MobilePanelControl;
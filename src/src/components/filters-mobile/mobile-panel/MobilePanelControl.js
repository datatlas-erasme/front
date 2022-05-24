import {useState} from 'react';
import { ButtonSwitch } from '../../buttons/button-type';
import Collapse from '../collapse'
import { DomainFilter } from './style';

const MobilePanelControl = ({ closeOtherItemsOnClick, filtersDomain, initialActiveItemIndex, layers }) => {

  const [activeItemIndexes, setActiveItemIndexes] = useState([initialActiveItemIndex])
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
        <Collapse
          key={index} 
          id={`filter-parent-${index}`} 
          className='filter-parent'
          text={filterName}
          idFilter={index}
          listNames={filterItem}
          closeOtherItemsOnClick
          isActive={activeItemIndexes.includes(index)} 
          onItemClick={() => handleItemClick(index)}
        /> 
     )
    })

  return (
  <>
    <DomainFilter>
        {Domains}
        <ButtonSwitch filterglobal={layers[1]}/>
    </DomainFilter>
  </>
  );
};

export default MobilePanelControl;
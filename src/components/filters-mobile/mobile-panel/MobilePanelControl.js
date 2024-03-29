import { useState } from 'react';
import Collapse from '../collapse';
import { DomainFilter } from './style';

const MobilePanelControl = ({ closeOtherItemsOnClick, filtersDomain, initialActiveItemIndex }) => {
  const [activeItemIndexes, setActiveItemIndexes] = useState([initialActiveItemIndex]);

  const handleItemClick = (index) => {
    const newIndexes = activeItemIndexes.includes(index);
    if (closeOtherItemsOnClick) {
      setActiveItemIndexes(newIndexes ? [] : [index]);

      return;
    }
    let newActiveItemIndexes = [activeItemIndexes];
    if (newIndexes) {
      newActiveItemIndexes = newActiveItemIndexes.filter((item) => item !== index);
    } else {
      newActiveItemIndexes.push(index);
    }
    setActiveItemIndexes(newActiveItemIndexes);
  };

  const Domains = Object.keys(filtersDomain).map((filter, index) => {
    const filterName = filtersDomain[filter].name;
    const filterItem = filtersDomain[filter].domain;

    return (
      <Collapse
        key={index}
        id={`filter-parent-${index}`}
        className="filter-parent"
        text={filterName}
        idFilter={index}
        dayList={filtersDomain[5].domain}
        dayText={filtersDomain[5].name[0]}
        listNames={filterItem}
        closeOtherItemsOnClick
        isActive={activeItemIndexes.includes(index)}
        onItemClick={() => handleItemClick(index)}
      />
    );
  });

  return (
    <>
      <DomainFilter>{Domains}</DomainFilter>
    </>
  );
};

export default MobilePanelControl;

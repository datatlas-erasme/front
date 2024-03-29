import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { useSelector } from 'react-redux';
import SearchBar from '../../search-bar';
import Collapse from '../collapse';
import { ButtonDay, ButtonDefault, ButtonSwitch } from '../../buttons/button-type';
import { getValidSearchFilters, getThemeName } from '../../../store/app';
import { BlockFilters, ParentFilter, DomainFilter, HeadingFilter } from './style';

const DesktopPanelControl = ({
  color,
  value,
  filtersDomain,
  initialActiveItemIndex,
  closeOtherItemsOnClick,
  layerIndex,
  layer,
}) => {
  const theme = useSelector(getThemeName);
  const searchFilters = useSelector(getValidSearchFilters);
  const datasetLabel = value.label;
  const datasetId = value.id;

  // Handle Parent button opening
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  // Accordion comportment
  const [activeItemIndexes, setActiveItemIndexes] = useState([initialActiveItemIndex || 1]);
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

  // Button related to the first level of the filters
  const ParentBtn = (
    <ButtonDefault
      onClick={handleClick}
      btnActive={isActive}
      btnType="parent"
      bg={color}
      text={datasetLabel}
    />
  );

  const ParentBtnFooter = (
    <ButtonDefault
      btnType="parent-footer"
      text={datasetLabel}
      layerIndex={layerIndex}
      layer={layer}
    />
  );

  const Domains = Object.keys(filtersDomain).map((filter, index) => {
    const filterName = filtersDomain[filter].name;
    const filterItem = filtersDomain[filter].domain;
    const filterId = filtersDomain[filter].dataId;
    if (theme === 'industries') {
      if (filterId[0] === datasetId) {
        return (
          <div className="filter">
            <li key={index} className="filter-parent">
              <ButtonDefault
                bg={color}
                btnType="child"
                text={filterName[0]}
                listNames={filterItem}
                idFilter={index}
                theme={theme}
              />
            </li>
          </div>
        );
      }
    } else {
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
      );
    }
  });

  if (theme === 'industries') {
    return (
      <ul>
        {ParentBtn}
        {searchFilters && <SearchBar filters={searchFilters} />}
        <AnimateHeight
          duration={500}
          height={!isActive ? 0 : 'auto'} // see props documentation bellow
        >
          <>{Domains}</>
          {ParentBtnFooter}
        </AnimateHeight>
      </ul>
    );
  } else {
    return (
      <>
        <BlockFilters>
          <HeadingFilter>Trouve ton plan Bouffe</HeadingFilter>
          {searchFilters && <SearchBar filters={searchFilters} />}
          <DomainFilter>{Domains}</DomainFilter>
          <ButtonDay
            dayList={filtersDomain[5].domain}
            text={filtersDomain[5].name[0]}
            idFilter={5}
          ></ButtonDay>
          <ButtonSwitch />
        </BlockFilters>
      </>
    );
  }
};

export default DesktopPanelControl;

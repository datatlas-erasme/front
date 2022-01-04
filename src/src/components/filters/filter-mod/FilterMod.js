import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import instanceConf from '../../../conf/instanceConf.json';
import Button from '../../buttons/Button';

const buttonColorRange = instanceConf.theme.filterSidePanel.buttonColorRange;

const FilterMod = ({ value, index, filtersDomain }) => {
  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const datasetLabel = value.label;
  const datasetIndex = index;
  // const datasetId = value.id;

  const ParentBtn = (
    <Button
      onClick={handleClick}
      btnType="parent"
      bg={buttonColorRange[datasetIndex]}
      text={datasetLabel}
      layerId={index}
    />
  );

  const Domains = filtersDomain?.map((filter, index) => {
    const filterName = filter?.name;
    const filterDomain = filter?.domain;
    // const filterId = filter?.dataId;

      return (
          <li key={index} id="filter-parent-1" className="filter-parent">
            <Button
              bg={buttonColorRange[datasetIndex]}
              btnType="child"
              text={filterName[0]}
              listNames={filterDomain}
              idFilter={index}
            />
          </li>
      );
  });

console.log(Domains);

  return (
    <div class="Moi">

      {ParentBtn}

      <AnimateHeight
        duration={500}
        height={!isActive ? 0 : 'auto'} // see props documentation bellow
      >

        <>{Domains}</>

      </AnimateHeight>

    </div>
  );
};

export default FilterMod;

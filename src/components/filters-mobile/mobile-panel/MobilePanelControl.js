import Collapse from '../collapse';
import { DomainFilter } from './style';

const MobilePanelControl = ({ index, filtersDomain }) => {
  const Domains = Object.keys(filtersDomain).map((filter, i) => {
    const filterName = filtersDomain[filter].name;
    const filterItem = filtersDomain[filter].domain;

    return (
      <Collapse
        key={i}
        id={`filter-parent-${i}`}
        className="filter-parent"
        text={filterName}
        idFilter={i}
        listNames={filterItem}
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

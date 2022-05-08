import { useState, useSelector } from 'react';
import AnimateHeight from 'react-animate-height';
import SearchBar from '../../search-bar';
import Collapse from '../collapse'
import { ButtonDay, ButtonDefault } from '../../buttons/button-type';
import { BlockFilters, ParentFilter, DomainFilter, HeadingFilter } from './style';

const DesktopPanelControl = ({instance, value, index, filtersDomain, props, color }) => {

// get the theme name
const theme = instance.conf.theme.name

const datasetLabel = value.label;
const datasetId = value.id;
const datasetIndex = index;
//const datasetIconIndex = useSelector((state) => state.keplerGl.map?.visState?.datasets[datasetId]?.fields.filter((field, index) => field.name  === "icon")[0]?.fieldIdx ?? {});
//const datasetIcon = useSelector((state) => state.keplerGl.map?.visState.datasets[datasetId]?.allData[0][datasetIconIndex] ?? {});

const [isActive, setIsActive] = useState(false);
const handleClick = () => {
  setIsActive(!isActive);
};

const ParentBtn = (
  <ButtonDefault
    onClick={handleClick}
    btnType="parent"
    bg={color}
    text={datasetLabel}
    layerId={index}
  />
);

// For each filter, get the name of the filter and the id
// Domains returns an html element with the name of the filters
const Domains =  Object.keys(filtersDomain).map((filter, i) =>{

      const filterName = filtersDomain[filter].name
      const filterItem = filtersDomain[filter].domain
      const filterId = filtersDomain[filter].dataId

      console.log(filtersDomain[filter])

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
   return (
     <>
         {Domains}
     </>

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

import React, {useState} from 'react'

import instanceConf from '../static/instanceConf.json'

import { Transition, CSSTransition, SwitchTransition } from 'react-transition-group';


import Button from './filter-side-panel/Button'


const buttonColorRange = instanceConf.theme.filterSidePanel.buttonColorRange

const FilterMod = ({value, index, filtersDomain}) => {
    
    // Toggle the visibility of buttons parent list
    const [isActive, setIsActive] = useState(false) 
    const handleClick = () => {setIsActive(!isActive)}

    const datasetLabel = value.label
    const datasetId = value.id
    const datasetIndex = index

    const ParentBtn = <Button onClick={handleClick} btnType="parent" bg={buttonColorRange[datasetIndex]} text={datasetLabel} layerId={index}/>

    const Domains = filtersDomain?.map((filter, index) => {
        const filterName = filter?.name
        const filterId = filter?.dataId
        const filterDomain = filter?.domain
        if (filterId == datasetId) {
            return (  
               
                <div>    
                 <li key={index} id="filter-parent-1" className="filter-parent">
                 <Button bg={buttonColorRange[datasetIndex]} btnType="child" text={filterName[0]} listNames={filterDomain} idFilter={index}/>}
                </li> 
                </div>
               
            )
        }
    })

    return (
        
        <ul> 
            {ParentBtn}
           
            <CSSTransition in={isActive} timeout={200}  classNames="slide-down">
            <>
                {isActive &&Domains}
            </>
            </CSSTransition>
        </ul>
        
    )
}

export default FilterMod

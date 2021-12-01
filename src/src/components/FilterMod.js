
import React, {useState} from 'react'

import instanceConf from '../static/instanceConf.json'


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
                    <li key={index} id="filter-parent-1" className="filter-parent">
                         {isActive && <Button bg={buttonColorRange[datasetIndex]} btnType="child" text={filterName[0]} listNames={filterDomain} idFilter={index}/>}
                    </li>
            )
        }
    })

    return (
        
        <ul>
            {ParentBtn }
            {Domains}
        </ul>
    )
}

export default FilterMod

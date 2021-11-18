import React, { useState, useEffect, useMemo } from 'react'
import {useDispatch, connect, useSelector } from "react-redux";

import {toggleModal, setExportFiltered, setExportDataType, showExportDropdown} from "kepler.gl/actions";

import Button from './filter-side-panel/Button'

//Todo use redux instead ?
import instanceConf from '../static/instanceConf.json'

const buttonColorRange = instanceConf.theme.filterSidePanel.buttonColorRange



const FilterSidePanel = () => {

    const dispatch = useDispatch()

    // Toggle the visibility of buttons parent list
    const [isActive, setIsActive] = useState(false) 
    const isActiveState = () => {setIsActive(!isActive)}
    
    // Get the filter values, id  and map them to buttons
    const filtersDomain = useSelector((state) => state.keplerGl.map?.visState?.filters??[])
    const layers = useSelector((state) => state.keplerGl.map?.visState?.layers??{})

  

    const filterTree = useMemo(() => {
        return Object.values(layers).map((value) => {
            return {label: value.config.label, id: value.config.dataId}
        })
    }, [filtersDomain, layers])

    
    //TODO Get layer color and use it for buttons bg color

    const Filters = filterTree.map((value, index) => {
        const datasetLabel = value.label
        const datasetId = value.id
        const datasetIndex = index

        const ParentBtn = <Button onClick={isActiveState} key={index} btnType="parent" bg={buttonColorRange[datasetIndex]} text={datasetLabel} layerId={index}/>

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
            
            <ul key={index}>
                {ParentBtn }
                {Domains}
            </ul>
        )
    })
    

    const openAddData  = () => {
        dispatch(toggleModal("addData"))
    }

    const exportFilteredData  = () => {
        dispatch(toggleModal("exportData"))
    }
    return (
        <div className='filters'>
            {Filters}
        <ul>
            <Button btnType="parent"  bg="#5a8aa5" onClick={openAddData} text="Ajouter un calque" />
            <Button btnType="parent"  bg="#5a8aa5" onClick={exportFilteredData} text="exporter les données filtrées" />
        </ul>
    </div>
    )

}

const dispatchToProps = dispatch => ({dispatch});

export default connect(dispatchToProps)(FilterSidePanel);
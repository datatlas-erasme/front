import React, { useState, useEffect } from 'react'
import {Provider, useDispatch, connect } from "react-redux";

import {setFilter, layerVisConfigChange} from "kepler.gl/actions";

import Button from './filter-side-panel/Button'
import styled from 'styled-components';


import mapConfig from '../static/defaultDisplayConf.json';


const FilterSidePanel = () => {

    
    const switchparent1 = () => {setParent1(!parent1)}
    const switchparent2 = () => {setParent2(!parent2)}


    const [parent1, setParent1] = useState("false") 
    const [parent2, setParent2] = useState("false") 

    const dispatch = useDispatch()
    const [filtersarray, setFiltersarray] = useState([])

    const [togglestate, setTogglestate] = useState("true") 

    //const [filtercat, setFiltercat] = useState();
    const [filtercat, setFiltercat] = useState("hi");
    useEffect(() => {
        
        //let finalArray = filtersarray.includes(filtercat) 

       

        dispatch(setFilter(0,"value", [filtercat]))
        /*filters.map((item) => {
            dispatch(setFilter(0,"value", [item]))
        })*/
        
        //console.log("Click" + filtercat)
        //console.log(filtercat)
        //dispatch(setFilter(0,"value", filtersarray))
        //dispatch(setFilter(0,"value", ["{\"Accompagnement à l'innovation\"}","{\"Animation / événements / réseaux\"}"]))

    }, [filtercat])

    const test = (filtercat) => {
        /*if (filtersarray.includes(filtercat)) {
            console.log("Already in array")
            setFiltersarray(filtersarray.filter((cat)=>{ return cat != filtercat }))
            
            //console.log(filtersarray)
           
        }
        else {
            setFiltersarray(prevArray => [...prevArray, filtercat])
            console.log(filtersarray)
        }*/
        dispatch(setFilter(0,"value", filtercat))

    }

    //console.log(mapConfig.config.visState.layers[0])

    const disableLayer = () => {
        //dispatch(layerVisConfigChange(mapConfig.config.visState.layers[0], {isVisible:false}))
    }


    return (
        <div className='filters'>
        <ul>
            <li id="filter-parent-1" className="filter-parent">
                <button onClick={switchparent1}>Structures Mediation</button>
                    <ul className={!parent1 ? 'active' : ''}>
                        <li className="filter-child"><Button textSize="12px"  bg="#d91f16" text="Types de structures" /></li>
                        <li className="filter-child">
                            <ul className={!parent1 ? 'active' : ''}>
                                <li><Button textSize="10px" bg="#d91f16" text="Association ou syndicat professionnel" onClick={(e) => setFiltercat("Association ou syndicat professionnel")} /></li>
                                <li><Button textSize="10px" bg="#d91f16" text="Autre" onClick={(e) => setFiltercat("Autre")} /></li>
                                <li><Button textSize="10px" bg="#d91f16" text="Ecole / université / enseignement supérieur" onClick={(e) => setFiltercat("Ecole / université / enseignement supérieur")} /></li>
                                <li><Button textSize="10px" bg="#d91f16" text="Entreprise de droit privé ou fondation" onClick={(e) => setFiltercat("Entreprise de droit privé ou fondation")} /></li>
                                <li><Button textSize="10px" bg="#d91f16" text="Structure publique ou parapublique" onClick={(e) => setFiltercat("Structure publique ou parapublique")} /></li>

                            </ul>

                            </li>
                    </ul>
                </li>

            <li id="filter-parent-2" className="filter-parent">
                <button onClick={switchparent2}>Evenements</button>
                <ul className={!parent2 ? 'active' : ''}>
                    <li className="filter-child"><button>Conférences</button></li>
                    <li className="filter-child"><button>Ateliers</button></li>
                    <li className="filter-child"><button>Portes ouvertes</button></li>
                </ul>
            </li>
        </ul>
    </div>
    )

}



function Example() {
  

}

const dispatchToProps = dispatch => ({dispatch});

export default connect(dispatchToProps)(FilterSidePanel);
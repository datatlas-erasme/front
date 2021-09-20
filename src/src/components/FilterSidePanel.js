import React, { useState, useEffect } from 'react'
import {Provider, useDispatch, connect } from "react-redux";

import {setFilter} from "kepler.gl/actions";

import Button from './filter-side-panel/Button'
import styled from 'styled-components';



const FilterSidePanel = () => {

    
    const switchToggle = () => {
        //console.log("HOHOHO")
        setTogglestate(!togglestate)
        //console.log(togglestate)
    }

    const dispatch = useDispatch()
    const [filtersarray, setFiltersarray] = useState([])
    //const [filtercat, setFiltercat] = useState();
    const [togglestate, setTogglestate] = useState("false") 
    //const [filtercat, setFiltercat] = useState("hi");
    //useEffect(() => {
        
        //let finalArray = filtersarray.includes(filtercat) 

       

        //dispatch(setFilter(0,"value", filters))
        /*filters.map((item) => {
            dispatch(setFilter(0,"value", [item]))
        })*/
        
        //console.log("Click" + filtercat)
        //console.log(filtercat)
        //dispatch(setFilter(0,"value", filtersarray))
        //dispatch(setFilter(0,"value", ["{\"Accompagnement à l'innovation\"}","{\"Animation / événements / réseaux\"}"]))

    //}, )

    const test = (filtercat) => {
        if (filtersarray.includes(filtercat)) {
            console.log("Already in array")
            setFiltersarray(filtersarray.filter((cat)=>{ return cat != filtercat }))
            

            //console.log(filtersarray)
           
        }
        else {
            setFiltersarray(prevArray => [...prevArray, filtercat])
            console.log(filtersarray)
        }
        dispatch(setFilter(0,"value", filtersarray))

    }


    return (
        <div className='filters'>
        <ul>
            <li id="filter-parent-1" className="filter-parent">
                <button onClick={switchToggle}>Structures Mediation</button>
                    <ul className={togglestate ? 'active' : ''}>
                        <li className="filter-child"><button>Types de structures</button></li>
                        <li className="filter-child"><button>Publics concernes</button></li>
                        <li className="filter-child">
                            <ul>
                                <li><Button fontSize="12" text="Association ou syndicat professionnel" onClick={(e) => test("Association ou syndicat professionnel")} /></li>
                                <li><Button fontSize="12" text="Autre" onClick={(e) => test("Autre")} /></li>
                                <li><Button fontSize="12" text="Ecole / université / enseignement supérieur" onClick={(e) => test("Ecole / université / enseignement supérieur")} /></li>
                                <li><Button fontSize="12" text="Entreprise de droit privé ou fondation" onClick={(e) => test("Entreprise de droit privé ou fondation")} /></li>
                                <li><Button fontSize="12" text="Structure publique ou parapublique" onClick={(e) => test("Structure publique ou parapublique")} /></li>

                            </ul>
                            <button>Types d'activites</button>
                            </li>
                    </ul>
                
                </li>

            <li id="filter-parent-2" className="filter-parent">
                <button onClick={switchToggle}>Evenements</button>
                <ul className={togglestate ? 'active' : ''}>
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
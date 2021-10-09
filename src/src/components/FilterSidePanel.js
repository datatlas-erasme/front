import React, { useState, useEffect } from 'react'
import {Provider, useDispatch, connect } from "react-redux";

import {setFilter, removeLayer} from "kepler.gl/actions";

import Button from './filter-side-panel/Button'
import styled from 'styled-components';

const buttonColorRange = ["#dc7e6d", "#69b59d" , "#c3c356", ]



const FilterSidePanel = () => {


    const switchparent1 = () => {setParent1(!parent1)}
    const switchparent2 = () => {setParent2(!parent2)}

    const dispatch = useDispatch()
    const [filtersarray, setFiltersarray] = useState([])
    //const [filtercat, setFiltercat] = useState();
    const [togglestate, setTogglestate] = useState("true") 

    const [parent1, setParent1] = useState("false") 
    const [parent2, setParent2] = useState("false") 

  


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

    const disableLayer = () => {
        dispatch(removeLayer(1))
    }


    return (
        <div className='filters'>
        <ul>
            <li id="filter-parent-1" className="filter-parent">
                <Button btnType="parent" bg={buttonColorRange[0]}icon="X" text="Structures Mediation" onClick={switchparent1}/>
                    <ul className={!parent1 ? 'active' : ''}>
                        <li className="filter-child"><Button btnType="child" textSize="12px" text="Types de structures" /></li>
                        <li className="filter-child"><Button textSize="12px"  bg="#d91f16" text="Publics concernes" /></li>
                        <li className="filter-child">
                            <ul className={!parent1 ? 'active' : ''}>
                                <li><Button textSize="10px" bg="#d91f16" text="Association ou syndicat professionnel" onClick={(e) => test("Association ou syndicat professionnel")} /></li>
                                <li><Button textSize="10px" bg="#d91f16" text="Autre" onClick={(e) => test("Autre")} /></li>
                                <li><Button textSize="10px" bg="#d91f16" text="Ecole / université / enseignement supérieur" onClick={(e) => test("Ecole / université / enseignement supérieur")} /></li>
                                <li><Button textSize="10px" bg="#d91f16" text="Entreprise de droit privé ou fondation" onClick={(e) => test("Entreprise de droit privé ou fondation")} /></li>
                                <li><Button textSize="10px" bg="#d91f16" text="Structure publique ou parapublique" onClick={(e) => test("Structure publique ou parapublique")} /></li>

                            </ul>

                            </li>
                        <li className="filter-child"><Button btnType="child" textSize="12px"  bg="#d91f16" text="Types d'activites" /></li>
                    </ul>
                </li>

            <li id="filter-parent-2" className="filter-parent">
                <Button btnType="parent" bg={buttonColorRange[1]}  onClick={switchparent2} text="Evenements"/>
                <ul className={!parent2 ? 'active' : ''}>
                    <li className="filter-child"><button>Conférences</button></li>
                    <li className="filter-child"><button>Ateliers</button></li>
                    <li className="filter-child"><button>Portes ouvertes</button></li>
                </ul>
            </li>
            <Button btnType="parent"  bg={buttonColorRange[2]} onClick={disableLayer}  text="Calque de données" />
        </ul>
    </div>
    )

}


const dispatchToProps = dispatch => ({dispatch});

export default connect(dispatchToProps)(FilterSidePanel);
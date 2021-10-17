import React, { useState, useEffect } from 'react'
import {Provider, useDispatch, connect } from "react-redux";

import {setFilter, removeLayer} from "kepler.gl/actions";

import Button from './filter-side-panel/Button'
import styled from 'styled-components';

const buttonColorRange = ["#dc7e6d", "#69b59d" , "#c3c356", ]



const FilterSidePanel = () => {
    //console.log(props.props.keplerGl.map)

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
                <Button btnType="parent" bg={buttonColorRange[0]} text="Structures Mediation" onClick={switchparent1}/>
                    <ul className={!parent1 ? 'active' : ''}>
                    <li className="filter-child"><Button btnType="child" bg={buttonColorRange[0]} textSize="12px" text=" Publics cible" /></li>
                        <li className="filter-child"><Button isActive="true" btnType="child" textSize="12px"  bg={buttonColorRange[0]} text="Types de structures"  listNames={["Association ou syndicat professionnel", "Autre", "Ecole / université / enseignement supérieur", "Entreprise de droit privé ou fondation", "Structure publique ou parapublique"]} text="Publics"/></li>
                        <li className="filter-child"><Button btnType="child" textSize="12px"  bg={buttonColorRange[0]} text="Activites" /></li>
                        <li className="filter-child"><Button btnType="child" textSize="12px"  bg={buttonColorRange[0]} text="Expertises" /></li>

                    </ul>
                </li>

            <li id="filter-parent-2" className="filter-parent">
                <Button btnType="parent" bg={buttonColorRange[1]}  onClick={switchparent2} text="Evenements"/>
                <ul className={!parent2 ? 'active' : ''}>
                    <li className="filter-child"><Button btnType="child" textSize="12px" bg={buttonColorRange[1]} listNames={["hey1", "hey2"]} text="Publics" /></li>
                </ul>
            </li>
            <Button btnType="parent"  bg={buttonColorRange[2]} onClick={disableLayer}  text="Calque de données" />
        </ul>
    </div>
    )

}


const dispatchToProps = dispatch => ({dispatch});

export default connect(dispatchToProps)(FilterSidePanel);
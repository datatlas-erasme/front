import React, { Component, useState, useEffect } from 'react'
import { Provider, useDispatch, connect } from "react-redux";

import {setFilter} from "kepler.gl/actions";

import Button from './filter-side-panel/Button'



const FilterSidePanel = () => {

    
    const dispatch = useDispatch()
    const [filtercat, setFiltercat] = useState("hi");
    useEffect(() => {
        dispatch(setFilter(0,"value", [filtercat]))
        //console.log("Click" + filtercat)
        console.log(filtercat)
    }, [filtercat])

    return (
        <div className='filters'>
        <ul>
            <li id="filter-parent-1" className="filter-parent">
                <button>Structures Mediation</button>
                    <ul>
                        <li className="filter-child"><button>Types de structures</button></li>
                        <li className="filter-child"><button>Publics concernes</button></li>
                        <li className="filter-child">
                            <button>Types d'activites</button>
                            <ul>
                                <li><Button text="Accompagnement à l'innovation" onClick={(e) => setFiltercat("{\"Accompagnement à l'innovation\"}")} /></li>
                                <li><Button text="Anim event réseaux " onClick={(e) => setFiltercat("{\"Animation / événements / réseaux\"}")} /></li>
                                <li> <button>Activité 2</button></li>
                            </ul>
                            </li>
                    </ul>
                
                </li>

            <li id="filter-parent-2" className="filter-parent">
                <button>Evenements</button>
                <ul>
                    <li className="filter-child"><button>Conférences</button></li>
                    <li className="filter-child"><button>Ateliers</button></li>
                    <li className="filter-child"><button>Portes ouvertes</button></li>
                </ul>
            </li>
        </ul>
    </div>
    )





    /*const onClick = (filter) => {

    }*/



}



function Example() {
  

}

const dispatchToProps = dispatch => ({dispatch});

export default connect(dispatchToProps)(FilterSidePanel);
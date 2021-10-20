import React, { useState, useEffect } from 'react'
import {Provider, useDispatch, connect, useSelector } from "react-redux";

import {setFilter, removeLayer, toggleModal} from "kepler.gl/actions";

import Button from './filter-side-panel/Button'
import styled from 'styled-components';


import mapConfig from '../static/defaultDisplayConf.json';
const buttonColorRange = ["#dc7e6d", "#69b59d" , "#c3c356", ]



const FilterSidePanel = () => {
    
    /*const {map} = useSelector((state) => state.keplerGl)
    useEffect(() => {
        console.log(map)
    }, [map])*/

    /*console.log("STATE")
    console.log(filters)*/



    const switchparent1 = () => {setParent1(!parent1)}
    const switchparent2 = () => {setParent2(!parent2)}

    const dispatch = useDispatch()
    const [filtersarray, setFiltersarray] = useState([])
    //const [filtercat, setFiltercat] = useState();
    const [togglestate, setTogglestate] = useState(true) 

    const [parent1, setParent1] = useState(true) 
    const [parent2, setParent2] = useState(true) 

  


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

    /*const test = (filtercat) => {
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

    }*/

    const disableLayer = () => {
        dispatch(removeLayer(1))
    }

    const openAddData  = () => {
        dispatch(toggleModal("addData"))
    }

    const hideLayer = () => {
        console.log("hey")
        mapConfig.config.visState.layers[3].config.isVisible = false
        //console.log(mapConfig.config.visState.layers[0].config.isVisible)
    }


    return (
        <div className='filters'>
        <ul>
            <li id="filter-parent-1" className="filter-parent">
                <Button btnType="parent" bg={buttonColorRange[0]} text="Structures Mediation" onClick={switchparent1}/>
                    <ul className={!parent1 ? 'active' : ''}>
                    <li className="filter-child"><Button btnType="child" bg={buttonColorRange[0]} textSize="12px" text=" Publics cible" listNames={
                [
                    '2',
                    'Tous les éléments ',
                    'Entreprises / professionnels',
                    'Etudiants',
                    'Grand public',
                    'Porteurs de projet / start-ups',
                    'Scolaires',
                    'Universités / enseignement supérieur'
                ]
            }
       /></li>
                        <li className="filter-child"><Button isActive={true} btnType="child" textSize="12px"  bg={buttonColorRange[0]} idFilters={0} listNames={["3",'Tous les éléments ',"Association ou syndicat professionnel", "Autre", "Ecole / université / enseignement supérieur", "Entreprise de droit privé ou fondation", "Structure publique ou parapublique"]}  text="Types de structures" /></li>
                        <li className="filter-child"><Button btnType="child" textSize="12px"  bg={buttonColorRange[0]} text="Activites" idFilters={0} listNames={[
                                "0",
                                'Tous les éléments ',
                                'Accompagnement à l\'innovation',
                                'Développement durable / économie circulaire',
                                'Enseignement / formation',
                                'Innovation ouverte',
                                'Médiation (entreprise culture sciences...)',
                                'Prototypage',
                                'Tourisme industriel'
                        ]}/></li>
                        <li className="filter-child"><Button btnType="child" textSize="12px"  bg={buttonColorRange[0]} text="Expertises" listNames={
                            [
                                '1',
                                'Tous les éléments ',
                                'Arts / culture',
                                'Autre',
                                'Education / formation',
                                'Environnement',
                                'Ingénierie',
                                'Numérique / électronique',
                                'Sciences humaines / usages / société'
                            ]
                            }/></li>

                    </ul>
                </li>

            <li id="filter-parent-2" className="filter-parent">
                <Button btnType="parent" bg={buttonColorRange[1]}  onClick={switchparent2} text="Evenements"/>
                <ul className={!parent2 ? 'active' : ''}>
                    <li className="filter-child"><Button btnType="child" textSize="12px" bg={buttonColorRange[1]} idFilters={0} listNames={
                        [
                            '5',
                            'Tous les éléments ',
                            'Entreprises / professionnels',
                            'Grand public / habitants / citoyens'
                        ]
                    } text="Publics" /></li>
                    <li className="filter-child"><Button btnType="child" textSize="12px" bg={buttonColorRange[1]} idFilters={0} listNames={
                        [
                            '4',
                            'Tous les éléments ',
                            'L\'industrie',
                            'La médiation industrielle'
                        ]
                    } text="Type d'évenement" /></li>
                </ul>
            </li>
            <Button btnType="parent"  bg={buttonColorRange[2]}  text="Agences Pôle Emploi" />
        
            <Button btnType="parent"  bg="blue" onClick={openAddData} text="Ajouter un calque" />
        </ul>
    </div>
    )

}


const dispatchToProps = dispatch => ({dispatch});

export default connect(dispatchToProps)(FilterSidePanel);
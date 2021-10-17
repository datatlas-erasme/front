import React, {useState, useEffect}  from 'react'

import PropTypes from 'prop-types'

import {setFilter, removeLayer} from "kepler.gl/actions";
import {Provider, useDispatch, connect } from "react-redux";


import Button from './Button'

export const List = (listNames, backgroundColor) => {
    //console.log(listNames)

    const dispatch = useDispatch()

    const [filterValue, setFilterValue] = useState("Autre")

    useEffect(() => {
        console.log(filterValue)
        dispatch(setFilter(0,"value", filterValue))
    }, [filterValue])

   /* const setFilter = (filtercat) => {
        console.log("GJFHF")
        dispatch(setFilter(0,"value", filtercat))
    }*/

    const [isActive, setIsActive] = useState("false") 
    const isActiveState = () => {setIsActive(!isActive)}


    const items = listNames.listNames.map((item) =>    <li onClick={() => setFilterValue(item)}><Button textSize="12px" bg={backgroundColor} text={item}/></li>  );
    return (
        <div>
            <ul className={isActive ? "btn active" : "btn"}>
                {items ? items : ""}
            </ul>
        </div>
    )
}


List.defaultProps = {

    listNames : ["1","2"]

}

export default List
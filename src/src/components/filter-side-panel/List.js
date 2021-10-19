import React, {useState, useEffect, useCallback}  from 'react'

import PropTypes from 'prop-types'

import {setFilter, removeLayer} from "kepler.gl/actions";
import {Provider, useDispatch, connect } from "react-redux";


import Button from './Button'

export const List = (listNames, backgroundColor, filterId) => {
    //console.log(listNames)

    const dispatch = useDispatch()

    //const [filterValue, setFilterValue] = useState()

    /*useEffect(() => {
        console.log(filterValue)
        dispatch(setFilter(0,"value", [filterValue]))
    }, [filterValue])*/

    const setFilterValue = (item) => {
        console.log("GJFHF")
        dispatch(setFilter(0,"value", [item]))
    }


    const items = listNames.listNames.map((item) =>    <li onClick={() => setFilterValue(item)}><Button textSize="12px" bg={backgroundColor} text={item}/></li>  );
    return (
        <div>
            <ul className="btn active">
                {items ? items : ""}
            </ul>
        </div>
    )
}


List.defaultProps = {

    listNames : ["1","2"],
    filterId: 0

}

export default List
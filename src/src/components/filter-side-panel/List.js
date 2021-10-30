import React, {useState, useEffect, useCallback}  from 'react'

import PropTypes from 'prop-types'

import {setFilter, removeLayer} from "kepler.gl/actions";
import {Provider, useDispatch, connect } from "react-redux";


import Button from './Button'



export const List = (listNames, backgroundColor, idFilters) => {

    // If another button is clicked remove active class on precedent button and apply it to active button
    function Child({ item, onClick, selected }) {
        return (
          <li className={selected ? "enable" : ""} onClick={onClick} >
            <Button textSize="12px" bg={backgroundColor} text={item}/>
          </li>
        );
      }


    const dispatch = useDispatch()
    const [isActive, setIsActive] = useState(false) 
    const isActiveState = () => {setIsActive(!isActive)}

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const setFilterValue = (item, id, index) => {
        setSelectedIndex(index)
        if(item == 'Tous les éléments ') {
          dispatch(setFilter(parseInt(id),"value", ""))
        }
        else {
          dispatch(setFilter(parseInt(id),"value", [item]))
        }

    }

    // TODO remove this dirty fix => pass the 
    const filteredListNames = listNames.listNames.filter(function(item){
      if(item == "0" || item == "1" || item == "2" || item == "3" || item == "4" || item == "5") {
        console.log("skipped")
      }
      else {
        return item
      }
      
    })
    return (
        <div>
            {filteredListNames.map((item, index) => (
            <Child
                item={item}
                onClick={() => setFilterValue(item, listNames.listNames[0],index)}
                selected={index === selectedIndex}
            />
      ))}
        </div>
    )
}


List.defaultProps = {
    listNames : ["1","2"]
}

export default List
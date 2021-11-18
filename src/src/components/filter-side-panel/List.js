import React, {useState, useEffect}  from 'react'

import PropTypes from 'prop-types'

import {setFilter} from "kepler.gl/actions";
import {useDispatch } from "react-redux";

import Button from './Button'


export const List = ({listNames, backgroundColor, idFilter}) => {
    const dispatch = useDispatch()
    const [filtersArray, setFiltersArray] = useState([])


    const setFilterValue = (item) => {
      if (filtersArray.includes(item)) {
        console.log("already in filters array")
        //console.log("Filters Array :", filtersArray)
        setFiltersArray((filtersArray) => (filtersArray.filter((cat)=>{ return cat != item })))
      }
      else {
        setFiltersArray((filtersArray) => ([...filtersArray, item]))
        //console.log("Filters Array :", filtersArray)
      }
      
    }

    useEffect(() => {
      console.log("Filters Array :", filtersArray)
      dispatch(setFilter(idFilter,"value", filtersArray))
    }, [filtersArray])

    return (
        <div>
            {listNames.map((item, index) => (
              <li onClick={() => setFilterValue(item)} >
                <Button className="" key={index} textSize="12px" bg={backgroundColor} text={item}/>
              </li>
            ))}
        </div>
    )
}


List.defaultProps = {
    listNames : ["1","2"],
    idFilter : 0
}

List.propTypes = {
  idFilter : PropTypes.number
}

export default List
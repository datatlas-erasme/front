import React, {useState}  from 'react'

import PropTypes from 'prop-types'

import {setFilter} from "kepler.gl/actions";
import {useDispatch } from "react-redux";

import Button from './Button'


export const List = ({listNames, backgroundColor, idFilter}) => {
    const dispatch = useDispatch()
    const [isActive, setIsActive] = useState(false) 
    const isActiveState = () => {setIsActive(!isActive)}


    const setFilterValue = (item, id) => {
          dispatch(setFilter(parseInt(id),"value", [item]))
    }

    return (
        <div>
            {listNames.map((item, index) => (
              <li onClick={() => setFilterValue(item, idFilter)} >
                <Button textSize="12px" bg={backgroundColor} text={item}/>
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
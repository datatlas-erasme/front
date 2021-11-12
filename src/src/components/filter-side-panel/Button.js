import React, {useState}  from 'react';
import PropTypes from 'prop-types'
import ScatterplotIconLayer from "kepler.gl"

import List from './List'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { LightenDarkenColor } from 'lighten-darken-color'; 



const Button = ({text,bg,textSize, onClick, btnType, listNames, idFilters}) => {

    // Toggle the visibility of buttons parent list
    const [isActive, setIsActive] = useState(false) 
    const isActiveState = () => {setIsActive(!isActive)}

    // Big button style
    if (btnType === "parent") {
        return  (
            <div className="btn-parent" style={{backgroundColor : bg , fontSize : textSize}} >
                <button 
                onClick={onClick}
                className="btn">
                {text}
                </button>
            </div>
    
        )
    } 
    // Medium button styling + lits display
    else if (btnType === "child") {
        return  (
            <div>
            <button 
            onClick={onClick}
            onClick={isActiveState}
            style={{backgroundColor : LightenDarkenColor(bg, -20) , fontSize : textSize}}
            className={!isActive ? "btn active" : "btn"}>
            <span><FontAwesomeIcon icon={!isActive ? faChevronRight : faChevronDown} /> </span>
            {text}
            </button>
            {isActive && <List listNames = {listNames} backgroundColor={bg} idFilter = {idFilter} /> }
            </div>
        )

    }
    else {
        return  (
            <button 
            onClick={onClick}
            onClick={isActiveState}
            style={{backgroundColor : LightenDarkenColor(bg, -60) , fontSize : textSize}}
            className={"btn"}>
            {text.substring(0,30)}
            </button>
        )
    }
  
}

Button.defaultProps = {
    bg : "#ff241a",
    fontSize : 20,
}

Button.propTypes = {
    text: PropTypes.string,
    bg: PropTypes.string,
    fontSize: PropTypes.string,
    action: PropTypes.object,
    onClick: PropTypes.func,
    type: PropTypes.string
}

export default Button

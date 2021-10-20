import React, {useState}  from 'react';
import PropTypes from 'prop-types'
import ScatterplotIconLayer from "kepler.gl"

import List from './List'

import ReactDOM from 'react-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

//import { LightenDarkenColor } from 'lighten-darken-color'; 





/*const SvgIcon = () => {[
    new ScatterplotIconLayer({
        id: "place",
      }),
]}*/

const Button = ({text,bg,textSize, onClick, btnType, listNames, idFilters}) => {



    const [isActive, setIsActive] = useState(false) 
    const isActiveState = () => {setIsActive(!isActive)}

    const lightColor = (bg) => {

    }



    

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
    else if (btnType === "child") {
        return  (
            <div>
            <button 
            onClick={onClick}
            onClick={isActiveState}
            style={{  fontSize : textSize}}
            className={!isActive ? "btn active" : "btn"}>
            <span> </span>
            {text}
            </button>
            {!isActive && <List  listNames = {listNames} idFilters ={idFilters}/> }
            </div>
        
        )

    }
    else if (btnType === "sub-child") {

    }
    else {
        return  (
            <button 
            onClick={onClick}
            onClick={isActiveState}
            style={{  fontSize : textSize}}
            className={isActive ? "btn active" : "btn"}>
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

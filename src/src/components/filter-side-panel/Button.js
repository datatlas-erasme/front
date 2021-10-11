import React, {useState}  from 'react';
import PropTypes from 'prop-types'
import ScatterplotIconLayer from "kepler.gl"


import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { LightenDarkenColor } from 'lighten-darken-color'; 
/*const SvgIcon = () => {[
    new ScatterplotIconLayer({
        id: "place",
      }),
]}*/

const Button = ({text,bg,textSize, onClick, btnType}) => {

    const [isActive, setIsActive] = useState("false") 
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
            <button 
            onClick={onClick}
            onClick={isActiveState}
            style={{backgroundColor : LightenDarkenColor(bg, -10) , fontSize : textSize}}
            className={isActive ? "btn active" : "btn"}>
            <span><FontAwesomeIcon icon={isActive ? faChevronRight : faChevronDown} /> </span>
            {text}
            </button>
        )

    }
    else if (btnType === "sub-child") {

    }
    else {
        return  (
            <button 
            onClick={onClick}
            onClick={isActiveState}
            style={{backgroundColor : LightenDarkenColor(bg, -30) , fontSize : textSize}}
            className={isActive ? "btn active" : "btn"}>
            {text}
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

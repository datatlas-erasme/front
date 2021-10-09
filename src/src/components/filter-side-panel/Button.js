import React, {}  from 'react';
import PropTypes from 'prop-types'
import ScatterplotIconLayer from "kepler.gl"


import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

/*const SvgIcon = () => {[
    new ScatterplotIconLayer({
        id: "place",
      }),
]}*/

const Button = ({text,bg,textSize, onClick, btnType, isActive}) => {
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
            style={{backgroundColor : bg , fontSize : textSize}}
            className={isActive ? "btn active" : "btn"}>
            <span><FontAwesomeIcon icon={faChevronRight} /> </span>
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
            
            className="btn">
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

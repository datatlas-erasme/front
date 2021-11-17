import React, {useState, useEffect}  from 'react';
import PropTypes from 'prop-types'
import {useDispatch, useSelector } from "react-redux";
import {layerConfigChange} from "kepler.gl/actions";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import { LightenDarkenColor } from 'lighten-darken-color'; 

import List from './List'

//TODO many props use ...deps instead ?
const Button = ({text,bg,textSize, onClick, btnType, listNames, idFilter, layerId}) => {

    const dispatch = useDispatch()


    // Toggle the visibility of buttons parent list
    const [isActive, setIsActive] = useState(false) 
    const isActiveState = () => {setIsActive(!isActive)}

    // Toggle the button linked layer vibility
    const [isLayerVisible, setIsLayerVisible] = useState(true) 
    const isLayerVisibleState = () => {setIsLayerVisible(!isLayerVisible)}


    // get the old layer state
    const layer = useSelector((state) => state.keplerGl.map?.visState?.layers[layerId]) 

    
    useEffect(() => {
        //console.log(isLayerVisible)
        if(layer) {
            dispatch(layerConfigChange(layer, {isVisible:isLayerVisible}))
        }
    }, [layer,isLayerVisible, dispatch])


    // Big button style
    if (btnType === "parent") {
        return  (
            <div className="btn-parent" style={{backgroundColor : bg , fontSize : textSize}} >
                <p onClick={isLayerVisibleState}><FontAwesomeIcon icon={isLayerVisible ? faEye : faEyeSlash} /></p>
                <button 
                onClick={onClick}
                className="btn">
                {text.substring(0,30)}
                </button>
            </div>
    
        )
    } 
    // Medium button styling + lits display
    else if (btnType === "child") {
        //console.log("ID FILTER", idFilter)
        //console.log("List Names", listNames)

        return  (
            <div>
            <button 
            onClick={onClick}
            onClick={isActiveState}
            style={{backgroundColor : LightenDarkenColor(bg, -20) , fontSize : textSize}}
            className={!isActive ? "btn active" : "btn"}>
            <span><FontAwesomeIcon icon={!isActive ? faChevronRight : faChevronDown} /> </span>
            {text.substring(0,30)}
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
            className={isActive ? "btn selected" : "btn"}>
            {text.substring(0,30)}
            </button>
        )
    }
  
}

Button.defaultProps = {
    bg : "#ff241a",
    fontSize : "20px",
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

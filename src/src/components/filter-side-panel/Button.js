import React, { Component }  from 'react';
import PropTypes from 'prop-types'

const Button = ({text,style, action}) => {
    return  (
    <button 
    style={{backgroundColor : style.bg , fontSize : style.fontSize}} 
    className="btn">{text}</button>
    )
}

Button.defaultProps = {
    style: {
        "bg" : "#d91f16",
        "fontSize" : 20,
    }
}

Button.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
    action: PropTypes.object
}

export default Button

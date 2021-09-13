import React, { Component }  from 'react';
import PropTypes from 'prop-types'

const Button = ({text,bg,fontSize, onClick}) => {
    return  (
    <button 
    onClick={onClick}
    style={{backgroundColor : bg , fontSize : fontSize}} 
    className="btn">{text}</button>
    )
}

Button.defaultProps = {

    bg : "#d91f16",
    fontSize : 20,
}

Button.propTypes = {
    text: PropTypes.string,
    bg: PropTypes.string,
    fontSize: PropTypes.number,
    action: PropTypes.object,
    onClick: PropTypes.func
}

export default Button

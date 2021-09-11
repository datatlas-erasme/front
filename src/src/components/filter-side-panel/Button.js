import React, {}  from 'react';
import PropTypes from 'prop-types'

const Button = ({text,style, onClick}) => {
    return  (
    <button 
    onClick={onClick}
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
    action: PropTypes.object,
    onClick: PropTypes.func
}

export default Button

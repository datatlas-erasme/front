import React, {}  from 'react';
import PropTypes from 'prop-types'

const Button = ({text,bg,textSize, onClick}) => {
    return  (
    <button 
    onClick={onClick}
    style={{backgroundColor : bg , fontSize : textSize}} 
    className="btn">{text}</button>
    )
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
    onClick: PropTypes.func
}

export default Button

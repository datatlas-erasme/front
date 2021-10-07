import React, {}  from 'react';
import PropTypes from 'prop-types'
import ScatterplotIconLayer from "kepler.gl"


/*const SvgIcon = () => {[
    new ScatterplotIconLayer({
        id: "place",
      }),
]}*/

const Button = ({text,bg,textSize, onClick, icon, borderColor}) => {
    return  (
    <button 
    onClick={onClick}
    style={{backgroundColor : bg , fontSize : textSize}} 
    className="btn">
    <span style={{backgroundColor : borderColor, }}>{icon}</span>
    {text}
    </button>




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
    onClick: PropTypes.func,
    icon: PropTypes.string,
    borderColor: PropTypes.string
}

export default Button

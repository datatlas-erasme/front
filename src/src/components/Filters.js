import React, { Component }  from 'react';
import PropTypes from 'prop-types'
import Button from './Button'

//import filters from "../helpers/filters";

const Filters = ({title}) => {

    const onClick = (layerNb) => {
        console.log("Click")
        //return config.config.visState.layers[layerNb].config.isVisible = true
    }

    return (
        <div className='filters'>
            <h1>{title}</h1>
            <Button color='black' text='Add' onClick={onClick(0)}/>
            <Button color='black' text='Add' onClick={onClick(1)}/>
            <Button color='black' text='Add' onClick={onClick(2)}/>
        </div>
    )
}



Filters.defaultProps = {
    title: "Task Tracker",
}

Filters.propTypes = {
    title : PropTypes.string.isRequired,
}



export default Filters

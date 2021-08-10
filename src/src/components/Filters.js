import React, { Component }  from 'react';
import PropTypes from 'prop-types'
import Button from './Button'

//import filters from "../helpers/filters";

const Filters = ({title}) => {

    const onClick = () => {
        console.log("Click")
    }

    return (
        <div className='filters'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
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

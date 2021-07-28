import React, { Component }  from 'react';

import config from '../testconfig.json';

function displayFilter() {
    console.log("CLICK")
    return config.config.visState.layers[1].config.isVisible = true
}

const Crowdsourcing = () => {
    return (
        <div>
            <a href="https://form.typeform.com/to/ijzY76oa">
                <h1 style={{ 
                    fontSize: "20px", 
                    position: "absolute", 
                    bottom: 0, 
                    right: "20px",
                    backgroundColor: "black",
                    color: "white",
                    padding: "15px",
                    borderRadius: "12px"
                }}> + Proposer un lieu</h1>
            </a>

        </div>
        
    )
}

/**
 *             <button onClick={displayFilter}>
                <h1 style={{ 
                    fontSize: "20px", 
                    position: "absolute", 
                    bottom: 200, 
                    right: "20px",
                    backgroundColor: "black",
                    color: "white",
                    padding: "15px",
                    borderRadius: "12px"
                }}>afficher population</h1>
            </button>
 */



export default Crowdsourcing


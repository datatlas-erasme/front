import React, { }  from 'react';
import Button from './filter-side-panel/Button'

const BottomRightSection = ({config}) => {

    return (
        <div className="crowdsourcing">
            {
             config.map((buttonConf) => (
                <a href={buttonConf.url} target="_blank"><Button bg="black" fontSize="10" text={buttonConf.text} /></a>
             ))
            }
        </div>
    )
}

export default BottomRightSection


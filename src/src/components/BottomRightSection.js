import React, {useContext}  from 'react';
import Button from './filter-side-panel/Button'
import {ConfContext} from '../providers/ConfProvider'

const BottomRightSection = () => {

    const config = useContext(ConfContext).bottomRightButtons

    return (
        <div className="crowdsourcing">
            {
             config.map((buttonConf, index) => (
                <a key={index} href={buttonConf.url} target="_blank"><Button  bg="black" fontSize="10" text={buttonConf.text} /></a>
             ))
            }
        </div>
    )
}

export default BottomRightSection


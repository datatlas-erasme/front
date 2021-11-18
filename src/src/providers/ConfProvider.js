import React from 'react'
import instanceConf from '../static/instanceConf.json'


export const ConfContext = React.createContext(instanceConf)

export const ConfProvider = (props) => {
    return (
        <ConfContext.Provider value={instanceConf} {...props }/>
    )
}

export default ConfProvider

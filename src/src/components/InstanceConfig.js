import React from 'react'

//TODO map values from instance conf api route
const InstanceConfig = () => {
    return (
        <div className='instance-config'>
            <h2>General</h2>
            <p>siteTitle</p>
            <input type="text" />
            <p>mapboxToken</p>
            <input type="text" />
            <p>defaultMapLocation</p>
            <input type="text" />  
            <p>defaultMapBoxStyleUrl</p>
            <input type="text" />
            <div>
            <h2>modules</h2>
            <p>exportDataBtn</p>
            <input type="checkbox" />
            </div>
            <h2>Theme</h2>
            <h3>filterSidePanel</h3>
            <p>buttonColorRange</p>
            <h2>bottomRightButtons</h2>
            <h2>Layers</h2>

            <button>Save</button>
         
        </div>
    )
}

export default InstanceConfig

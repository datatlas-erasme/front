import React from 'react'

//import LayerHoverInfoFactory from './layer-hover-info';

import {layerHoverProp, LayerHoverInfo} from 'kepler.gl/components';

const PointSidePanel = () => {
    return (
        <div className="PointSidePanel">
            <img src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
            <h1>Modellus</h1>
            <LayerHoverInfo {...layerHoverProp} />
            <div className="text-container">
                <p>Modellus est un service de conception, prototypage rapide et production par fabrication additive (impression 3D). Notre service de prototypage rapide vous permet d'obtenir vos éléments fonctionnels sous 24/72H dans une [...] Modellus est un service de conception.</p>
            </div>
            
            <div className="cat-container">
                <p>Expertise : Ingénierie / Mécanique</p>
                <p>Gouvernance : Industrie</p>
                <p>Offre : Prototypage</p>
                <p>Public cible : Industrie</p>
            </div>
        </div>
    )
}

export default PointSidePanel
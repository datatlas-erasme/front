import React, { Component } from 'react'

import logoGl from '../static/logo_gl.png'; 
import logoTI from '../static/logo_ti.png'; 


export default class Logo extends Component {
    render() {
        return (
            <div >
                <div className="top-left-logo">
                    <img src={logoGl}></img>
                </div>
                <div className="bottom-left-logo">
                    <img src={logoTI}></img>
                </div>

            </div>
        )
    }
}

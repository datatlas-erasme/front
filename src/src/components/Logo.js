import React, { Component } from 'react'

import logo from '../static/logo_gl.png'; // Tell webpack this JS file uses this image

export default class Logo extends Component {
    render() {
        return (
            <div className="gl-logo">
                <img src={logo}></img>
            </div>
        )
    }
}

import "./SecondImage.css"

import React, { Component } from 'react'

class SecondImage extends Component {
    render() {
        return (
            <div class="main-image" >
                <div class="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default SecondImage
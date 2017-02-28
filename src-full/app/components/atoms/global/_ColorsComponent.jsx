import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

export default class ColorsComponent extends PatternLabComponent {

    _getColor() {
        return []
    }

    _getColors() {
        return this._getColor().map((color, index) => 
            <li key={index}>
                <span className="sg-swatch" style={{background: color.color}}></span>
                <span className="sg-label">
                    ${color.name} <br />
                    {color.color}
                </span>
            </li>
        )
    }

    render() {
        return (
            <ul className="sg-colors">
                {this._getColors()}
            </ul>
        )
    }
}

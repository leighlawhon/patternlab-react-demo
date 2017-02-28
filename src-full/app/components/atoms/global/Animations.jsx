import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

export default class Animations extends PatternLabComponent {

    // Pattern Lab
    static getDescription() {
        return "This is a demo of the animations that are being used on the page."
    }

    // Component rendering
    render() {
        return (
            <div className="demo-animate animate-fade">
                <strong>Fade:</strong> Duration: 0.3s Easing: ease-out (Hover to see effect)
            </div>
        )
    }

}
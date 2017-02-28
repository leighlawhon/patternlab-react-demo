import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

export default class HorizontalRule extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Horizontal Rule"
    }

    // Component rendering
    render() {
        return (
            <hr />
        )
    }
}
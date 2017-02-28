import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

export default class OneUpGridLayout extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "One Up Grid Layout"
    }

    // Component rendering
    render() {
        return (
            <div className="demo">
                
                <div className="g g-1up">
                    <div className="gi">1/1</div>
                </div>
                
            </div>
        )
    }
}
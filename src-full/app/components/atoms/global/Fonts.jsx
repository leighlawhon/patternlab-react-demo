import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

export default class Fonts extends PatternLabComponent {

    static getTitle() {
        return "Fonts"
    }

    static getDescription() {
        return "These fonts that are used on the site."
    }

    render() {
        return (
            <div>
                <div>Primary font: "HelveticaNeue", "Helvetica", "Arial", sans-serif;</div>
                <div><em>Primary font italic: "HelveticaNeue", "Helvetica", "Arial", sans-serif;</em></div>
                <div><strong>Primary font bold: "HelveticaNeue", "Helvetica", "Arial", sans-serif;</strong></div>
                <div className="font-secondary">Secondary font: Georgia, Times, "Times New Roman", serif;</div>
                <div className="font-secondary"><em>Secondary font italic: Georgia, Times, "Times New Roman", serif;</em></div>
                <div className="font-secondary"><strong>Secondary font bold; Georgia, Times, "Times New Roman", serif;</strong></div>            
            </div>
        )
    }

}
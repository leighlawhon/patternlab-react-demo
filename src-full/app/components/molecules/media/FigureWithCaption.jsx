import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import Landscape from '../../atoms/images/Landscape'

export default class FigureWithCaption extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Figure with Caption"
    }

    // Component rendering
    render() {
        return (
            <figure className="c-figure">
                <div className="c-figure__media">
                    <Landscape />
                </div>

                <figcaption className="c-figure__caption">This is an example of an image with a caption. Photo captions, also known as cutlines, are a few lines of text used to explain or elaborate on published photographs.</figcaption>
            </figure>
        )
    }
}
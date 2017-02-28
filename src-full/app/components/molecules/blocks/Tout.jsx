import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import Landscape from '../../atoms/images/Landscape'
import {data} from '../../../data/data.js'

class Tout extends PatternLabComponent {
    // Pattern Lab
    static getDescription() {
        return "The tout block is a lockup of an image with a title overlay, serving as a link to another page.<br /><br />"
            + "Usage: Typically found on homepages and marketing pages."
    }

    // Component rendering
    render() {
        return (
            <a href={this.props.url} className="c-block-tout">
                <Landscape styleModifier="c-block-tout__img" {...this.props.imgLandscape} />

                <h2 className="c-block-tout__headline">{this.props.headline.short}</h2>
            </a>
        )
    }
}

Tout.defaultProps = {
    url: data.url,
    headline: data.headline
}

Tout.propTypes = {
    url: React.PropTypes.string.isRequired,
    headline: React.PropTypes.object.isRequired,
    imgLandscape: React.PropTypes.object
}

export default Tout
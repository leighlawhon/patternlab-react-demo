import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../../data/data.js'

class Landscape extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Landscape Image"
    }

    // Component rendering
    render() {
        return (
            <img src={this.props.src} alt={this.props.alt} className={this.props.styleModifier} />
        )
    }
}

Landscape.defaultProps = {
    src: data.imgLandscape.src,
    alt: data.imgLandscape.alt
}

Landscape.propTypes = {
    src: React.PropTypes.string,
    alt: React.PropTypes.string,
    styleModifier: React.PropTypes.string
}

export default Landscape
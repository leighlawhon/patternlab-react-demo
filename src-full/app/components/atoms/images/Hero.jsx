import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../../data/data.js'

class Hero extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Hero Image"
    }

    // Component rendering
    render() {
        return (
            <img src={this.props.src} alt={this.props.alt} className={this.props.styleModifier} />
        )
    }
}

Hero.defaultProps = {
    src: data.imgHero.src,
    alt: data.imgHero.alt,
}

Hero.propTypes = {
    src: React.PropTypes.string,
    alt: React.PropTypes.string,
    styleModifier: React.PropTypes.string
}

export default Hero
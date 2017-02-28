import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import HeroImg from '../../atoms/images/Hero'
import {data} from '../../../data/data.js'

class Hero extends PatternLabComponent {
    // Pattern Lab
    static getDescription() {
        return "The hero is a large block that typically appears at the top of the page and contains a large full-bleed image and a title."
    }

    // Component rendering
    render() {
        const headline = this.props.headline ? this.props.headline.medium : null
        return (
            <a href={this.props.url} className="c-block-hero">
                <HeroImg styleModifier="c-block-hero__img" {...this.props.imgHero} />

                <h2 className="c-block-hero__headline">
                    {headline}
                </h2>
            </a>
        )
    }
}

Hero.defaultProps = {
    url: data.url,
    headline: data.headline
}

Hero.propTypes = {
    url: React.PropTypes.string.isRequired,
    headline: React.PropTypes.object.isRequired,
    imgHero: React.PropTypes.object
}

export default Hero
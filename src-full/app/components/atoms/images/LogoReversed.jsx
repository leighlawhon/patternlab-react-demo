import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../../data/data.js'

class LogoReversed extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Logo Reversed"
    }

    // Component rendering
    render() {
        const styleModifier = ["c-logo", this.props.styleModifier].filter(c => c).join(" ")
        return (
            <img src="/images/logo-reversed.svg" className={styleModifier} alt={this.props.imgAlt} />
        )
    }
}

LogoReversed.defaultProps = {
    imgAlt: data.company.name,
    //styleModifier: " c-logo-link__img"
}

LogoReversed.propTypes = {
    imgAlt: React.PropTypes.string,
    styleModifier: React.PropTypes.string
}

export default LogoReversed
import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../../data/data.js'

class Logo extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Logo Image"
    }

    // Component rendering
    render() {
        const styleModifier = ["c-logo", this.props.styleModifier].filter(c => c).join(" ")
        return (
            <img src="/images/logo.svg" className={styleModifier} alt={this.props.imgAlt} />
        )
    }
}

Logo.defaultProps = {
    imgAlt: data.company.name,
    //styleModifier: " c-logo-link__img"
}

Logo.propTypes = {
    imgAlt: React.PropTypes.string,
    styleModifier: React.PropTypes.string
}

export default Logo
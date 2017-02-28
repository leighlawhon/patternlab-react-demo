import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import LogoReversed from '../../atoms/images/LogoReversed'
import {data} from '../../../data/data.js'

class FooterLogoLink extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Footer Logo Link"
    }

    // Component rendering
    render() {
        return (
            <a href={this.props.linkHref} className="c-logo-footer-link">
                <LogoReversed styleModifier="c-logo-footer-link__img" />
            </a>
        )
    }
}

FooterLogoLink.defaultProps = {
    linkHref: data.url
}

FooterLogoLink.propTypes = {
    linkHref: React.PropTypes.string.isRequired
}

export default FooterLogoLink
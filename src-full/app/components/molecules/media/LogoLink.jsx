import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import Logo from '../../atoms/images/Logo'
import {data} from '../../../data/data.js'

class LogoLink extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Logo Link"
    }

    // Component rendering
    render() {
        return (
            <a href={this.props.linkHref} className="c-logo-link">
                <Logo styleModifier="c-logo-link__img" />
            </a>
        )
    }
}

//TODO: get links eg. link.pages-homepage
LogoLink.defaultProps = {
    linkHref: data.url
}

LogoLink.propTypes = {
    linkHref: React.PropTypes.string.isRequired
}

export default LogoLink
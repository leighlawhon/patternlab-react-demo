import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../../data/data.js'

class FooterNav extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Footer Navigation"
    }

    // Component rendering
    _getNavLinks() {
        if (!this.props.footerNav) return 

        return this.props.footerNav.map((navLink, index) => (
            <li key={index} className="c-footer-nav__item">
                <a href={navLink.url} className="c-footer-nav__link">
                    {navLink.label}
                </a>
            </li>
        ))
    }

    render() {
        return (
            <nav className="c-footer-nav">
                <ul className="c-footer-nav__list">
                    {this._getNavLinks()}
                </ul>
            </nav>
        )
    }
}

FooterNav.defaultProps = {
    footerNav: data.footerNav
}

FooterNav.propTypes = {
    footerNav: React.PropTypes.array.isRequired
}

export default FooterNav
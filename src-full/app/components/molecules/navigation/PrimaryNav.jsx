import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {getNavLink} from '../../../actions'
import {data} from '../../../data/data.js'

class PrimaryNav extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Primary Navigation"
    }

    static getAnnotations() {
        // TODO: get from file
        return [
            {
                "el": "#nav", // TODO add annotation to markup?
                "title" : "Navigation",
                "comment": "<p>Navigation for adaptive web experiences can be tricky. Top navigations are typical on desktop sites, but mobile screen sizes don't give us the luxury of space. We're dealing with this situation by creating a simple menu anchor that toggles the main navigation on small screens. This is just one method. <a href=\"http://bagcheck.com/\">Bagcheck</a> and <a href=\"http://contentsmagazine.com/\">Contents Magazine</a> add an anchor in the header that jumps users to the navigation which is placed in the footer. This solution works well because it doesn't require any Javascript in order to work. Other methods exist too. For example, <a href=\"http://m.espn.com\">ESPN's mobile navigation</a> overlays the main content of the page.</p><p>The nav is only hidden when a certain level of javascript is supported in order to ensure that users with little/poor javascript support can still access the navigation. Once the screen size is large enough to accommodate the nav, we show the main navigation links and hide the menu anchor.<p><p>See also: <a href=\"http://bradfrostweb.com/blog/web/responsive-nav-patterns/\">Responsive Navigation Patterns</a></p>"
            },
        ]
    }

    // Component rendering
    _getNavLinks() {
        if (!this.props.primaryNav) return 

        return this.props.primaryNav.map((navLink, index) => getNavLink(navLink.url, navLink.label, { key: index, className:"c-primary-nav__link" }))
    }

    render() {
        return (
            <nav id="nav" className="c-primary-nav">
                <ul className="c-primary-nav__list">
                    {this._getNavLinks()}
                </ul>
            </nav>
        )
    }
}

PrimaryNav.defaultProps = {
    primaryNav: data.footerNav
}

PrimaryNav.propTypes = {
    primaryNav: React.PropTypes.array.isRequired
}

export default PrimaryNav
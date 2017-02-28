import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import LogoLink from '../../molecules/media/LogoLink'
import PrimaryNav from '../../molecules/navigation/PrimaryNav'
import Search from '../../molecules/forms/Search'


export default class Header extends PatternLabComponent {
    // Pattern Lab
    static getAnnotations() {
        // TODO: get from file
        return [
            
        ]
    }

    // Component rendering    
    render() {
        return (
            <header className="c-header" role="banner">
                <LogoLink />

                <div className="c-header__controls">
                    <a href="#nav" className="nav-toggle nav-toggle-menu icon-menu"><span className="is-vishidden">Menu</span></a>
                    <a href="#search-form" className="nav-toggle nav-toggle-search icon-search"><span className="is-vishidden">Search</span></a>

                    <PrimaryNav />
                    <Search />
                </div>
            </header>

        )
    }
}
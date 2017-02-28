import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

export default class Search extends PatternLabComponent {
    // Component rendering
    render() {
        return (
            <form method="post" className="c-search-form">
                <label htmlFor="search" className="c-search-form__label is-vishidden">Search the site</label>
                <input type="search" id="search" className="c-search-form__input" placeholder="Search the site" />
            </form>
        )
    }
}
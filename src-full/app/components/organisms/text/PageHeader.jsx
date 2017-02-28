import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../../data/data.js'

class PageHeader extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Page Header"
    }

    // Component rendering
    render() {
        return(
            <div className="c-page-header l">
                <h1 className="c-page-header__title">
                    {this.props.pageTitle}
                </h1>
            </div>
        )
    }
}

PageHeader.defaultProps = {
    pageTitle: data.pageTitle
}

PageHeader.propTypes = {
    pageTitle: React.PropTypes.string.isRequired
}

export default PageHeader
import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import PageTitle from '../../atoms/global/PageTitle'

class PageHeader extends PatternLabComponent {

    static getTitle() {
        return "Page header"
    }

    static getDescription() {
        return "Header section for page."
    }

    render() {
        return (
            <div>
                <PageTitle {...this.props} />
                <hr />
            </div>
        )
    }
}

PageHeader.defaultProps = {
    title: "Page title not set!"
}

PageHeader.propTypes = {
    ...PageTitle.propTypes
}

export default PageHeader
import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

class PageTitle extends PatternLabComponent {

    static getTitle() {
        return "Page title"
    }

    static getDescription() {
        return "Standard h1 header."
    }

    render() {
        return (
            <h1>
                {this.props.title}
            </h1>
        )
    }
}

PageTitle.fakeProps = {
    title: "Lorem ipsum"
}

PageTitle.propTypes = {
    title: React.PropTypes.string.isRequired
}

export default PageTitle
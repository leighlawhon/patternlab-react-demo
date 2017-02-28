import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component'

import {data} from '../../../data/data.js'

class TextButton extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Text Button"
    }

    // Component rendering
    render() {
        if (!this.props.textButton && !this.props.btnText) return null

        const btnClass = ["c-text-btn", this.props.btnClass].filter(c => c).join(" ")

        return (
            <a href={this.props.linkHref} className={btnClass}>
                {this.props.btnText}
            </a>
        )
    }
}

TextButton.defaultProps = {
    textButton: false,
    btnText: data.btnText,
    linkHref: data.url
}

TextButton.propTypes = {
    textButton: React.PropTypes.bool,
    btnClass: React.PropTypes.string,
    btnText: React.PropTypes.string.isRequired,
    linkHref: React.PropTypes.string.isRequired
}

export default TextButton
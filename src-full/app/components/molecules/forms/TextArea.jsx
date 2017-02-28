import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import TextAreaAtom from '../../atoms/forms/TextArea'
import {data} from '../../../data/data.js'

class TextArea extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Text Area"
    }

    // Component rendering
    render() {
        if (!this.props.textarea) return null

        return (
            <div className="c-textarea">
                <label htmlFor={this.props.textarea.id} className="c-textarea__label">
                    {this.props.textarea.label}
                </label>
                <TextAreaAtom id={this.props.textarea.id} rows={10} styleModifier="c-textarea__text" />
            </div>
        )
    }
}

TextArea.defaultProps = {
    textarea: data.textarea,
}

TextArea.propTypes = {
    textarea: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.object
    ])
}

// Pattern Lab
TextArea.describePropTypes = {
    textarea: {
        type: "oneOfType(bool, object)",
        isRequired: false
    }
}

export default TextArea
import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import TextField from '../../atoms/forms/TextField'
import {data} from '../../../data/data.js'

class FormField extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Field"
    }

    // Component rendering
    // TODO: change to add support for all field types
    // TODO: conditional fieldNote?
    render() {
        return (
            <div className="c-field">
                <label htmlFor={this.props.id} className="c-field__label">{this.props.label}</label>
                <TextField id={this.props.id} placeholder={this.props.placeholder} value={this.props.value} />
                <span className="c-field__note" dangerouslySetInnerHTML={{__html:this.props.fieldNote}} />
            </div>
        )
    }
}

FormField.defaultProps = {
    id: data.field.id,
    label: data.field.label,
    placeholder: data.field.placeholder,
    value: data.field.value,
    // type: data.field.type,
    fieldNote: data.field.fieldNote
}

FormField.propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired,
    // type: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    fieldNote: React.PropTypes.string
}

export default FormField
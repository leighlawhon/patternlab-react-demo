import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import FormField from '../../molecules/forms/FormField'
import TextArea from '../../molecules/forms/TextArea'
import FormTitle from '../../atoms/forms/FormTitle'
import Button from '../../atoms/buttons/Button'
import {data} from '../../../data/data.js'

class StackedForm extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Stacked Form"
    }

    // Component rendering
    _getFormFields() {
        if (!this.props.fields) return null

        return this.props.fields.map((field, index) => (
            <FormField key={index} {...field.field} />
        ))
    }

    render() {
        if (!this.props.form) return null

        return (
            <form className="c-form c-form--stacked" method="post" action={this.props.formAction}>
                <FormTitle {...this.props} />
                {this._getFormFields()}
                <TextArea {...this.props} />

                <div className="c-form__actions">
                    <Button {...this.props} />
                </div>
            </form>
        )
    }
}

StackedForm.defaultProps = {
    form: true,
    formAction: data.url,
    fields: data.fields,
}

StackedForm.propTypes = {
    form: React.PropTypes.bool,
    formAction: React.PropTypes.string.isRequired,
    fields: React.PropTypes.array,
    formTitle: FormTitle.propTypes.formTitle,
    textarea: TextArea.propTypes.textarea,
    btnClass: Button.propTypes.btnClass,
    btnText: Button.propTypes.btnText
}

// Pattern Lab
StackedForm.describePropTypes = {
    textarea: TextArea.describePropTypes.textarea
}

export default StackedForm
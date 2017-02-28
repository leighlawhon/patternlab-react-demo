import React from 'react'
import faker from 'faker'
import {PatternLabComponent} from '@peteyg/patternlab-react-component'

class FormTitle extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Form Title"
    }
    
    // Component rendering
    render() {
        if (!this.props.formTitle) return null
        
        return (
            <h2 className="c-form__title c-section__title">{this.props.formTitle}</h2>
        )
    }
}

FormTitle.fakeProps = {
    formTitle: faker.lorem.sentence()
}

FormTitle.propTypes = {
    formTitle: React.PropTypes.string
}

export default FormTitle
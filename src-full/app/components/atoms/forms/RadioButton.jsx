import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component'

export default class RadioButton extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Radio Button"
    }

    // Component rendering
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
        this._onChange = this._onChange.bind(this)
    }

    _onChange(evt) {
        this.setState({
            checked: evt.target.checked
        })
    }

    render() {
        return (
            <input type="radio" checked={this.state.checked} onChange={this._onChange} />
        )
    }
}
import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component'

export default class SelectMenu extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Select Menu"
    }

    // Component rendering
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
        this._onChange = this._onChange.bind(this)
    }

    _onChange(evt) {
        this.setState({
            value: evt.target.value
        })
    }

    render() {
        return (
            <select value={this.state.value} onChange={this._onChange}>
                <optgroup label="Select">
                    <option value="1">Option One</option>
                    <option value="2">Option Two</option>
                    <option value="3">Option Three</option>
                </optgroup>
            </select>
        )
    }
}
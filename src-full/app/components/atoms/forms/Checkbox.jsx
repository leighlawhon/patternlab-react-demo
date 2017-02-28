import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component'

export default class Checkbox extends PatternLabComponent {
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
            <input type="checkbox" checked={this.state.checked} onChange={this._onChange} />
        )
    }
}
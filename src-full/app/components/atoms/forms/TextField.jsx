import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

class TextField extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Text Field"
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
            <input id={this.props.id} type="text" placeholder={this.props.placeholder} value={this.state.value} onChange={this._onChange} />
        )
    }
}

TextField.defaultProps = {
    id: "text",
    placeholder: "Text Input"
}

TextField.propTypes = {
    value: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired
}

export default TextField
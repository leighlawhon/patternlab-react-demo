import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

class TextArea extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Text Area"
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
        let extraProps = {}
        if (this.props.id) extraProps.id = this.props.id
        if (this.props.rows) extraProps.rows = this.props.rows
        if (this.props.styleModifier) extraProps.className = this.props.styleModifier

        return (
            <textarea placeholder={this.props.placeholder} onChange={this._onChange} value={this.state.value} {...extraProps}></textarea>
        )
    }
}

TextArea.defaultProps = {
    placeholder: "Text area",
}

TextArea.propTypes = {
    placeholder: React.PropTypes.string,
    id: React.PropTypes.string,
    rows: React.PropTypes.number,
    styleModifier: React.PropTypes.string
}

export default TextArea
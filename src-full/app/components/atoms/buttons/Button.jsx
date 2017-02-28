import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component'
import {data} from '../../../data/data.js'

class Button extends PatternLabComponent {
    // Component rendering
    render() {
        const btnClass = ["c-btn", this.props.btnClass].filter(c => c).join("")

        return (
            <button className={btnClass}>
                {this.props.btnText}
            </button>
        )
    }
}

Button.defaultProps = {
    btnText: data.btnText
}

Button.propTypes = {
    btnClass: React.PropTypes.string,
    btnText: React.PropTypes.string.isRequired
}

export default Button
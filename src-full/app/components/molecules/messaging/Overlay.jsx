import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../../data/data.js'

class Overlay extends PatternLabComponent {
    // Component rendering
    constructor(props) {
        super(props)

        this._onClick = this._onClick.bind(this)

        this.state = {
            hidden: false
        }
    }

    _onClick(evt) {
        evt.preventDefault()

        this.setState({
            hidden: true
        })
    }

    render() {
        if (!this.overlay) return false

        let overlayClass = "c-overlay"
        if (this.state.hidden) overlayClass += " c-overlay--is-hidden"
        return (
            <div className={overlayClass}>
                <p className="c-overlay__intro">{this.props.overlayMessage}</p>
                <a href="#" className="c-btn c-btn--overlay" onClick={this._onClick}>
                    {this.props.overlayAction}
                </a>
            </div>
        )
    }
}

Overlay.defaultProps = {
    overlayMessage: data.overlayMessage,
    overlayAction: data.overlayAction,
    overlay: false
}

Overlay.propTypes = {
    overlayMessage: React.PropTypes.string.isRequired,
    overlayAction: React.PropTypes.string.isRequired,
    overlay: React.PropTypes.bool
}

export default Overlay
import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component'

import {data} from '../../../data/data.js'

class Progress extends PatternLabComponent {
    // Component rendering
    constructor(props){
        super(props)

        this.state = {
            animate: false
        }
    }

    componentDidMount() {
        setTimeout(function() { 
            this.setState({
                animate: true
            })
        }.bind(this), 500)

    }


    _getProgressClass() {
        const animClass = !this.state.animate ? " start" : " anim"
        return "c-progress" + animClass
    }

    // TODO animate?
    render() {
        return (
            <progress className={this._getProgressClass()} max={this.props.max} value={this.props.progressValue}>
                <strong>{this.props.label}</strong>
            </progress>
        )
    }
}

Progress.defaultProps = {
    max: data.max,
    progressValue: data.progressValue,
    label: data.label
}

Progress.propTypes = {
    max: React.PropTypes.string.isRequired,
    progressValue: React.PropTypes.string.isRequired,
    label: React.PropTypes.string
}

export default Progress
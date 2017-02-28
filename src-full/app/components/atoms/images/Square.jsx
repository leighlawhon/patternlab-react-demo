import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../../data/data.js'

class Square extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Square Image"
    }

    // Component rendering
    render() {
        return (
            <img src={this.props.src} alt={this.props.alt} className={this.props.styleModifier} />
        )
    }
}

Square.defaultProps = {
    src: data.imgSquare.src,
    alt: data.imgSquare.alt
}

Square.propTypes = {
    src: React.PropTypes.string,
    alt: React.PropTypes.string,
    styleModifier: React.PropTypes.string
}

export default Square
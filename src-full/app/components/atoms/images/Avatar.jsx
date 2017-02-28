import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../../data/data.js'

class Avatar extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Avatar Image"
    }

    // Component rendering
    render() {
        return (
            <img src={this.props.imgSrc} alt="Avatar" className={this.props.styleModifier} />
        )
    }
}

Avatar.defaultProps = {
    imgSrc: data.img.avatar.src
}

Avatar.propTypes = {
    imgSrc: React.PropTypes.string,
    styleModifier: React.PropTypes.string
}

export default Avatar
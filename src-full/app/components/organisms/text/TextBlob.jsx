import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../../data/data.js'

class TextBlob extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Text Blob"
    }

    // Component rendering
    render() {
        return(
            <div className="s-text-passage" dangerouslySetInnerHTML={{__html:this.props.htmlText}} />
        )
    }
}

TextBlob.defaultProps = {
    htmlText: data.htmlText
}

TextBlob.propTypes = {
    htmlText: React.PropTypes.string.isRequired
}

export default TextBlob
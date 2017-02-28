import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../../data/data.js'

class Blockquote extends PatternLabComponent {
    // Component rendering
    _getQuoteSource() {
        if (!this.props.quoteSource) return null

        return (
            <cite className="c-quote__cite" dangerouslySetInnerHTML={{__html:this.props.quoteSource}} />
        )
    }

    render() {
        return (
            <blockquote className="c-quote">
                <div className="c-quote__text">{this.props.quoteText}</div>
                {this._getQuoteSource()}
            </blockquote>
        )
    }
}

Blockquote.defaultProps = {
    quoteText: data.quoteText,
    quoteSource: data.quoteSource
}

Blockquote.propTypes = {
    quoteText: React.PropTypes.string.isRequired,
    quoteSource: React.PropTypes.string
}

export default Blockquote
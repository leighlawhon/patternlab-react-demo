import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import Progress from '../../atoms/feedback/Progress'
import Overlay from '../../molecules/messaging/Overlay'
import {data} from '../../../data/data.js'

class Tile extends PatternLabComponent {
    // Pattern Lab
    // TODO: new lines...
    static getDescription() {
        return "The tile block pattern contains a progress indicator, numeric value, and label for that numeric value.<br /><br />"
            + "Usage: displaying various types of data to users."
    }

    // Component rendering
    render() {
        const styleModifier = ["c-block-tile c-block-tile--", this.props.styleModifier].filter(c => c).join("")
        return (
            <div className={this.props.wrapStyle}>
                <a href={this.props.url} className={styleModifier}>
                    <Progress {...this.props.progress} />

                    <span className="c-block-tile__value">{this.props.number}</span>	
                    <h2 className="c-block-tile__label">{this.props.headline.short}</h2>
                </a>
                <Overlay />
            </div>
        )
    }
}

Tile.defaultProps = {
    url: data.url,
    number: data.number,
    headline: data.headline
}

Tile.propTypes = {
    url: React.PropTypes.string.isRequired,
    number: React.PropTypes.string.isRequired,
    headline: React.PropTypes.object.isRequired,
    progress: React.PropTypes.object,
    styleModifier: React.PropTypes.string,
    wrapStyle: React.PropTypes.string
}

export default Tile
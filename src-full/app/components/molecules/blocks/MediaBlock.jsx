import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import Square from '../../atoms/images/Square'
import {data} from '../../../data/data.js'

class MediaBlock extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Media Block"
    }

    static getDescription() {
        return "The media block is based on Nicole Sullivan's popular <a href=\"http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/\">media object</a> pattern. It contains a media element — typically an image — on the left with a headline and text on the right. It is a versatile pattern that contain content such as blog posts, user information, and other content types.\n\n"
            + "The media block pattern also has a `--small` modifier that decreases the size of the image and text."
    }

    render() {
        const styleModifier = ["c-block-media c-block-media--", this.props.styleModifier].filter(c => c).join("")
        return(
            <a href={this.props.url} className={styleModifier}>
                <div className="c-block-media__media">
                    <Square styleModifier="c-block-media__img" {...this.props.imgSquare} />
                </div>

                <div className="c-block-media__body">
                    <h2 className="c-block-media__headline">{this.props.headline.short}</h2>
                    <p className="c-block-media__excerpt">{this.props.excerpt.medium}</p>
                </div>
            </a>
        )
    }
}

MediaBlock.defaultProps = {
    url: data.url,
    headline: data.headline,
    excerpt: data.excerpt,
    // styleModifier: "small"
}

MediaBlock.propTypes = {
    url: React.PropTypes.string.isRequired,
    headline: React.PropTypes.object.isRequired,
    excerpt: React.PropTypes.object.isRequired,
    imgSquare: React.PropTypes.object,
    styleModifier: React.PropTypes.string
}
export default MediaBlock
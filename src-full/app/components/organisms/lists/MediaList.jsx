import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import MediaBlock from '../../molecules/blocks/MediaBlock'
import {data} from '../../../data/data.js'

class MediaList extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Media List"
    }

    // Component rendering
    _getListItems() {
        if (!this.props.mediaList) return ""

        return this.props.mediaList.map((item, index) => (
            <li key={index} className="c-media-list__item">
                <MediaBlock {...item} />
            </li>
        ))
    }

    render() {
        return(
            <ul className="c-media-list">
                {this._getListItems()}
            </ul>
        )
    }
}

MediaList.defaultProps = {
    mediaList: data.mediaList,
}

MediaList.propTypes = {
    mediaList: React.PropTypes.array
}

export default MediaList
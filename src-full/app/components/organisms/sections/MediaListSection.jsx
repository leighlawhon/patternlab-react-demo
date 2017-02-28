import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import MediaList from '../../organisms/lists/MediaList'
import TextButton from '../../atoms/buttons/TextButton'
import Pagination from '../../molecules/navigation/Pagination'
import Overlay from '../../molecules/messaging/Overlay'
import {data} from '../../../data/data.js'

class MediaListSection extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Media List Section"
    }

    // Component rendering

    // TODO move to component
    _getSectionTitle() {
        if (!this.props.sectionTitle) return null

        return (
            <h2 className="c-section__title">
                {this.props.sectionTitle}
            </h2>
        )
    }

    render() {
        return(
            <section className="c-section">
                <Overlay {...this.props} />
                {this._getSectionTitle()} 
                <MediaList mediaList={this.props.mediaList} />
                <TextButton {...this.props} />
                <Pagination {...this.props} />
            </section>
        )
    }
}

MediaListSection.defaultProps = {
    sectionTitle: data.sectionTitle,
    mediaList: data.mediaList,
    textButton: data.textButton,
    pagination: false,
    overlay: false
}

MediaListSection.propTypes = {
    sectionTitle: React.PropTypes.string,
    mediaList: React.PropTypes.array.isRequired,
    textButton: React.PropTypes.bool,
    btnText: React.PropTypes.string,
    pagination: Pagination.propTypes.pagination,
    overlay: React.PropTypes.bool,
}

// Pattern Lab
MediaListSection.describePropTypes = {
    pagination: Pagination.describePropTypes.pagination
}

export default MediaListSection
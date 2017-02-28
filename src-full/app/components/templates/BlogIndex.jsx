import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../data/data.js'
import Header from '../organisms/global/Header'
import Footer from '../organisms/global/Footer'
import PageHeader from '../organisms/text/PageHeader'
import MediaListSection from '../organisms/sections/MediaListSection'

class BlogIndex extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Blog Index"
    }

    // Component rendering
    _getMediaListSection(sectionProps) {
        if (!sectionProps) return ""

        return (
            <MediaListSection {...sectionProps} />
        )
    }

    render() {
        return(
            <div>
                <Header />

                <main role="main">

                    <PageHeader />

                    <div className="l l--two-col">
                        <div className="l-main">
                            {this._getMediaListSection(this.props.latestPosts)}
                        </div>

                        <div className="l-sidebar">
                            {this._getMediaListSection(this.props.featuredPeople)}
                            {this._getMediaListSection(this.props.featuredHikes)}
                        </div>
                    </div>

                </main>

                <Footer />
            </div>
        )
    }
}

BlogIndex.defaultProps = {
    latestPosts: data.latestPosts,
    featuredPeople: data.featuredPeople,
    featuredHikes: data.featuredHikes
}

BlogIndex.propTypes = {
    latestPosts: React.PropTypes.object,
    featuredPeople: React.PropTypes.object,
    featuredHikes: React.PropTypes.object
}

export default BlogIndex
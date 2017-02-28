import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../data/data.js'
import Header from '../organisms/global/Header'
import Footer from '../organisms/global/Footer'
import PageHeader from '../organisms/text/PageHeader'
import TextBlob from '../organisms/text/TextBlob'
import StackedForm from '../organisms/forms/StackedForm'
import MediaListSection from '../organisms/sections/MediaListSection'

class Detail extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Detail"
    }

    // Component rendering
    render() {

        // TODO conditional hr above stacked forom
        return (
            <div>
                <Header />
                <main role="main">

                    <PageHeader {...this.props} />

                    <div className="l l--two-col">
                        <div className="l-main">
                            <section className="section">
                                <TextBlob {...this.props} />

                                <hr />
                                <StackedForm {...this.props} />
                            </section>
                        </div>

                        <div className="l-sidebar">
                            <MediaListSection {...this.props.featuredPosts} />
                            <MediaListSection {...this.props.featuredPeople} />
                        </div>

                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

Detail.defaultProps = {
    featuredPosts: data.featuredPosts,
    featuredPeople: data.featuredPeople
}

Detail.propTypes = {
    featuredPosts: React.PropTypes.object,
    featuredPeople: React.PropTypes.object
}

export default Detail
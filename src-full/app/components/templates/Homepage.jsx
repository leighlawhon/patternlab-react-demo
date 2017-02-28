import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../data/data.js'
import Header from '../organisms/global/Header'
import Footer from '../organisms/global/Footer'
import Hero from '../molecules/blocks/Hero'
import ToutList from '../organisms/lists/ToutList'
import MediaListSection from '../organisms/sections/MediaListSection'

class Homepage extends PatternLabComponent {

    render() {
        return (
            <div>
                <Header />

                <main role="main">

                    <Hero {...this.props} />

                    <div className="l">
                        <ToutList {...this.props} />
                    </div>

                    <div className="l l--two-col">
                        <div className="l-main">
                            <MediaListSection {...this.props.latestPosts} />
                        </div>

                        <div className="l-sidebar">
                            <MediaListSection {...this.props.featuredPeople} />
                        </div>

                    </div>
                </main>


                <Footer />

            </div>
        )
    }

}

Homepage.defaultProps = {
    latestPosts: data.latestPosts,
    featuredPeople: data.featuredPeople
}

Homepage.propTypes = {
    latestPosts: React.PropTypes.object,
    featuredPeople: React.PropTypes.object
}

export default Homepage
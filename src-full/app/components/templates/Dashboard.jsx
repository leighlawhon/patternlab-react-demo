import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../data/data.js'
import Header from '../organisms/global/Header'
import Footer from '../organisms/global/Footer'
import Alert from '../molecules/messaging/Alert'
import TileGrid from '../organisms/sections/TileGrid'
import MediaListSection from '../organisms/sections/MediaListSection'

class Dashboard extends PatternLabComponent {
    // Component rendering
    _getAlert() {
        if (!this.props.alert) return ""

        return (
            <Alert {...this.props} />
        )
    }

    _getSectionBlock() {
        if (!this.props.sectionBlock && !this.props.blockFeature) return ""

        return (
            <TileGrid {...this.props} />
        )
    }
    
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
                    {this._getAlert()}

                    {this._getSectionBlock()}

                    <div className="l l--two-col">
                        <div className="l-main">
                            {this._getMediaListSection(this.props.featuredChallenges)}
                        </div>

                        <div className="l-sidebar">
                            {this._getMediaListSection(this.props.featuredPeople)}
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        )
    }
}

Dashboard.defaultProps = {
    alert: data.alert,
    sectionBlock: data.sectionBlock,
    featuredChallenges: data.featuredChallenges,
    featuredPeople: data.featuredPeople
}

Dashboard.propTypes = {
    alert: Alert.propTypes.alert,
    sectionBlock: React.PropTypes.bool,
    featuredChallenges: React.PropTypes.object,
    featuredPeople: React.PropTypes.object,
    blockFeature: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.object
    ])
}

// Pattern Lab
Dashboard.describePropTypes = {
    alert: Alert.describePropTypes.alert,
    blockFeature: {
        type: "oneOfType(bool, object)",
        isRequired: false
    }
}

export default Dashboard
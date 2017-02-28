import React from 'react'
import faker from 'faker'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../../data/data.js'

class Alert extends PatternLabComponent {
    // Component rendering
    render() {
        const mod = this.props.alert ? this.props.alert.styleModifier : null
        const styleModifier = ["alert alert--", mod].filter(c => c).join("")
        return (
            <div className={styleModifier} dangerouslySetInnerHTML={{__html:this.props.alertText}} />
        )
    }
}

Alert.fakeProps = {
    alertText: data.alertText,
    // alert: {
    //     styleModifier: faker.lorem.word()
    // }
}

// Alert.defaultProps = {
// }


Alert.propTypes = {
    alert: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.object
    ]),
    alertText: React.PropTypes.string.isRequired
}

// Pattern Lab
Alert.describePropTypes = {
    alert: {
        type: "oneOfType(bool, object)",
        isRequired: false
    }
}

export default Alert
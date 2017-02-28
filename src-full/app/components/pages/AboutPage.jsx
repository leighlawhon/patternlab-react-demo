import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component'

import Detail from '../templates/Detail'
import pageJson from '../../data/pages/about.json'

export default class AboutPage extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "About"
    }

    // Component rendering
    render() {
        return (
            <Detail {...pageJson} />
        )
    }
}

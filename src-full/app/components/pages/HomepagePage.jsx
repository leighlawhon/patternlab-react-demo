import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import Homepage from '../templates/Homepage'
import pageJson from './../../data/pages/homepage.json'

export default class HomepagePage extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Homepage"
    }

    // Component rendering
    render() {
        return (
            <Homepage {...pageJson} />
        )
    }
}


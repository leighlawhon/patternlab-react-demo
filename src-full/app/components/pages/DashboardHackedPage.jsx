import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import Dashboard from '../templates/Dashboard'
import pageJson from '../../data/pages/dashboard.json'
import pageJson2 from '../../data/pages/dashboard-hacked.json'

export default class DashboardHackedPage extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Dashboard Hacked"
    }

    // Component rendering
    render() {
        const pageFinalJson = Object.assign(pageJson, pageJson2)
        return (
            <Dashboard {...pageFinalJson} />
        )
    }
}

import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import Dashboard from '../templates/Dashboard'
import pageJson from '../../data/pages/dashboard.json'

export default class DashboardPage extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Dashboard"
    }

    // Component rendering
    render() {
        return (
            <Dashboard {...pageJson} />
        )
    }
}

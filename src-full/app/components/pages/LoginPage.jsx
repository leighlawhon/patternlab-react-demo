import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import Form from '../templates/Form'
import pageJson from '../../data/pages/login.json'

export default class LoginPage extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Login"
    }

    // Component rendering
    render() {
        return (
            <Form {...pageJson} />
        )
    }
}

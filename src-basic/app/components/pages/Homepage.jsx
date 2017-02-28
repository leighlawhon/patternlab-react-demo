import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 
import {Link} from 'react-router'

import PageHeader from '../molecules/global/PageHeader'

class Homepage extends PatternLabComponent {

    static getDescription() {
        return "Demonstration homepage."
    }

    render() {
        return (
            <div>
                <PageHeader title="Homepage" />
                <p>
                    <Link to="style-guide">Style guide</Link>
                </p>
            </div>
        )
    }
}

export default Homepage
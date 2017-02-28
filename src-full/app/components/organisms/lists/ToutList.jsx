import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import Tout from '../../molecules/blocks/Tout'
import {data} from '../../../data/data.js'

class ToutList extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Tout List"
    }

    // Component rendering
    _getListItems() {
        if (!this.props.toutList) return ""

        return this.props.toutList.map((item, index) => (
            <li key={index} className="c-tout-list__item gi">
                <Tout {...item} />
            </li>
        ))
    }

    render() {
        return(
            <ul className="c-tout-list g g-3up">
                {this._getListItems()}
            </ul>

        )
    }
}

ToutList.defaultProps = {
    toutList: data.toutList
}

ToutList.propTypes = {
    toutList: React.PropTypes.array
}

export default ToutList
import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import Tile from '../../molecules/blocks/Tile'
import {data} from '../../../data/data.js'

class TileList extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Tile List"
    }

    // Component rendering
    _getListItems() {
        if (!this.props.tileList) return ""

        return this.props.tileList.map((item, index) => (
            <li key={index} className="c-tile-list__item">
                <Tile {...item} />
            </li>
        ))
    }

    render() {
        return(
            <ul className="c-tile-list">
                {this._getListItems()}
            </ul>
        )
    }
}

TileList.defaultProps = {
    tileList: data.tileList
}

TileList.propTypes = {
    tileList: React.PropTypes.array
}

export default TileList
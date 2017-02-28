import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import Tile from '../../molecules/blocks/Tile'
import TileList from '../../organisms/lists/TileList'
import {data} from '../../../data/data.js'

class TileGrid extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Tile Grid"
    }

    // Component rendering
    _getBlockFeature() {
        if (!this.props.blockFeature) return ""

        return (
            <Tile {...this.props.blockFeature} wrapStyle="c-tile-grid__primary" />
        )
    }

    render() {
        return (
            <div className="c-tile-grid">
	            <div className="c-tile-grid__inner l">
                    {this._getBlockFeature()} 
                    <div className="c-tile-grid__secondary">
                        <TileList {...this.props} />
                    </div>
                </div>
            </div>
        )
    }
}

TileGrid.defaultProps = {
    blockFeature: data.blockFeature,
    tileList: TileList.defaultProps.tileList
}

TileGrid.propTypes = {
    blockFeature: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.object
    ])
}

// Pattern Lab
TileGrid.describePropTypes = {
    blockFeature: {
        type: "oneOfType(bool, object)",
        isRequired: false
    }
}


export default TileGrid
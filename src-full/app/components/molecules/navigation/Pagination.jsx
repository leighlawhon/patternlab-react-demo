import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import {data} from '../../../data/data.js'

class Pagination extends PatternLabComponent {
    // Component rendering
    _getPaginationList() {
        if (!this.props.pagination.paginationList) return 

        return this.props.pagination.paginationList.map((item, index) => (
            <li key={index} className="pagination__item">
                <a href={item.url}>
                    {item.number}
                </a>
            </li>
        ))
    }

    render() {
        if (!this.props.pagination) return null

        return (
            <ol className="pagination">
                {this._getPaginationList()}
            </ol>
        )
    }
}

Pagination.defaultProps = {
    pagination: false,
    // paginationList: data.paginationList
}

Pagination.propTypes = {
    pagination: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.object
    ]),
    // paginationList: React.PropTypes.array.isRequired
}

// Pattern Lab
Pagination.describePropTypes = {
    pagination: {
        type: "oneOfType(bool, object)",
        isRequired: false
    }
}


export default Pagination
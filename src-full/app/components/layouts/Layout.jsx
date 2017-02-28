import React from 'react'
import SGNav from './SGNav'

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <SGNav />

                {this.props.children}
            </div>
        )
    }

}
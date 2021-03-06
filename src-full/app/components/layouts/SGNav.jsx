import React from 'react'
import { Link } from 'react-router'

export default class SGNav extends React.Component {

    render() {
        return (
            <ul className="g g--2up tile-list">
                <li className="gi tile tile-center">
                    <Link to="/">
                        Homepage
                    </Link>
                </li>
                <li className="gi tile tile-center tile--alt">
                    <Link to="style-guide">
                        Style guide home
                    </Link>
                </li>
            </ul>
        )
    }

}
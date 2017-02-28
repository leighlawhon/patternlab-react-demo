import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

// import {data} from '../../data/data.js'
// import Header from '../organisms/global/Header'
// import Footer from '../organisms/global/Footer'
// import PageHeader from '../organisms/text/PageHeader'
// import TextBlob from '../organisms/text/TextBlob'
import StackedForm from '../organisms/forms/StackedForm'
import Logo from '../atoms/images/Logo'

class Form extends PatternLabComponent {
    // Component rendering
    render() {

        // TODO conditional hr above stacked forom
        return (
            <main role="main">
                <div className="c-box">
                    <div className="c-box__header">
                        <Logo />
                    </div>

                    <div className="c-box__body">
                        <StackedForm {...this.props} />
                    </div>
                </div>
            </main>
        )
    }
}

// Detail.defaultProps = {
//     featuredPosts: data.featuredPosts,
//     featuredPeople: data.featuredPeople
// }

// Detail.propTypes = {
//     featuredPosts: React.PropTypes.object,
//     featuredPeople: React.PropTypes.object
// }

export default Form
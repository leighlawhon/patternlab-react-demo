import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

import FooterLogoLink from '../../molecules/media/FooterLogoLink'
import FooterNav from '../../molecules/navigation/FooterNav'
import {data} from '../../../data/data.js'

export default class Footer extends PatternLabComponent {
    // Component rendering
    render() {
        const year = data.year
        const companyName = data.company.name
        
        return(
            <footer className="c-footer" role="contentinfo">

                <div className="l">
                    <FooterLogoLink />
                    <FooterNav />
                    <p className="c-footer__info">
                        This is a demonstration of what's possible with <a href="http://patternlab.io" rel="external">Pattern Lab</a>. <a href="http://patternlab.io/download.html">Download Pattern Lab</a>, check out the <a href="http://patternlab.io/docs/">documentation</a>, or learn more about <a href="http://atomicdesign.bradfrost.com/">atomic design</a>.
                    </p>
                    <p className="copyright">
                        &copy; {year} {companyName}. All rights reserved.
                    </p>
                </div>

            </footer>
        )
    }
}

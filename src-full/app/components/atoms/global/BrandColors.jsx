import React from 'react'
import ColorsComponent from './_ColorsComponent'

import {globalColours} from './_colors'

export default class BrandColors extends ColorsComponent {
    static getTitle() {
        return "Brand colors"
    }

    static getDescription() {
        return "This color palette contains HikeTracker-specific colors to be used throughout the interface."
    }

    _getColor() {
        return globalColours.brand
    }
}
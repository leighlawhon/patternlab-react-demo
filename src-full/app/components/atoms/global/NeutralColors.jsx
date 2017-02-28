import React from 'react'
import ColorsComponent from './_ColorsComponent'

import {globalColours} from './_colors'

export default class NeutralColors extends ColorsComponent {
    static getTitle() {
        return "Neutral colors"
    }

    static getDescription() {
        return "The neutral color palette contains grayscale values that are used throughout the interface. For great tips about color in design systems, check out [this post](https://medium.com/eightshapes-llc/color-in-design-systems-a1c80f65fa3) by Nathan Curtis."
    }

    _getColor() {
        return globalColours.neutral
    }
}
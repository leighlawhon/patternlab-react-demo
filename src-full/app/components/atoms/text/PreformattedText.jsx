import React from 'react'
import {PatternLabComponent} from '@peteyg/patternlab-react-component' 

export default class PreformattedText extends PatternLabComponent {
    // Pattern Lab
    static getTitle() {
        return "Preformatted Text"
    }

    // Component rendering
    render() {
        return (
            <pre>  	
                P R E F O R M A T T E D T E X T<br />
                ! " # $ % &amp; ' ( ) * + , - . /<br />
                0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ?<br />
                @ A B C D E F G H I J K L M N O<br />
                P Q R S T U V W X Y Z [ \ ] ^ _<br />
                ` a b c d e f g h i j k l m n o<br />
                p q r s t u v w x y z {"{"} | {"}"} ~
            </pre>
        )
    }

}
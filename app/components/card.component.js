/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                               from "react-native";
import { View, TouchableHighlight, Text, Image }           from "react-native";
import { CardStyle }                                       from "../styles/styles.module";

class Card extends React.Component {

    constructor(props) {
        super();
        this.state = {
            name: props.name,
            image: props.image
        };
    };

    render() {
        return (
            <TouchableHighlight style={CardStyle.container}>
                <View>
                    <Image style={CardStyle.image} source={{uri: this.state.image}}>
                        <Text style={CardStyle.text}>{this.state.name}</Text>
                    </Image>
                </View>
            </TouchableHighlight>
        );
    };

}

export default Card;
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
        
        console.log(this.state);
    };

    render() {
        return (
            <TouchableHighlight>
                <View>
                    <Text>{this.state.name}</Text>
                    <Image style={CardStyle.default} source={{uri: this.state.image}}/>
                </View>
            </TouchableHighlight>
        );
    };

}

export default Card;
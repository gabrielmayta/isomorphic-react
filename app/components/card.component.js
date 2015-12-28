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
            id: props.id,
            name: props.name,
            image: props.image,
            navigator: props.navigator
        };
    };
    
    navigation(id) {
        this.state.navigator.push({ 
            id: "detail", 
            requestData: { id: id }
        });
    };

    render() {
        return (
            <TouchableHighlight onPress={this.navigation.bind(this, this.state.id)} style={CardStyle.container}>
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
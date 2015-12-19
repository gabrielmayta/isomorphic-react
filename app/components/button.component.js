/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                        from "react-native";
import { View, Text, TouchableHighlight }           from "react-native";
import { Buttons }                                  from "../styles/style.module";


class Button extends React.Component {

    constructor(props) {
        super();
        this.state = {
            label: props.label,
            destination: props.destination,
            navigator: props.navigator
        };
    };

    goTo() {
        this.props.navigator.push({id: this.state.destination});
    };

    render() {
        return (
            <TouchableHighlight onPress={this.goTo.bind(this)} style={[Buttons.btn]}>
                <View>
                    <Text>{this.state.label}</Text>
                </View>
            </TouchableHighlight>
        );
    };

}

export default Button;
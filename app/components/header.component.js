/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                        from "react-native";
import { View, Text, TouchableHighlight }           from "react-native";
import { HeaderStyle }                              from "../styles/styles.module";


class Header extends React.Component {

    constructor(props) {
        super();
        this.state = {
            navigator: props.navigator
        };
    };

    render() {
        return (
            <View style={HeaderStyle.container}>
                <Text>Heroes</Text>
            </View>
        );
    };

}

export default Header;
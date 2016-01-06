/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                        from "react-native";
import { View, Text, TouchableHighlight }           from "react-native";
import Icon                                         from "react-native-vector-icons/FontAwesome";
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
                <View style={HeaderStyle.barContainer}>
                    <Icon name="reorder" style={HeaderStyle.menu} />
                    <Text style={HeaderStyle.logo}>HEROES</Text>
                </View>
            </View>
        );
    };

}

export default Header;
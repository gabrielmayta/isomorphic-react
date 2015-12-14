/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                            from "react-native";
import { Text, View, TouchableHighlight }               from "react-native";
import { Common }                                       from "../../styles/style.module"


class Detail extends React.Component {

    constructor() {
        super();
        this.goToHome = this.goToHome.bind(this);
    };

    goToHome() {
        console.log(this.props.navigator);
        this.props.navigator.jumpBack()
    };

    render() {
        return (
            <View style={Common.container}>
                <Text>Welcome to Page 2!</Text>
                <TouchableHighlight onPress={this.goToHome}>
                    <View>
                        <Text>Torna indietro</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    };

}

export default Detail;
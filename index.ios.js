/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React from "react-native";
import { AppRegistry, StyleSheet, Navigator, Text, View, TouchableOpacity } from "react-native";


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    }
});

class PageOne extends React.Component {

    constructor() {
        super();
        this.goToPage2 = this.goToPage2.bind(this);
    };

    goToPage2() {
        this.props.navigator.push({id: "PageTwo"});
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Your are in page one!</Text>
                <TouchableOpacity onPress={this.goToPage2}>
                    <View>
                        <Text>Pagina 2</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

}

class PageTwo extends React.Component {

    render() {
        return (
            <View style={[styles.container]}>
                <Text>Welcome to Page 2!</Text>
            </View>
        );
    };

}


class Main extends React.Component {

    currentRoute(route, navigator) {

        switch (route.id) {
            case "PageOne":
                return <PageOne navigator={navigator}/>;
            case "PageTwo":
                return <PageTwo navigator={navigator}/>;
            default:
                return <PageOne navigator={navigator}/>;
        }
    };

    render() {
        return (
            <Navigator initialRoute={{id: "PageOne"}} renderScene={this.currentRoute}/>
        );
    };

}

AppRegistry.registerComponent("reactnative", () => Main);

/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                                   from "react-native";
import { Text, View, TouchableHighlight, Image }               from "react-native";
import { Common }                                              from "../../styles/styles.module";
import { Header }                                              from "../../components/components.module";


class Detail extends React.Component {

    constructor(props) {
        super();
        var response = require("./mocks/character.json");
        this.state = {
          responseData: response.data.results,
          navigator: props.navigator
        };
    };
    
    componentDidMount() {
      console.log(this.state.responseData);
    };
    
    navigation() {
        this.state.navigator.pop();
    };

    render() {
        return (
            <View style={Common.container}>
                <Header/>
                <Image style={Common.imageLarge} 
                       source={{uri: this.state.responseData.thumbnail.path + "." + this.state.responseData.thumbnail.extension}}/>
            </View>
        );
    };

}

export default Detail;
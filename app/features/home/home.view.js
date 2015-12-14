/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                            from "react-native";
import { Text, View, TouchableOpacity }                 from "react-native";
import { Common }                                       from "../../styles/style.module"


class Home extends React.Component {

    constructor() {
        super();
        this.goToPage2 = this.goToPage2.bind(this);
    };

    goToPage2() {
        this.props.navigator.push({id: "detail"});
    };

    render() {
        return (
            <View style={Common.container}>
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

export default Home;
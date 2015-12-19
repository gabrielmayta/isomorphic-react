/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                    from "react-native";
import { Text, View }           from "react-native";
import { Button }               from "../../components/components.module";
import { Common }               from "../../styles/style.module";


class Home extends React.Component {

    constructor() {
        super();
    };

    render() {
        return (
            <View style={Common.container}>
                <Text>Your are in page one!</Text>
                <Button label="Vai alla pagina 2" destination="detail" navigator={this.props.navigator}/>
            </View>
        );
    };

}

export default Home;
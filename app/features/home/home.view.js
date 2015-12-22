/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                            from "react-native";
import { Text, View, ListView }         from "react-native";
import { Button, Card }                 from "../../components/components.module";
import { Common }                       from "../../styles/styles.module";


class Home extends React.Component {

    constructor() {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var response = require("./mocks/characters.json");
        this.state = {
            dataSource: ds.cloneWithRows(response.data.results)
        };
    };
    
    componentDidMount(){
      console.log(this.state);  
    };
    
    renderCard(item) {
        return <Card name={item.name} image={item.thumbnail.path + '.' + item.thumbnail.extension}/>;
    };

    render() {
        return (
            <ListView dataSource={this.state.dataSource} renderRow={this.renderCard}/>
        );
    };

}

export default Home;
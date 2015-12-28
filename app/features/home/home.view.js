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
    
    renderCard(item) {
        if(item.thumbnail.path.indexOf("image_not_available") === -1) 
            return <Card id={item.id} 
                         name={item.name} 
                         image={item.thumbnail.path + '.' + item.thumbnail.extension} 
                         navigator={this.props.navigator}/>;
        else 
            return null;
    };

    render() {
        return (
            <ListView dataSource={this.state.dataSource} 
                      renderRow={this.renderCard.bind(this)} 
                      style={Common.topBar}/>
        );
    };

}

export default Home;
/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                from "react-native";
import { Text, View, ScrollView, ListView }             from "react-native";
import { Header, Button, Card }             from "../../components/components.module";
import { Common }                           from "../../styles/styles.module";


class Home extends React.Component {

    constructor() {
        super();
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });
        var response = require("./mocks/characters.json");
        var dataBlob = {}; 
        var dataBlob[new Date()] = response.data.results;
        this.state = {
            dataSource: ds.cloneWithRowsAndSections(dataBlob)
        };
    };
    
    renderCard(item) {
        console.log(item);
        if(item.thumbnail.path.indexOf("image_not_available") === -1) 
            return <Card id={item.id} 
                         name={item.name} 
                         image={item.thumbnail.path + '.' + item.thumbnail.extension}/>;
        else 
            return null;
    };

    render() {
        return (
            <ListView dataSource={this.state.dataSource} 
                renderRow={this.renderCard}
                renderSectionHeader={() => <Header/>}/>
        );
    };

}

export default Home;
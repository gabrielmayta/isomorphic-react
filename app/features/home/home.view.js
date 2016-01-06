/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                from "react-native";
import { Text, ListView }                   from "react-native";
import { Header, Card }                     from "../../components/components.module";
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
        dataBlob[new Date()] = response.data.results;
        this.state = {
            dataSource: ds.cloneWithRowsAndSections(dataBlob)
        };
    };
    
    renderCard(item) {
        if(item.thumbnail.path.indexOf("image_not_available") === -1) 
            return <Card id={item.id} 
                         name={item.name} 
                         image={item.thumbnail.path + '.' + item.thumbnail.extension}
                         navigator={this.props.navigator}/>;
        else return null;
    };

    render() {
        return (
            <ListView dataSource={this.state.dataSource} 
                renderRow={this.renderCard.bind(this)}
                renderSectionHeader={() => <Header/>}
                style={Common.mainBackground}/>
        );
    };

}

export default Home;
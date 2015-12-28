/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                from "react-native";
import { Navigator }                        from "react-native";
import * as Features                        from "../features/features.module";

class Routes extends React.Component {

    currentRoute(route, navigator) {

        console.log("currentRoute", route);

        switch (route.id) {
            case "home":
                return <Features.Home navigator={navigator}/>;
            case "detail":
                return <Features.Detail navigator={navigator}/>;
            default:
                return <Features.Home navigator={navigator}/>;
        }
    };

    render() {
        var test = this.navigationBar;
        return (
            <Navigator initialRoute={{id: "home"}} renderScene={this.currentRoute}/>
        );
    };

}

export default Routes;
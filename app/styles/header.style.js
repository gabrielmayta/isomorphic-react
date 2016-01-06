/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                       from "react-native";
import { StyleSheet }              from "react-native";


let Header = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: 70,
        backgroundColor: "rgba(0, 0, 0, 0.8)"
    },
    barContainer: {
        flexDirection: "row",
        height: 50,
        marginTop: 20
    },
    menu: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 30,
        color: "#ffffff"
    },
    logo: {
        marginTop: 10,
        marginLeft: 14,
        fontSize: 26,
        color: "red"
    }
});

export default Header;
/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                       from "react-native";
import { StyleSheet }              from "react-native";


let Common = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0"
    },
    topBar: {
        marginTop: 20
    },
    imageSmall: {
        width: 60,
        height: 60,
        resizeMode: "cover",
        borderRadius: 30
    },
    imageMedium: {
        width: 120,
        height: 120,
        resizeMode: "cover",
        borderRadius: 60
    },
    imageLarge: {
        width: 200,
        height: 200,
        resizeMode: "cover",
        borderRadius: 100
    }
});

export default Common;
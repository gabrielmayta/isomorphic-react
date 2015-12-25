/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                         from "react-native";
import { StyleSheet }                from "react-native";


let CardStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 180,
        resizeMode: "cover"
    },
    text: {
        position: "absolute",
        left: 20,
        bottom: 20,
        fontSize: 22,
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontWeight: "bold"
    }
});

export default CardStyle;
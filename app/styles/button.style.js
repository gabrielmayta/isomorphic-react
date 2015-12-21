/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                         from "react-native";
import { StyleSheet }                from "react-native";


let ButtonStyle = StyleSheet.create({
    btn: {
        flexDirection: "row",
        maxWidth: 200,
        padding: 20,
        justifyContent: "center",
        borderRadius: 4,
        backgroundColor: "#FF9800"
    },
    active: {
        color: "#F57C00"
    }
});

export default ButtonStyle;
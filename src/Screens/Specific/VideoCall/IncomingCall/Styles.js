import React from 'react';
import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../../assets/colors/colors";
import { RFValue } from "react-native-responsive-fontsize";
import { ScaledSheet } from 'react-native-size-matters';
export default styles = ScaledSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E6EEF4'
    },
    top: {
        flex: 0.2,
        alignItems:'center',
    },
    mid: {
        flex: 0.4,
        alignItems:'center'
    },
    bottom: {
        flex: 0.4,
        alignItems:'center'
    },
    text1:{
        fontSize:'17@ms',
        color:colors.textColor,
        marginTop:'70@vs'
    },
    text2:{
        fontSize:'30@ms',
        fontWeight:'bold',
        color:colors.textColor,
        marginTop:'17@vs'
    },
    text3:{
        fontSize:'16@ms',
        color:colors.textColor,
        marginTop:'3@vs'
    },
    text4:{
        fontSize:'15@ms',
        color:'#034B6C',
        marginTop:'4@vs'
    },
    shadowOffset: {
        width: 0,
        height: 10
    },
    shadowOpacity: 0.25,
    elevation: 5


});
import { Dimensions } from "react-native";
import { colors } from "../../../assets/colors/colors";
import { s, ScaledSheet, vs } from 'react-native-size-matters';
const { width } = Dimensions.get("screen");

export default styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BackgroundColor,
    },
    inner: {
        flex: 0.87,
        backgroundColor: colors.BackgroundColor,

    },
    topView: {
        height: '50@vs',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.BackgroundColor,
        elevation: 4
    },
    iconView: {
        height: s(38),
        width: s(38),
        backgroundColor: '#E6EEF4',
        borderRadius: 38,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingContainer: {
        flexDirection: 'row',
        marginTop: vs(25),
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 8
    },
    coloredLine: {
        borderWidth: 0.7,
        width: '30%',
        borderColor: colors.textColor
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: vs(10)
    },
    Img: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottom: {
        flex: 0.25,
    },
    text1: {
        fontSize: '17@ms',
        fontWeight: 'bold',
        color: colors.textColor2,
        direction: 'rtl'
    },
    text2: {
        fontSize: '20@ms',
        color: colors.textColor2,
        fontWeight: 'bold'
    },
    text3: {
        fontSize: '16@ms',
        color: colors.textColor,
    },
    text4: {
        fontSize: '16@ms',
        color: colors.textColor,
        marginTop: 5
    },
    card1: {
        height: '105@vs',
        elevation: 2,
        borderRadius: 10,
        alignSelf: 'center',
        width: '103@s',
    },
    card2: {
        height: '90@vs',
        elevation: 2,
        borderRadius: 10,
        alignSelf: 'center',
        width: '93%'
    },
    card3: {
        height: '95@vs',
        elevation: 2,
        borderRadius: 10,
        alignSelf: 'center',
        width: '70@s',
    }
});
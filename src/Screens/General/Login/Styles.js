import { ScaledSheet, vs, ms } from 'react-native-size-matters';
import { colors } from "../../../assets/colors/colors";
import { RFValue } from "react-native-responsive-fontsize";

export default styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BackgroundColor,
    },
    subContainer: {
        margin: 15,
        marginTop: vs(70)
    },
    text1: {
        fontSize: '26@ms',
        fontWeight: 'bold',
        color: colors.textColor
    },
    text2: {
        fontSize: '16@ms',
        marginTop: '24@vs',
        color: colors.textColor
    },
    button1: {
        height: '50@vs',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        marginTop: '20@vs',
        shadowOpacity: 25,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        paddingHorizontal: '8@s',
        backgroundColor: '#EBF2F7'
    },
    toggleButtonView: {
        height: 40,
        width: vs(70),
        paddingHorizontal: 3,
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: colors.BackgroundColor,
        borderWidth: 1.8,
        borderColor: '#77869C'
    },
    toggleView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
        borderRadius: 30,
    },
    text3: {
        fontSize: '18@ms',
        color: colors.textColor,
        right: '-10@s'
    },
    text4: {
        fontSize: '16@ms',
        marginTop: '38@vs',
        color: colors.textColor
    },
    childContainer: {
        flexDirection: 'row',
        marginTop: vs(30),
        width: '100%',
        justifyContent: 'space-between'
    },
    dropDown: {
        borderRadius: 8,
        width: '27%',
        height: vs(49),
        borderWidth: 1,
        borderColor: colors.borderColor,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        borderRadius: 8,
        width: '70%',
        height: vs(49),
        borderWidth: 1,
        borderColor: colors.borderColor,
        justifyContent: 'center'
    },
    textinput: {
        fontSize: '17@ms',
        alignSelf: 'flex-end',
        paddingHorizontal: '10@s',
        textAlign: 'right'
    },
    button2: {
        height: vs(50),
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        marginTop: '65@vs',
        elevation: 4,
        shadowOpacity: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: ms(18),
        color: colors.BackgroundColor
    }
});
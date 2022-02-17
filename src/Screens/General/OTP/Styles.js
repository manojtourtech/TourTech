import { colors } from "../../../assets/colors/colors";
import { ScaledSheet } from 'react-native-size-matters';

export default styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BackgroundColor,
    },
    text1: {
        fontSize: '26@ms',
        fontWeight: 'bold',
        color: colors.textColor
    },
    text2: {
        fontSize: '18@ms',
        marginTop: '15@vs',
        color: colors.textColor
    },
    textInputContainer: {
        marginTop: '15@vs',
        alignItems: 'center',
        justifyContent: 'center'
    },
    roundedTextInput: {
        width: '70@s',
        height: '65@vs',
        borderRadius: 10,
        borderWidth: 1,
    },
    button: {
        height: '50@vs',
        width: '100%',
        borderRadius: 8,
        marginTop: '120@vs',
        alignSelf: 'center',
        elevation: 4,
        shadowOpacity: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.PrimaryColor
    },
    text4: {
        fontSize: '19@ms',
        color: 'white'
    }
});
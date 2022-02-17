
import { colors } from "../../../assets/colors/colors";
import { ScaledSheet } from 'react-native-size-matters';

export default styles = ScaledSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.BackgroundColor,
    },
    inner: {
        flex: 1,
        flexDirection: 'column',
    },
    topView: {
        height: '50@vs',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.BackgroundColor,
        elevation: 4
    },
    topView1: {
        height: '65@vs',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        backgroundColor: colors.BackgroundColor
    },
    topView2: {
        height: '75@vs',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.BackgroundColor

    },
    topView3:{
        height: '50@vs',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.BackgroundColor,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
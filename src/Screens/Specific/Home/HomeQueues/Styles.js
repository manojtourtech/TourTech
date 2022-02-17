import { Dimensions } from "react-native";
import { colors } from "../../../../assets/colors/colors";
import { ScaledSheet, vs, ms, s } from 'react-native-size-matters';
const { width } = Dimensions.get("screen");

export default styles = ScaledSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f9fafc',
    },
    inner: {
        flex: 0.87,
        backgroundColor: '#f9fafc'
    },
    childContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vs(10),
        alignSelf: 'flex-end'
    },
    text1: {
        fontSize: ms(21),
        fontWeight: 'bold',
        marginRight: s(15),
        color: '#2F950B'
    },
    iconView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: vs(48),
        width: s(45),
        borderRadius: 10,
        backgroundColor: '#2F950B'
    },
    text2: {
        fontSize: ms(20),
        fontWeight: 'bold',
        marginTop: vs(20),
        color: '#2F950B'
    },
    text3: {
        fontSize: ms(20),
        fontWeight: 'bold',
        color: colors.textColor
    },
    cardSubView1: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center',
        marginTop: vs(15)
    },
    text4: {
        fontSize: ms(18),
        color: colors.textColor
    },
    text5: {
        fontSize: ms(16),
        color: '#68777B',
        marginTop: vs(4)
    },
    lineView: {
        borderWidth: 0.6,
        borderColor: '#D1D9DB',
        marginTop: vs(15),
        width: '100%',
        alignSelf: 'center'
    },
    text5: {
        fontSize: ms(18),
        color: '#2F950B',
        marginTop: vs(10)
    },
    cardSubView2: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginTop: vs(5)
    },
    text6: {
        fontSize: ms(18),
        color: '#2F950B',
        right: s(8)
    },
    topView: {
        height: '50@vs',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.BackgroundColor,
        elevation: 4
    },
    topView2: {
        height: '50@vs',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.BackgroundColor,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeStyle: {
        position: 'absolute',
        top: '-5@vs',
        left: '22@s',
    },
    Img: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Input: {
        flex: 0.46,
        paddingBottom: 7
    },
    outerCircle: {
        height: '45@s',
        width: '45@s',
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        flex: 0.25,
    },
    Text1: {
        fontSize: '17@ms',
        fontWeight: 'bold',
        color: colors.textColor2,
        direction: 'rtl'

    },
    Text2: {
        fontSize: '19@ms',
        color: colors.PrimaryColor,
    },
    Text3: {
        fontSize: '18@ms',
        color: colors.textColor
    },
    Text4: {
        fontSize: '19@ms',
        fontWeight: 'bold',
        color: colors.PrimaryColor
    },
    Text5: {
        fontSize: '16@ms',
        marginTop: '5@vs',
        color: colors.textColor
    },
    Text6: {
        fontSize: '19@ms',
        color: colors.BackgroundColor
    },

    button3: {
        height: 45,
        width: '94%',
        borderRadius: 10,
        marginTop: '25@vs',
        alignSelf: 'center',
        elevation: 2,
        flexDirection: 'row',
        backgroundColor: colors.BackgroundColor,
        borderWidth: 0.7,
        borderColor: colors.borderColor
    },
    button1: {
        height: '50@vs',
        width: '100%',
        borderRadius: 10,
        marginTop: '30@vs',
        alignSelf: 'center',
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.PrimaryColor
    },
    button2: {
        height: 65,
        width: '100%',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: '35@vs',
        elevation: 2,
        flexDirection: 'row',
        backgroundColor: colors.BackgroundColor,
        borderWidth: 0.7,
        borderColor: colors.borderColor
    },
    card1: {
        height: '185@vs',
        elevation: 2,
        borderRadius: 10,
        borderWidth: 0.6,
        borderColor: colors.borderColor,
        alignSelf: 'center',
        width: '100%',
        marginTop: '20@vs',
        backgroundColor: colors.BackgroundColor

    },
    card2: {
        height: '56@vs',
        elevation: 2,
        borderRadius: 10,
        alignSelf: 'center',
        width: '100%',
        borderWidth: 0.8,
        borderColor: colors.borderColor,
        backgroundColor: colors.BackgroundColor

    },

    Avatar: {
        marginTop: '9@vs'
    },
    textInput: {
        height: 60,
        width: '94%',
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: '7@vs',
        fontSize: '17@ms',
        color: '#46B4D7',
        paddingRight: '12@s'
    },
    textInput2: {
        height: 58,
        width: '90%',
        borderRadius: 10,
        borderWidth: 0.7,
        alignSelf: 'center',
        flexDirection: 'row',
        borderColor: colors.borderColor,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        paddingHorizontal: '15@s',
        marginTop: '15@vs',
        backgroundColor: colors.BackgroundColor
    },
    viewWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '"rgba(0, 0, 0, 0.5)"',
    },
    modalView: {
        height: '40%',
        width: width * 1,
        backgroundColor: colors.BackgroundColor,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    modalView2: {
        height: '90%',
        width: width * 1,
        backgroundColor: colors.BackgroundColor,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },



});
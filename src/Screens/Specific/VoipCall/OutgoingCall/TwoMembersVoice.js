import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { Avatar } from 'react-native-paper';
import { colors } from '../../../../assets/colors/colors'
import styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import 'react-native-gesture-handler';
import IconIon from 'react-native-vector-icons/Ionicons'
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconFont from 'react-native-vector-icons/FontAwesome'
import IconEnt from 'react-native-vector-icons/Entypo'
import IconAnt from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import { vs, s, } from 'react-native-size-matters';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

function reverseText(s) {
    console.log(s.split("").reverse().join(""))
    return s.split("").reverse().join("");
}
const TwoMembersVoice = ({ navigation }) => {

    const [isModalVisible, setModalVisible] = React.useState(false);
    const toggleModal = (show) => {
        setModalVisible(show);
    }

    return (

        <LinearGradient
            colors={['#E6EEF4E5', '#FFFFFFE5']}

            style={styles.container}>
            <Modal
                isVisible={isModalVisible}
                animationIn={'slideInUp'}
                animationOut={'slideOutDown'}
                avoidKeyboard={true}
                animationInTiming={500}
                animationOutTiming={500}
                onBackButtonPress={() => toggleModal(false)}
                onSwipeComplete={() => toggleModal(false)}
                swipeDirection={'up'}
            >
                <View style={{ height: Height * 1, width: Width * 1, marginTop: 250, backgroundColor: 'white', alignSelf: 'center', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                    <View style={{ flex: 0.1, flexDirection: 'row' }}>

                        <View style={{ flex: 0.2, justifyContent: 'center' }}>
                            <TouchableOpacity
                                onPress={() => toggleModal(false)}
                                style={{ marginLeft: 20 }}>
                                <View style={{ height: 45, width: 45, backgroundColor: '#E6EEF4', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                                    <IconAnt
                                        name='close'
                                        size={27}
                                        color={colors.textColor}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center', right: 40 }}>
                            <Text style={styles.text9}>{reverseText('םיפדעומל ףסוה')}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.6, backgroundColor: 'red' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 60, width: '94%', borderWidth: 1, borderColor: colors.borderColor, borderRadius: 10, }}>
                            <IconIon
                                style={{ marginLeft: 10 }}
                                name='search-outline'
                                size={30}
                                color={colors.PrimaryColor}
                            />
                            <TextInput placeholder='Hi'></TextInput>
                        </View>
                    </View>
                    <View style={{ flex: 0.3, backgroundColor: 'pink' }}></View>
                </View>
            </Modal>


            < View style={styles.top} >

                <View style={{ marginTop: vs(12), height: s(160), width: s(160), elevation: 3, backgroundColor: colors.BackgroundColor, borderRadius: 160, justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar.Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80'
                        }}
                        size={s(150)}
                    />
                </View>
                <Text style={styles.text2}>{reverseText('םייח לפוטמ')}</Text>
                <Text style={styles.text3}>0528704530</Text>
                <Text style={styles.text5}>00:54</Text>
            </View >
            <View style={styles.bottom1}>
                <View style={{ flexDirection: 'column' }}>

                    <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', elevation: 3, width: s(55), height: s(55), borderRadius: 55, backgroundColor: colors.BackgroundColor }}>
                            <TouchableOpacity onPress={() => toggleModal(true)}>
                                <IconEnt
                                    name='plus'
                                    size={s(25)}
                                    color={'#034B6C'}
                                />
                            </TouchableOpacity>

                        </View>
                        <Text style={styles.text4}>{reverseText('העדוה')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: vs(22) }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', elevation: 3, width: s(55), height: s(55), borderRadius: 55, backgroundColor: colors.BackgroundColor }}>
                                <TouchableOpacity>
                                    <IconIon
                                        name='md-chatbubble-ellipses-sharp'
                                        size={s(25)}
                                        color={'#034B6C'}
                                    />
                                </TouchableOpacity>

                            </View>
                            <Text style={styles.text4}>{reverseText('העדוה')}</Text>
                        </View>

                        <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: s(47) }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', elevation: 3, width: s(55), height: s(55), borderRadius: 55, backgroundColor: colors.BackgroundColor }}>
                                <TouchableOpacity>
                                    <IconFont
                                        name='video-camera'
                                        size={s(22)}
                                        color={'#034B6C'}
                                    />
                                </TouchableOpacity>

                            </View>
                            <Text style={styles.text4}>{reverseText('העדוה')}</Text>
                        </View>

                        <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: s(47) }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', elevation: 3, width: s(55), height: s(55), borderRadius: 55, borderRadius: 65, backgroundColor: colors.BackgroundColor }}>
                                <TouchableOpacity>
                                    <IconIon
                                        name='volume-medium'
                                        size={s(27)}
                                        color={'#034B6C'}
                                    />
                                </TouchableOpacity>

                            </View>
                            <Text style={styles.text4}>{reverseText('העדוה')}</Text>
                        </View>

                    </View>
                </View>

            </View>
            <View style={styles.bottom2}>
                <TouchableOpacity style={styles.button}>
                    <IconM
                        name='call-end'
                        size={s(28)}
                        color={colors.BackgroundColor}
                    />
                </TouchableOpacity>
                <Text onPress={() => navigation.navigate('ThreeMembersVoice')} style={styles.text6}>{reverseText('החיש קתנ')}</Text>
            </View>
        </LinearGradient >







    );
}

export default TwoMembersVoice;
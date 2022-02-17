import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { colors } from '../../../../assets/colors/colors'
import { Avatar, Card } from 'react-native-paper'
import IconIon from 'react-native-vector-icons/Ionicons'
import IconZ from 'react-native-vector-icons/Zocial'
import IconM from 'react-native-vector-icons/MaterialIcons'
import { s,vs,ms } from 'react-native-size-matters';
import styles from './Styles'

function reverseText(s){
    console.log(s.split("").reverse().join(""))
    return s.split("").reverse().join("");
}

const IncomingCall = ({ navigation }) => {

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={'#E6EEF4'} barStyle='dark-content' />

            <View style={styles.top}>
                <Text style={styles.text1}>{reverseText('תסנכנ ואדיו תחיש...')}</Text>
            </View>
            <View style={styles.mid}>
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
            </View>
            <View style={styles.bottom}>
                <View style={{ justifyContent: 'center', alignItems: 'center', elevation: 3, marginTop: vs(65), width: s(55), height: s(55), borderRadius: 55, backgroundColor: colors.BackgroundColor }}>
                    <TouchableOpacity>
                        <IconIon
                            name='md-chatbubble-ellipses-sharp'
                            size={s(25)}
                            color={'#034B6C'}
                        />
                    </TouchableOpacity>

                </View>
                <Text style={styles.text4}>{reverseText('העדוה')}</Text>
                <View style={{ flexDirection: 'row', marginTop: vs(29) }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <View style={{ height: s(70), width: s(70), elevation: 3, borderRadius: 70, backgroundColor: '#10B01C', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Outgoing')}>
                                <IconZ
                                    name='call'
                                    size={s(25)}
                                    color={colors.BackgroundColor}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.text4}>{reverseText('תסנכנ תילוק החיש')}</Text>
                    </View>

                    <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft:s(68) }}>
                        <View style={{ height: s(70), width: s(70), elevation: 3, borderRadius: 70, backgroundColor: '#F41032', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <IconM
                                    name='call-end'
                                    size={s(25)}
                                    color={colors.BackgroundColor}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.text4}>{reverseText('החיש קתנ')}</Text>
                    </View>


                </View>
            </View>
        </View>

    );
};

export default IncomingCall;
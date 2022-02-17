import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Avatar } from 'react-native-paper';
import { colors } from '../../../assets/colors/colors'
import Styles from './Styles';
import 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';
import IconEnt from 'react-native-vector-icons/Entypo'
import { s } from 'react-native-size-matters';

function reverseText(s){
    console.log(s.split("").reverse().join(""))
    return s.split("").reverse().join("");
}
const Settings = ({ navigation }) => {


    return (
        <View style={Styles.container}>
            <View style={Styles.top}>
                <View style={{ flex: 0.2 }} />
                <View style={{ flex: 0.55, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={Styles.Text1}>{reverseText('ןובשח תורדגה')}</Text>
                </View>
                <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())} >
                        <View style={Styles.MenuButton}>
                            <IconEnt
                                name='menu'
                                size={s(23)}
                                color={colors.textColor}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Styles.mid}>
                <View style={{ flex: 0.8, justifyContent: 'center' }}>
                    <Text style={Styles.Text2}>{reverseText('ילארשי לארשי')}</Text>
                    <Text style={Styles.Text3}>{reverseText('רוטקוד')}</Text>
                </View>
                <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Avatar.Image style={{ right: 15 }}
                        source={{
                            uri: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                        }}
                        size={60}
                    />
                </View>
            </View>
            <View style={Styles.bottom}>
                <Text style={Styles.Text4}>{reverseText('יללכ')}</Text>

                <View style={Styles.textInput}>
                    <TextInput placeholder={reverseText('ילארשי לארשי')} style={Styles.textInputdata}></TextInput>
                </View>
                <View style={[Styles.textInput, { marginTop: 15 }]}>
                    <TextInput placeholder={reverseText('ןופלט רפסמ הנש')} style={Styles.textInputdata}></TextInput>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('SettingsTwo')}
                 style={Styles.button1}>
                    <Text style={Styles.Text5}>{reverseText('קתנתהל')}</Text>
                </TouchableOpacity>



            </View>
        </View>

    );
};

export default Settings;
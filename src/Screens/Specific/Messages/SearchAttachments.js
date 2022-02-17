import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { Avatar } from 'react-native-paper'
import { colors } from '../../../assets/colors/colors'
import IconEnt from 'react-native-vector-icons/Entypo'
import IconFont from 'react-native-vector-icons/FontAwesome5'
import IconIon from 'react-native-vector-icons/Ionicons'
import { DrawerActions } from '@react-navigation/native';
import styles from './Styles'
import { s, vs } from 'react-native-size-matters'
function reverseText(s){
    console.log(s.split("").reverse().join(""))
    return s.split("").reverse().join("");
}
const SearchAttachment = ({ navigation }) => {



    return (
        <View style={styles.container}>
            <View style={styles.inner}>

                <View style={styles.topView}>

                    <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                        <Avatar.Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                            }}
                            size={s(45)}
                        />
                    </View>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.Text1}>{reverseText('תועדוה')}</Text>
                    </View>
                    <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())} >
                            <View style={{ height: s(38), width: s(38), backgroundColor: '#E6EEF4', borderRadius: 38, justifyContent: 'center', alignItems: 'center' }}>
                                <IconEnt
                                    name='menu'
                                    size={s(22)}
                                    color={colors.textColor}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.topView1}>
                    <View style={styles.InputBox}>
                        <View style={{ flex: 0.13, justifyContent: 'center' }}>
                            <View style={{ height: s(25), width: s(25), borderRadius: 25, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center', backgroundColor: '#AEBDC1' }}>
                                <TouchableOpacity>
                                    <IconIon
                                        name='close'
                                        size={s(20)}
                                        color={colors.BackgroundColor}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 0.77, justifyContent: 'center' }}>
                            <TextInput placeholder={reverseText('םרול')} style={styles.Input} placeholderTextColor={colors.textColor} />
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'center', }}>
                            <TouchableOpacity>
                                <IconIon
                                    name='search-outline'
                                    size={s(25)}
                                    color={colors.PrimaryColor}
                                />
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
                <View style={{ height: '69%', width: '94%', marginTop: vs(15), alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', height: vs(40), width: '94%', alignSelf: 'center', borderWidth: 0.4, borderRadius: 10, borderColor: colors.borderColor }}>
                        <View style={{ flex: 0.5, justifyContent: 'center' }}>
                            <TouchableOpacity style={styles.Attachement}>
                                <Text style={styles.Text5}>{reverseText('םיפרוצמ םיצבק')}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>navigation.navigate('SearchMessage')}>
                                <Text style={styles.Text6}>{reverseText('תועדוה')}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    {/* LIST START */}
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={[styles.listView1, { marginTop: vs(16) }]}>
                            <View style={{ flex: 0.8, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', }}>

                                <Text style={styles.Text7}>2020-1231-1235.pdf</Text>
                                <Text style={styles.Text8}>3.1 MB · 14 Jan 2021</Text>

                            </View>
                            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                <IconFont
                                    name='file-pdf'
                                    size={s(50)}
                                    color={'#DD4949'}
                                />
                            </View>
                        </View>

                        {/* FIRST END */}
                        <View style={{ borderWidth: 0.6, marginTop: vs(8), borderColor: '#D1D9DB', width: '94%', alignSelf: 'center' }}></View>

                        {/* SECOND START */}

                        <View style={[styles.listView1, { marginTop: vs(16) }]}>
                            <View style={{ flex: 0.8, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', }}>

                                <Text style={styles.Text7}>20-07-2020 IMG.jpg</Text>
                                <Text style={styles.Text8}>3.1 MB · 14 Jan 2021</Text>

                            </View>
                            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ height: s(50), width: s(50), borderRadius: 10 }}
                                    source={{ uri: 'https://images.unsplash.com/photo-1582706117275-3a583eae07bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHNleHklMjBnaXJsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}>

                                </Image>
                            </View>
                        </View>

                        {/* SECOND END */}
                        <View style={{ borderWidth: 0.6, marginTop: vs(8), borderColor: '#D1D9DB', width: '94%', alignSelf: 'center' }}></View>

                        {/* THIRD START */}

                        <View style={[styles.listView1, { marginTop: vs(16) }]}>
                            <View style={{ flex: 0.8, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', }}>

                                <Text style={styles.Text7}>2020_recording.mp3</Text>
                                <Text style={styles.Text8}>3.1 MB · 14 Jan 2021</Text>

                            </View>
                            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: s(50), width: s(50), borderRadius: 50, justifyContent:'center', alignItems:'center', backgroundColor: colors.PrimaryColor }}>
                                    <IconEnt
                                        name='triangle-right'
                                        size={s(28)}
                                        color={colors.BackgroundColor}
                                    />
                                </View>

                            </View>
                        </View>

                        <View style={{ borderWidth: 0.6, marginTop: vs(8), borderColor: '#D1D9DB', width: '94%', alignSelf: 'center' }}></View>

                        {/* THIRD END */}
                    </ScrollView>
                    {/* LISTVIEW */}
                </View>

            </View>


        </View>
    );
};

export default SearchAttachment;
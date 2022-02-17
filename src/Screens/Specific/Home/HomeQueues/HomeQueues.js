import React, { useState } from 'react';
import { View, SectionList, Text, StatusBar, ScrollView } from 'react-native';
import { Card, Avatar } from 'react-native-paper'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import IconFont from 'react-native-vector-icons/FontAwesome'
import IconIon from 'react-native-vector-icons/Ionicons'
import { ms, s, vs } from 'react-native-size-matters';

import { colors } from '../../../../assets/colors/colors'
import styles from './Styles'

const images = {
    "image1": 'https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    "image2": 'https://images.unsplash.com/photo-1520780662578-a2e93221bbd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmxzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    "image3": 'https://images.unsplash.com/photo-1547944379-e0b132d2ddfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    "image4": 'https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    "image5": 'https://images.unsplash.com/photo-1589992896844-9b720813d1cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    "image6": 'https://images.unsplash.com/photo-1565493383251-d3a136e92e6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    "image7": 'https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
}

const queueData = [
    {
        title: 'רחמ',
        data: [
            {
                id: 1,
                treatmentType: 'יללכ לופיט',
                type: 'גניסיפידא ררוטקסנוק',
                profession: 'רוטקוד',
                dateTime: '00:01 | 1202 רבמטפסב 41',
                mode: 'מרפאת רפואה',
                medium: 'location'
            },
        ]
    },
    {
        title: 'אבה עובש',
        data: [
            {
                id: 2,
                treatmentType: 'יללכ לופיט',
                type: 'גניסיפידא ררוטקסנוק',
                profession: 'רוטקוד',
                dateTime: '00:01 | 1202 רבמטפסב 41',
                mode: 'ואדיו ץועיי',
                medium: 'video'
            },
            {
                id: 3,
                treatmentType: 'יללכ לופיט',
                type: 'גניסיפידא ררוטקסנוק',
                profession: 'רוטקוד',
                dateTime: '00:01 | 1202 רבמטפסב 41',
                mode: 'מרפאת רפואה',
                medium: 'location'
            },
        ]
    },
    {
        title: 'אבה שדוח',
        data: [
            {
                id: 4,
                treatmentType: 'יללכ לופיט',
                type: 'גניסיפידא ררוטקסנוק',
                profession: 'רוטקוד',
                dateTime: '00:01 | 1202 רבמטפסב 41',
                mode: 'ןופלט תחיש',
                medium: 'audio'
            },
            {
                id: 5,
                treatmentType: 'יללכ לופיט',
                type: 'גניסיפידא ררוטקסנוק',
                profession: 'רוטקוד',
                dateTime: '00:01 | 1202 רבמטפסב 41',
                mode: 'ואדיו ץועיי',
                medium: 'video'
            },
        ]
    }
];

function reverseText(s) {
    console.log(s.split("").reverse().join(""))
    return s.split("").reverse().join("");
}
const HomeQueues = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <Card style={styles.card1}>
            <View style={{ flex: 1, margin: 12, justifyContent: 'center' }}>
                <Text style={styles.text3}>{reverseText(item.treatmentType)}</Text>
                <View style={styles.cardSubView1}>
                    <View style={{ right: s(10) }}>
                        <Text style={styles.text4}>{reverseText(item.type)}</Text>
                        <Text style={styles.text5}>{reverseText(item.profession)}</Text>
                    </View>
                    <Avatar.Image source={{ uri: images.image2 }} size={s(52)} />
                </View>
                <View style={styles.lineView} />
                <Text style={styles.text5}>{reverseText(item.dateTime)}</Text>
                <View style={styles.cardSubView2}>
                    <Text style={styles.text6}>{reverseText(item.mode)}</Text>
                    {item.medium === 'location' ?
                        <IconIon
                            name='ios-location-sharp'
                            size={s(22)}
                            color={'#2F950B'}
                        /> :
                        item.medium === 'video' ?
                            <IconFont
                                name='video-camera'
                                size={s(20)}
                                color={'#2F950B'}
                            /> :
                            item.medium === 'audio' ?
                                <IconIon
                                    name='ios-call'
                                    size={s(20)}
                                    color={'#2F950B'}
                                /> : null
                    }
                </View>
            </View>
        </Card>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.BackgroundColor} barStyle='dark-content' />
            <View style={styles.inner}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginTop: vs(20), margin: 15 }}>
                        {/**********************************************/}
                        <View style={styles.childContainer}>
                            <Text style={styles.text1}>{reverseText('תופורת תמישר')}</Text>
                            <View style={styles.iconView}>
                                <IconFontisto
                                    name='doctor'
                                    size={s(23)}
                                    color={colors.BackgroundColor} />
                            </View>
                        </View>

                        {/**********************************************/}
                        <SectionList
                            sections={queueData}
                            keyExtractor={(item, index) => item + index}
                            renderItem={renderItem}
                            renderSectionHeader={({ section: { title } }) => (
                                <Text style={styles.text2}>{reverseText(title)}</Text>
                            )}
                        />

                        {/* ************************************************/}
                        <Card style={{ height: vs(220), width: '100%', elevation: 3, alignSelf: 'center', marginTop: vs(15), borderRadius: 10, marginBottom: vs(5) }}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 0.18, flexDirection: 'row', alignItems: 'center', marginHorizontal: s(10) }}>
                                    <IconIon
                                        name='settings-sharp'
                                        size={s(22)}
                                        color={colors.PrimaryColor}
                                    />
                                    <Text style={{ fontSize: ms(17), fontWeight: 'bold', color: colors.PrimaryColor, left: s(8) }}>{reverseText('ךורעל')}</Text>
                                    <Text style={{ fontSize: ms(17), fontWeight: 'bold', color: colors.PrimaryColor, position: 'absolute', right: 0 }}>{reverseText('םיבושח רשק ישנא')}</Text>

                                </View>
                                <View style={{ flex: 0.82, flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 0.5 }}>
                                        <View style={{ alignItems: 'center', height: '85%', width: '100%', borderRightWidth: 0.7, borderColor: colors.borderColor }}>
                                            <Avatar.Image
                                                style={{ alignSelf: 'flex-end', marginRight: s(12) }}
                                                source={{
                                                    uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                                                }}
                                                size={s(52)}
                                            />
                                            <Text style={{ fontSize: ms(15), color: '#68777B', top: vs(8) }}>{reverseText('םרולםוספיא')}</Text>
                                            <IconIon
                                                style={{ marginTop: vs(25) }}
                                                name='call'
                                                size={s(24)}
                                                color={colors.PrimaryColor}
                                            />
                                            <IconFont
                                                style={{ marginTop: vs(12) }}
                                                name='video-camera'
                                                size={s(24)}
                                                color={'#23973D'}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.5, }}>
                                        <View style={{ alignItems: 'center', height: '85%', width: '100%', borderRightWidth: 0.7, borderColor: colors.borderColor }}>
                                            <Avatar.Image
                                                style={{ alignSelf: 'flex-end', marginRight: s(12) }}
                                                source={{
                                                    uri: 'https://images.unsplash.com/photo-1605108040941-7c762d5ed4e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNleHklMjBnaXJsc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                                                }}
                                                size={s(52)}
                                            />
                                            <Text style={{ fontSize: ms(15), color: '#68777B', top: vs(8) }}>{reverseText('םרולםוספיא')}</Text>
                                            <IconIon
                                                style={{ marginTop: vs(25) }}
                                                name='call'
                                                size={s(24)}
                                                color={colors.PrimaryColor}
                                            />
                                            <IconFont
                                                style={{ marginTop: vs(12) }}
                                                name='video-camera'
                                                size={s(24)}
                                                color={'#23973D'}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.5, }}>
                                        <View style={{ alignItems: 'center', height: '85%', width: '100%', borderRightWidth: 0.7, borderColor: colors.borderColor }}>
                                            <Avatar.Image
                                                style={{ alignSelf: 'flex-end', marginRight: s(12) }}
                                                source={{
                                                    uri: 'https://images.unsplash.com/photo-1609952542840-df54cfddc3fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                                                }}
                                                size={s(52)}
                                            />
                                            <Text style={{ fontSize: ms(15), color: '#68777B', top: vs(8) }}>{reverseText('םרולםוספיא')}</Text>
                                            <IconIon
                                                style={{ marginTop: vs(25) }}
                                                name='call'
                                                size={s(24)}
                                                color={colors.PrimaryColor}
                                            />
                                            <IconFont
                                                style={{ marginTop: vs(12) }}
                                                name='video-camera'
                                                size={s(24)}
                                                color={'#23973D'}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.5, }}>
                                        <View style={{ alignItems: 'center', height: '85%', width: '100%', borderRightWidth: 0.7, borderColor: colors.borderColor }}>
                                            <Avatar.Image
                                                style={{ alignSelf: 'flex-end', marginRight: s(12) }}
                                                source={{
                                                    uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                                                }}
                                                size={s(52)}
                                            />
                                            <Text style={{ fontSize: ms(15), color: '#68777B', top: vs(8) }}>{reverseText('םרולםוספיא')}</Text>
                                            <IconIon
                                                style={{ marginTop: vs(25) }}
                                                name='call'
                                                size={s(24)}
                                                color={colors.PrimaryColor}
                                            />
                                            <IconFont
                                                style={{ marginTop: vs(12) }}
                                                name='video-camera'
                                                size={s(24)}
                                                color={'#23973D'}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Card>
                    </View>
                </ScrollView>

            </View >
        </View >
    );
};

export default HomeQueues;

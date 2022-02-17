import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import { colors } from '../../../assets/colors/colors'
import styles from './Styles'
import IconFont from 'react-native-vector-icons/FontAwesome'
import { vs } from 'react-native-size-matters';

function reverseText(s){
    console.log(s.split("").reverse().join(""))
    return s.split("").reverse().join("");
}

const AddNew = ({ navigation }) => {
    

    const favorite = [
        {
            img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            name: '1 לפוטמ',
            contact: '0583563857'
        },
        {
            img: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            name: '2 לפוטמ',
            contact: '0583563857'
        },
        {
            img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            name: '3 לפוטמ',
            contact: '0583563857'
        },
        {
            img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            name: '4 לפוטמ',
            contact: '0583563857'
        },
    ];
    return (

        <View style={styles.container}>
            
            <View style={styles.topView}>
                <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[styles.Text1, { color: colors.PrimaryColor }]}>{reverseText('הרימש')}</Text>
                </View>
                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text11}>{reverseText('שדח רשק שיא')}</Text>
                </View>
                <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Contacts')
                    }}>
                        <Text style={[styles.Text1, { color: '#F41032' }]}>{reverseText('לטבל')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Img}>
                <View style={{ height: 100, width: 100, backgroundColor: '#AEBDC1', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <IconFont
                        name='user'
                        size={75}
                        color={colors.BackgroundColor}
                    />
                </View>
                <Text style={styles.Text12}>{reverseText('הנומת ףסוה')}</Text>
            </View>
            <View style={styles.Input}>
                <ScrollView>
                    <Text style={styles.Text13}>{reverseText('יטרפ םש')}</Text>
                    <TextInput placeholder={reverseText('יטרפ םש ןזה')} style={styles.textInput}></TextInput>
                    <Text style={[styles.Text13, { marginTop: vs(8) }]}>{reverseText('החפשמ םש')}</Text>
                    <TextInput placeholder={reverseText('החפשמ םש ןזהיטרפ םש ןזה')} style={styles.textInput}></TextInput>
                    <Text style={[styles.Text13, { marginTop: vs(8) }]}>{reverseText('דיקפת תרדגה')}</Text>
                    <TextInput placeholder={reverseText('דיקפת םש ןזה')} style={styles.textInput}></TextInput>
                    <Text style={[styles.Text13, { marginTop: vs(8) }]}>{reverseText('הקלחמ')}</Text>
                    <TextInput placeholder={reverseText('הקלחמל סנכיהל')} style={styles.textInput}></TextInput>
                    <Text style={[styles.Text13, {marginTop: vs(8) }]}>{reverseText('ןופלט רפסמ')}</Text>
                    <TextInput placeholder={reverseText('ןופלטה רפסמ תא סינכת')} style={styles.textInput}></TextInput>
                    <Text style={[styles.Text13, { marginTop: vs(8) }]}>{reverseText('ליימיא')}</Text>
                    <TextInput placeholder={reverseText('ל"אוד תבותכ ןזה')} style={styles.textInput}></TextInput>
                    <Text style={[styles.Text13, {marginTop: vs(8) }]}>{reverseText('תורעה')}</Text>
                    <TextInput placeholder={reverseText('הרעה ףסוה')} style={styles.textInput}></TextInput>
                </ScrollView>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={[styles.button1, { backgroundColor: colors.PrimaryColor }]}>

                    <Text style={styles.Text14}>{reverseText('הרימש')}</Text>

                </TouchableOpacity>
            </View>

        </View>
    );
};

export default AddNew;

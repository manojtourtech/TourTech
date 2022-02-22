import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './Styles'
import IconAnt from 'react-native-vector-icons/AntDesign'

const AccessToGoogle = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });


    return (
        <View style={styles.container}>

            <Text>hi</Text>
        </View>
    );
};

export default AccessToGoogle;
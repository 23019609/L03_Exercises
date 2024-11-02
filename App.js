import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
    ToastAndroid,
    ScrollView
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const MyApp = () => {
    const [username, setUsername] = useState('');
    const [usertype, setUsertype] = useState('');

    return (
        <View style={{padding: 30, paddingTop: 50, paddingBottom: 50}}>
            <ScrollView style={{marginBottom: 30}}>

                {/*EXERCISE 1B*/}
                <Text>User Type:</Text>
                <RNPickerSelect
                    onValueChange={(value) => {
                        setUsertype(value)
                    }}
                    items={[
                        {label: 'Admin', value: 'Admin'},
                        {label: 'Guest', value: 'Guest'},
                    ]}
                />

                {/*EXERCISE 1G*/}
                <Text>User Name:</Text>
                <TextInput
                    style={{borderWidth: 1}}
                    onChangeText={(text) => {
                        setUsername(text)
                    }}
                />

                {/*EXERCISE 1A*/}
                <Text>Password: </Text>
                <TextInput style={{borderWidth: 1}}/>

                {/*EXERCISE 1C & 1D*/}
                {/*<Button*/}
                {/*    title="LOG IN"*/}
                {/*    onPress={() => Alert.alert("Welcome!")}*/}
                {/*/>*/}

                {/*EXERCISE 1E*/}
                {/*<TouchableOpacity onPress={() => Alert.alert("Welcome!")}>*/}
                {/*  <Text>LOG IN</Text>*/}
                {/*</TouchableOpacity>*/}

                {/*EXERCISE 1F & 1G*/}
                <TouchableOpacity
                    onPress={() => ToastAndroid.show(`Welcome ${usertype} ${username}!`, ToastAndroid.SHORT)}>
                    <Text>LOG IN</Text>
                </TouchableOpacity>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MyApp;

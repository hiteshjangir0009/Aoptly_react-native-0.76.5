import { Dimensions, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Image, Keyboard, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Images } from '../../Utils/Images'
import { Colors } from '../../Utils/Colors'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { Font_poppins } from '../../Utils/fonts'
import Custom_button from '../../Constants/Buttons'
import FastImage from 'react-native-fast-image'
import { API_url, postApi } from '../../Utils/API_config'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({ navigation }) => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const API_req = async () => {
        console.log("API_req");

        const formdata = new FormData();
        formdata.append("email", Email);
        formdata.append("password", Password);

        try {
            const response = await postApi(API_url.Login, formdata)
            console.log("register_response ==>>", response);


            if (response.success == false) {
                if (response.message == 'user not exist') {
                    Alert.alert('Not found', 'Please register first')
                } else {
                    Alert.alert('Error', response.message)
                }
            } else {
                Alert.alert('Success 👍', response.message)
                setTimeout(() => {
                    AsyncStorage.setItem('token', response.data.Access_token)
                    navigation.navigate('splash')
                }, 600)
            }



        } catch (error) {
            console.log("register_error ==>>", error);
        }

    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: Colors.Primary_color }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                bounces={false}
            >
                {/* image container - reduced height when keyboard is visible */}
                <View style={[
                    styles.img_container,
                    keyboardVisible && { height: Dimensions.get('window').height / 5 }
                ]}>
                    <FastImage
                        style={[
                            styles.image,
                            keyboardVisible && { height: Dimensions.get('window').height / 5 }
                        ]}
                        source={Images.Login}
                        resizeMode="cover"
                    />
                </View>

                <View style={styles.container}>
                    <Text style={styles.header_text}>
                        Login
                    </Text>

                    {/* email */}
                    <View style={{ marginBottom: 20, marginTop: 30 }}>
                        <Text style={styles.text}>
                            Email
                        </Text>
                        <View style={{ elevation: 5 }}>
                            <TextInput
                                style={styles.input_text}
                                placeholder='Enter your email'
                                returnKeyType='next' // Show "Done" on keyboard

                                placeholderTextColor={Colors.Text_grey_color}
                                value={Email}
                                onChangeText={(text) => setEmail(text)}
                            />
                        </View>
                    </View>

                    {/* password */}
                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.text}>
                            Password
                        </Text>
                        <View style={{ elevation: 5 }}>
                            <TextInput
                                style={styles.input_text}
                                placeholder='Enter your password'
                                returnKeyType='done' // Show "Done" on keyboard
                                onSubmitEditing={() => API_req()}
                                placeholderTextColor={Colors.Text_grey_color}
                                value={Password}
                                onChangeText={(text) => setPassword(text)}
                            />
                        </View>
                    </View>

                    <View>
                        <Custom_button text={"Login"} onPress={() => API_req()} />
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('register')}
                        style={{
                            marginVertical: 20
                        }}
                    >
                        <Text style={{
                            color: Colors.orange,
                            fontSize: responsiveFontSize(2),
                            fontFamily: Font_poppins.Medium_font,
                            textAlign: 'center'
                        }}>
                            --------Register--------
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Primary_color,
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    header_text: {
        color: Colors.Text_base_color,
        fontSize: responsiveFontSize(5),
        fontFamily: Font_poppins.SemiBold_font,
        textAlign: 'center',
        marginTop: 20
    },
    text: {
        color: Colors.Text_base_color,
        fontSize: responsiveFontSize(2),
        fontFamily: Font_poppins.SemiBold_font
    },
    input_text: {
        color: Colors.Text_base_color,
        fontSize: responsiveFontSize(1.9),
        fontFamily: Font_poppins.Regular_font,
        backgroundColor: '#FFE5E5',
        padding: 10,
        elevation: 5,
        borderRadius: 10,
    },
    img_container: {
        backgroundColor: Colors.Primary_color,
        height: Dimensions.get('window').height / 2.5,
    },
    image: {
        width: "100%",
        height: Dimensions.get('window').height / 2.5,
    }
})

export default Login
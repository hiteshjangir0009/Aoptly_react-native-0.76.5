import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Custom_Header from '../Constants/Header';
import { Colors } from '../Utils/Colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Font_poppins } from '../Utils/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

const More = ({ navigation }) => {

    // Logout function
    const logOut = async () => {
        await AsyncStorage.removeItem('token');
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'splash' }],
            })
        );
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Header */}
            <Custom_Header Title={'More'} />

            {/* Container */}
            <View style={styles.container}>

                <TouchableOpacity
                    onPress={()=>logOut()}  // ✅ Corrected function reference
                    style={styles.container_button}
                >
                    <Text style={styles.container_text}>
                        Log out
                    </Text>
                </TouchableOpacity>


            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    container_button: {
        backgroundColor: Colors.orange,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 10,
    },
    container_text: {
        color: Colors.Text_white_color,
        fontSize: responsiveFontSize(2),
        fontFamily: Font_poppins.Medium_font,
    },
});

export default More;

import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Custom_Header from '../Constants/Header'
import { API_url, getApi } from '../Utils/API_config'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import { Colors } from '../Utils/Colors'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { Font_poppins } from '../Utils/fonts'
import Custom_button from '../Constants/Buttons'

const Display = ({ navigation }) => {

    const [Data, setData] = useState([])

    const route = useRoute()
    const { Id } = route.params

    const token = useSelector((state) => state.Token_Reducer)
    // console.log(token);

    useEffect(() => {
        API_req()
    }, [])

    const API_req = async () => {
        try {
            const response = await getApi(API_url.Get_pets, token)
            console.log(response);
            setData(response.data)


        } catch (error) {
            console.log("Home_error ==>>", error)

        }
    }

    const selected = Data.find((item) => item._id == Id)

    console.log(selected);


    return (
        <SafeAreaView>

            {/* header */}
            <View>
                <Custom_Header Title={'Pet Details'} />
            </View>

            {/* container */}
            <View>

                {/* img */}
                <View style={styles.img_container}>
                    <FastImage
                        style={{
                            width: '100%',
                            height: 400
                        }}
                        source={{ uri: selected?.avatar }}
                    />
                </View>

                {/* name */}
                <View style={styles.name_container}>
                    <Text style={styles.name_text}>
                        {selected?.name} ({selected?.breed})
                    </Text>
                </View>

                {/* age */}
                <View style={styles.age_coontainer}>

                    <Text style={styles.age_text}>
                        Age --{'>'} <Text style={{ color: Colors.orange }}>{selected?.age}</Text>
                    </Text>
                </View>

                {/* request */}
                <View style={styles.button_container}>
                    <Custom_button
                        onPress={() => {
                            navigation.navigate('request', { Id: selected?._id, petName: selected?.name })
                        }}
                        text={`Adopt ${selected?.name}`} />
                </View>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30
    },

    img_container: {
        borderRadius: 30,
        marginHorizontal: 10,
        overflow: 'hidden',
        backgroundColor: 'red'
    },

    name_container: {
        marginHorizontal: 10,
        marginVertical: 15
    },
    name_text: {
        color: Colors.Text_base_color,
        fontSize: responsiveFontSize(3),
        fontFamily: Font_poppins.Medium_font
    },

    age_coontainer: {
        marginHorizontal: 10
    },
    age_text: {
        color: Colors.Text_base_color,
        fontSize: responsiveFontSize(2),
        fontFamily: Font_poppins.Medium_font
    },
    button_container: {
        marginHorizontal: 10,
        marginVertical: 50
    }
})

export default Display
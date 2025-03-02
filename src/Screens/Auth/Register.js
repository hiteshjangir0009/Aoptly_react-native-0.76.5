import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../Utils/Colors'
import { Font_poppins } from '../../Utils/fonts'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import Custom_button from '../../Constants/Buttons'
import { API_url, postApi } from '../../Utils/API_config'

const Register = ({navigation}) => {

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');


  const API_req = async () => {
    console.log("API_req");

    const formdata = new FormData();
    formdata.append("name", Name);
    formdata.append("email", Email);
    formdata.append("password", Password);

    try {
      const response = await postApi(API_url.Register, formdata)
      console.log("register_response ==>>", response);

      if (response.success == false) {
        Alert.alert('Error', response.message)
      } else {
        Alert.alert('Success 👍', response.message)
        setTimeout(() => {
          navigation.navigate('login')
        }, 600)
      }



    } catch (error) {
      console.log("register_error ==>>", error);
    }

  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>

        <View style={styles.header_container}>
          <Text style={styles.header_text}>
            Register
          </Text>
        </View>

        {/* email */}
        <View style={{ marginBottom: 20, marginTop: 30 }}>
          <Text style={styles.text}>
            Name
          </Text>
          <View style={{ elevation: 5 }}>
            <TextInput
              style={styles.input_text}
              placeholder='Enter your email'
              placeholderTextColor={Colors.Text_grey_color}
              value={Name}
              onChangeText={(text) => setName(text)}
            />
          </View>
        </View>

        {/* email */}
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.text}>
            Email
          </Text>
          <View style={{ elevation: 5 }}>
            <TextInput
              style={styles.input_text}
              placeholder='Enter your email'
              placeholderTextColor={Colors.Text_grey_color}
              value={Email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>

        {/* email */}
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.text}>
            Password
          </Text>
          <View style={{ elevation: 5 }}>
            <TextInput
              style={styles.input_text}
              placeholder='Enter your email'
              placeholderTextColor={Colors.Text_grey_color}
              value={Password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>


        {/* button */}
        <View style={{ marginTop: 20 }}>
          <Custom_button text={"Register"} onPress={() => API_req()} />
        </View>
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  header_container: {
    // marginBottom: 20,
    marginTop: 30
  },
  header_text: {
    color: Colors.Text_base_color,
    fontSize: responsiveFontSize(5),
    fontFamily: Font_poppins.SemiBold_font,
    textAlign: 'center'
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
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.Primary_color
  }
})

export default Register
import { Alert, KeyboardAvoidingView, Linking, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Custom_Header from '../Constants/Header'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { Font_poppins } from '../Utils/fonts'
import { Colors } from '../Utils/Colors'
import Custom_button from '../Constants/Buttons'
import { API_url, postApi } from '../Utils/API_config'
import { useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'

const Adoption_req = () => {
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  const [Phone, setPhone] = useState('');
  const [Name, setName] = useState('');
  const [Address, setAddress] = useState('');

  const route = useRoute()

  const { Id, petName } = route.params
  // console.log("test ==>>",Id);
  // console.log("test ==>>",petName);


  const token = useSelector((state) => state.Token_Reducer)


  const API_req = async () => {

    const formdata = new FormData();
    formdata.append("parent_name", Name);
    formdata.append("parent_email", Email);
    formdata.append("parent_phone", Phone);
    formdata.append("parent_address", Address);
    formdata.append("message", Message);
    formdata.append("pet_id", Id);

    try {
      const response = await postApi(API_url.Request_form, formdata, token)
      console.log("response ==>>", response);

      if (response.success == false) {
        Alert.alert('Error', response.message)
      } else {
        Alert.alert('Success 👍', response.message)
        setAddress('')
        setEmail('')
        setName('')
        setPhone('')
        setAddress('')
        setMessage('')
      }

    } catch (error) {
      Alert.alert('Error',"Something went wrong")

      console.log('adopt_req ==>>', error)
    }

  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <SafeAreaView style={{ flex: 1 }}>

        <ScrollView>


          {/* header */}
          <View>
            <Custom_Header Title={'Adoption Request'} />
          </View>

          <View style={styles.container}>

            {/* heading container */}
            <View style={styles.heading_container}>
              <Text style={styles.heading_text}> For <Text style={{ color: Colors.orange }}>{petName}</Text></Text>
            </View>

            {/* email */}
            <View style={{ marginTop: 10 }}>
              <Text style={styles.text}>
                Name
              </Text>
              <View style={{ elevation: 5 }}>
                <TextInput
                  style={styles.input_text}
                  placeholder='Enter your Name'
                  placeholderTextColor={Colors.Text_grey_color}
                  value={Name}
                  onChangeText={(text) => setName(text)}
                />
              </View>
            </View>

            {/* email */}
            <View style={{ marginTop: 10 }}>
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
            <View style={{ marginTop: 10 }}>
              <Text style={styles.text}>
                Phone no.
              </Text>
              <View style={{ elevation: 5 }}>
                <TextInput
                  style={styles.input_text}
                  keyboardType='phone-pad'
                  placeholder='Enter your subject'
                  placeholderTextColor={Colors.Text_grey_color}
                  value={Phone}
                  onChangeText={(text) => setPhone(text)}
                />
              </View>
            </View>

            {/* email */}
            <View style={{ marginTop: 10 }}>
              <Text style={styles.text}>
                Address
              </Text>
              <View style={{ elevation: 5 }}>
                <TextInput
                  numberOfLines={3}
                  multiline={true}
                  style={styles.input_text}
                  keyboardType='phone-pad'
                  placeholder='Enter your Address'
                  placeholderTextColor={Colors.Text_grey_color}
                  value={Address}
                  onChangeText={(text) => setAddress(text)}
                />
              </View>
            </View>

            {/* email */}
            <View style={{ marginTop: 10 }}>
              <Text style={styles.text}>
                Message
              </Text>
              <View style={{ elevation: 5 }}>
                <TextInput
                  numberOfLines={3}
                  multiline={true}
                  style={styles.input_text}
                  placeholder='Enter your feedback'
                  placeholderTextColor={Colors.Text_grey_color}
                  value={Message}
                  onChangeText={(text) => setMessage(text)}
                />
              </View>
            </View>

            {/* button */}
            <View style={{ marginTop: 50 }}>
              <Custom_button
                onPress={() => {
                  if (Email === "" || Phone === "" || Address === "" || Message === "" || Name === "") {
                    Alert.alert("Empty", "All fields are required");
                  }
                  else {
                    console.log("pressed");
                    API_req()
                  }
                }}
                text={'Send'} />
            </View>

          </View>
        </ScrollView>

      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  heading_container: {

  },
  heading_text: {
    color: Colors.Text_base_color,
    fontSize: responsiveFontSize(2.5),
    fontFamily: Font_poppins.SemiBold_font
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
    marginHorizontal: 10
  }
})

export default Adoption_req
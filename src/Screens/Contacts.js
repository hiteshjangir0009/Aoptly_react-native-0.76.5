import { Alert, Linking, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Custom_Header from '../Constants/Header'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { Font_poppins } from '../Utils/fonts'
import { Colors } from '../Utils/Colors'
import Custom_button from '../Constants/Buttons'

const Contacts = () => {
  const [Email, setEmail] = useState('');
  const [Subject, setSubject] = useState('');
  const [Feedback, setFeedback] = useState('');
  const [Name, setName] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* header */}
      <View>
        <Custom_Header Title={'Contact us'} />
      </View>

      <View style={styles.container}>


        {/* email */}
        <View style={{ marginTop: 20 }}>
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
        <View style={{ marginTop: 20 }}>
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
        <View style={{ marginTop: 20 }}>
          <Text style={styles.text}>
            Subject
          </Text>
          <View style={{ elevation: 5 }}>
            <TextInput
              style={styles.input_text}
              placeholder='Enter your subject'
              placeholderTextColor={Colors.Text_grey_color}
              value={Subject}
              onChangeText={(text) => setSubject(text)}
            />
          </View>
        </View>

        {/* email */}
        <View style={{ marginTop: 20 }}>
          <Text style={styles.text}>
            Feedback
          </Text>
          <View style={{ elevation: 5 }}>
            <TextInput
              style={styles.input_text}
              placeholder='Enter your feedback'
              placeholderTextColor={Colors.Text_grey_color}
              value={Feedback}
              onChangeText={(text) => setFeedback(text)}
            />
          </View>
        </View>

        {/* button */}
        <View style={{ marginTop: 50 }}>
          <Custom_button
            onPress={() => {
              if (Email === "" || Subject === "" || Feedback === "" || Name === "") {
                Alert.alert("Empty", "Fields are required");
              } else {
                console.log("pressed");
                Linking.openURL(`mailto:${Email}?subject=${encodeURIComponent(Subject)}&body=${encodeURIComponent(Feedback)}`)
                  .catch((err) => console.error("Error opening email:", err));
              }
            }}
            text={'Send'} />
        </View>

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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

export default Contacts
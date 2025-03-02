import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../Utils/Colors'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { Font_poppins } from '../../Utils/fonts'
import { CommonActions } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { Addtoken } from '../../Redux/Actions/Actions'



const Splash = ({navigation}) => {
const dispatch = useDispatch()

  useEffect(() => {
    CheckLogin()
  }, [])

const CheckLogin =async()=>{

  const token = await AsyncStorage.getItem('token')
  console.log('token==>>',token);

  if(token == null){
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'login' }],
      }),
    )}
    else{

      dispatch(Addtoken(token))
       setTimeout(() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'tab' }],
            }),
          )
        }, 2500
        )
    }
  
  
}

  return (
    <SafeAreaView style={styles.container}>

      <View>
        <Text style={styles.text}>Adoptly</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: 'center'
  },
  text: {
    textAlign: 'center',
    color: Colors.Text_base_color,
    fontSize: responsiveFontSize(5),
    fontFamily: Font_poppins.Medium_font
  }

})

export default Splash

import { Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../Utils/Colors'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { Font_poppins } from '../Utils/fonts'
import FastImage from 'react-native-fast-image'
import { Images } from '../Utils/Images'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import { API_url, getApi } from '../Utils/API_config'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Custom_Header from '../Constants/Header'
import { Loader } from '../Utils/Loader'
import { CommonActions } from '@react-navigation/native'

const Home = ({ navigation }) => {
  const [Data, setData] = useState([])
  const [selector, setSelector] = useState('')
  const [Loading, setLoading] = useState(true)

  const category = ['Dog', 'Cat', 'Birds']

  const token = useSelector((state) => state.Token_Reducer)

  useEffect(() => {
    API_req({ item: 'Dog' })
  }, [])

  const API_req = async ({ item }) => {

    setSelector(item)
    const select = item.toLowerCase()

    const url = `${API_url.Get_pets}?query=${select}`

    try {
      const response = await getApi(url, token)
      console.log(response);

      if (response.success == true) {
        setData(response.data)
        setTimeout(() => {
          setLoading(false)
        }, 600)
      }

      if (response.success == false) {

        AsyncStorage.removeItem('token')
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'splash' }],
          }),
        )
      }

    } catch (error) {
      console.log("Home_error ==>>", error)

    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* header */}
      <View >
        <Custom_Header Title={'Adoptly'} />
      </View>

      {
        Loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Loader />
          </View>
        ) : (
          <ScrollView>

            {/* selector */}
            <View >
              <FlatList
                horizontal
                showsVerticalScrollIndicator={false}
                data={category}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setLoading(true)
                      API_req({ item: item })
                    }}
                    style={[styles.selector_container,
                    {
                      padding: selector == item ? 15 : 5,
                      borderRadius: selector == item ? 30 : 20
                    }
                    ]}
                  >
                    <Text style={styles.selector_text}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>


            {/* banner */}
            <View style={styles.banner_container}>
              <FastImage
                style={styles.banner_img}
                source={Images.Banner}
              />
            </View>

            {/* container */}
            <View style={styles.container}>

              {/* heading */}
              <Text style={styles.heading_text}>
                Listed Pets
              </Text>

              {/* pets list */}
              <View>
                <FlatList
                  scrollEnabled={false}
                  numColumns={2}
                  columnWrapperStyle={styles.display_column}
                  data={Data}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('display', { Id: item._id })
                      }}
                      style={styles.display_container}>
                      <FastImage
                        style={styles.display_img}
                        source={{ uri: item.avatar }}
                      />
                      <Text
                        numberOfLines={1}
                        style={styles.display_text}>
                        {item.name}
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('request', { Id: item._id, petName: item.name })}
                        style={styles.display_button_container}
                      >
                        <Text style={styles.display_button_text}>
                          Adopt
                        </Text>
                      </TouchableOpacity>
                    </TouchableOpacity>
                  )}
                  ListFooterComponent={<View style={{ height: responsiveScreenHeight(10) }} />}

                />
              </View>
            </View>
          </ScrollView>
        )
      }


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header_container: {
    padding: 10,
    // backgroundColor: 'red'
  },
  header_text: {
    color: Colors.Text_base_color,
    fontSize: responsiveFontSize(3),
    fontFamily: Font_poppins.SemiBold_font
  },

  selector_container: {
    paddingHorizontal: 20,
    backgroundColor: Colors.orange,
    marginHorizontal: 10,
    marginVertical: 15,
    alignSelf: 'center'
  },
  selector_text: {
    color: Colors.Text_white_color,
    fontSize: responsiveFontSize(2),
    fontFamily: Font_poppins.Medium_font
  },

  banner_container: {
    marginVertical: 7,
    marginHorizontal: 10,
    borderRadius: 30,
    // borderWidth: 1,
    elevation: 10,
    overflow: 'hidden',
  },
  banner_img: {
    width: "100%",
    height: Dimensions.get('screen').height / 4,
    objectFit: 'cover'
  },

  container: {
    marginTop: 25,
    // marginHorizontal: 10,
    // backgroundColor:'#fff',
    flex: 1
  },

  heading_text: {
    marginHorizontal: 10,

    fontSize: responsiveFontSize(2.5),
    fontFamily: Font_poppins.SemiBold_font,
    color: Colors.Text_base_color
  },

  display_container: {
    marginHorizontal: 10,
    backgroundColor: Colors.Primary_color,
    marginVertical: 5,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 7
  },
  display_img: {
    width: responsiveScreenWidth(45),
    height: responsiveScreenHeight(20)
  },
  display_text: {
    color: Colors.Text_base_color,
    fontFamily: Font_poppins.Medium_font,
    fontSize: responsiveFontSize(1.5),
    paddingVertical: 10,
    paddingHorizontal: 5
  },

  display_button_container: {
    backgroundColor: Colors.orange,
    padding: 5,
    paddingVertical: 8
  },
  display_button_text: {
    color: Colors.Text_white_color,
    fontFamily: Font_poppins.Medium_font,
    fontSize: responsiveFontSize(2),
    alignSelf: 'center',


  },
  display_column: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 10
  }
})


export default Home
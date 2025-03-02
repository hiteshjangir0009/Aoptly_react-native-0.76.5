import { FlatList, Image, ScrollView, ScrollViewComponent, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Custom_Header from '../Constants/Header'
import { Colors } from '../Utils/Colors'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { Font_poppins } from '../Utils/fonts'
import FastImage from 'react-native-fast-image'
import { Images } from '../Utils/Images'

const About = () => {

  const pet = [
    { pet: Images.dog1 },
    { pet: Images.dog2 },
    { pet: Images.dog3 },
    { pet: Images.dog4 },
    { pet: Images.dog5 },
    { pet: Images.dog6 },
  ]


  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* Header */}
      <View>
        <Custom_Header Title={'About'} />
      </View>
      <ScrollView>


        {/* Container */}
        <View>

          {/* about text */}
          <View style={styles.about_container}>
            <Text style={styles.about_text}>
              At Adoptly, we believe that every pet deserves a loving home. Our mission is to connect potential pet owners with wondenul animals in need or a torever nome. vve are dedicated to promoting pet adopton and providing al platform where you can tind your perfect companion.
            </Text>
          </View>

          {/* services */}
          <View style={[styles.ourservice_container, {}]}>
            <Text style={styles.heading_text}>Our services</Text>

            <Text style={[styles.about_text, { backgroundColor: '#FEF3E2', padding: 10, borderRadius: 10, marginBottom: 10 }]}>
              {
                <Text style={{ fontFamily: Font_poppins.SemiBold_font }}>
                  pet adootion: {' '}
                </Text>
              }
              Browser though our extensive list of pets available for adoption, including dog, cats and birds
            </Text>
            <Text style={[styles.about_text, { backgroundColor: '#FEF3E2', padding: 10, borderRadius: 10, marginBottom: 10 }]}>
              {
                <Text style={{ fontFamily: Font_poppins.SemiBold_font }}>
                  Adoption Process Guidance: {' '}
                </Text>
              }
              We provide detailed information on how to adopt a pet, including the necessary steps and requirements
            </Text>
            <Text style={[styles.about_text, { backgroundColor: '#FEF3E2', padding: 10, borderRadius: 10, marginBottom: 10 }]}>
              {
                <Text style={{ fontFamily: Font_poppins.SemiBold_font }}>
                  Community support: {' '}
                </Text>
              }
              Join our communty of pet lovers and share your experience, tips and stories
            </Text>
            <Text style={[styles.about_text, { backgroundColor: '#FEF3E2', padding: 10, borderRadius: 10, marginBottom: 10 }]}>
              {
                <Text style={{ fontFamily: Font_poppins.SemiBold_font }}>
                  Resources: {' '}
                </Text>
              }
              Access valuable resources on pet care, training, and heaith to ensure a happy life for your new campanion
            </Text>

          </View>

          {/* pets testimonials */}
          <View style={styles.test_container}>
            <Text style={styles.test_text}>
              Our happy pets
            </Text>

            <FlatList
            scrollEnabled={false}
              data={pet}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginVertical: 10,
                borderRadius: 10,
                overflow: 'hidden'
              }}
              renderItem={({ item }) => (
                <View style={styles.img_container}>
                  <FastImage
                    style={styles.test_img}
                    source={item.pet} />
                </View>
              )}
              ListFooterComponent={<View style={{ height: responsiveScreenHeight(10) }} />}

            />


          </View>

        </View>
      </ScrollView>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  about_container: {
    marginHorizontal: 10
  },
  about_text: {
    color: Colors.Text_base_color,
    fontSize: responsiveFontSize(1.8),
    fontFamily: Font_poppins.Regular_font

  },

  ourservice_container: {
    marginHorizontal: 10,
    marginVertical: 20

  },
  heading_text: {
    color: Colors.Text_base_color,
    fontSize: responsiveFontSize(2.5),
    fontFamily: Font_poppins.Medium_font
  },

  test_container: {
    marginHorizontal: 10
  },
  test_text: {
    color: Colors.Text_base_color,
    fontSize: responsiveFontSize(2.5),
    fontFamily: Font_poppins.Medium_font
  },
  test_img: {
    width: responsiveScreenWidth(45),
    height: responsiveScreenHeight(20),
    borderRadius: 10,

  },
  img_container: {
    borderRadius: 10,
    overflow: 'hidden'
  }
})

export default About
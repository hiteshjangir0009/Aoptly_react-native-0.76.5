import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { Font_poppins } from '../Utils/fonts'
import { Colors } from '../Utils/Colors'

const Custom_Header = ({Title}) => {
    return (
        <View style={styles.header_container}>
            <Text style={styles.header_text}>
                {Title}
            </Text>
        </View>
    )
}

export default Custom_Header

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
})
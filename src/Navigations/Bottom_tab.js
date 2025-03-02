import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import About from '../Screens/About'
import Contacts from '../Screens/Contacts'
import { responsiveFontSize, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { Font_poppins } from '../Utils/fonts'
import { Images } from '../Utils/Images'
import { Colors } from '../Utils/Colors'
import More from '../Screens/More'


const tab = createBottomTabNavigator()
const Bottom_tab = () => {
    return (
        <tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: Colors.Primary_color,
                    margin: 10,
                    borderRadius: 20,
                    height:60
                }
            }}
        >
            <tab.Screen
                options={{
                    tabBarButton: (props) => (
                        <TouchableWithoutFeedback {...props}>
                            <View style={props.style}>{props.children}</View>
                        </TouchableWithoutFeedback>
                    ),
                    tabBarIcon: ({ focused }) => (

                        <View style={styles.image_view}>

                            <Image
                                style={
                                    [
                                        styles.image_style,
                                        {
                                            tintColor: focused ? Colors.Tab_button_Active_color : Colors.Tab_button_Inactive_color
                                        }
                                    ]
                                }
                                source={Images.Home_icon}
                            />
                            <Text
                                style={[styles.text,
                                {
                                    color: focused ? Colors.Tab_button_Active_color : Colors.Tab_button_Inactive_color
                                }
                                ]}
                            >
                                Home
                            </Text>
                        </View>



                    )
                }}

                name='home' component={Home} />
            <tab.Screen
                options={{
                    tabBarButton: (props) => (
                        <TouchableWithoutFeedback {...props}>
                            <View style={props.style}>{props.children}</View>
                        </TouchableWithoutFeedback>
                    ),
                    tabBarIcon: ({ focused }) => (

                        <View style={styles.image_view}>

                            <Image
                                style={
                                    [
                                        styles.image_style,
                                        {
                                            tintColor: focused ? Colors.Tab_button_Active_color : Colors.Tab_button_Inactive_color
                                        }
                                    ]
                                }
                                source={Images.About_icon}
                            />
                            <Text
                                style={[styles.text,
                                {
                                    color: focused ? Colors.Tab_button_Active_color : Colors.Tab_button_Inactive_color
                                }
                                ]}
                            >
                                About
                            </Text>
                        </View>



                    )
                }}

                name='about' component={About} />
            <tab.Screen
                options={{
                    tabBarButton: (props) => (
                        <TouchableWithoutFeedback {...props}>
                            <View style={props.style}>{props.children}</View>
                        </TouchableWithoutFeedback>
                    ),
                    tabBarIcon: ({ focused }) => (

                        <View style={styles.image_view}>

                            <Image
                                style={
                                    [
                                        styles.image_style,
                                        {
                                            tintColor: focused ? Colors.Tab_button_Active_color : Colors.Tab_button_Inactive_color
                                        }
                                    ]
                                }
                                source={Images.Contact_icon}
                            />
                            <Text
                                style={[styles.text,
                                {
                                    color: focused ? Colors.Tab_button_Active_color : Colors.Tab_button_Inactive_color
                                }
                                ]}
                            >
                                Contacts
                            </Text>
                        </View>



                    )
                }}

                name='contact' component={Contacts} />
            <tab.Screen
                options={{
                    tabBarButton: (props) => (
                        <TouchableWithoutFeedback {...props}>
                            <View style={props.style}>{props.children}</View>
                        </TouchableWithoutFeedback>
                    ),
                    tabBarIcon: ({ focused }) => (

                        <View style={styles.image_view}>

                            <Image
                                style={
                                    [
                                        styles.image_style,
                                        {
                                            tintColor: focused ? Colors.Tab_button_Active_color : Colors.Tab_button_Inactive_color
                                        }
                                    ]
                                }
                                source={Images.Menu_icon}
                            />
                            <Text
                                style={[styles.text,
                                {
                                    color: focused ? Colors.Tab_button_Active_color : Colors.Tab_button_Inactive_color
                                }
                                ]}
                            >
                                More
                            </Text>
                        </View>



                    )
                }}

                name='More' component={More} />
        </tab.Navigator>
    )
}

const styles = StyleSheet.create({
    image_style: {
        width: 22,
        height: 22,
        alignSelf: 'center',
        // backgroundColor: 'red'
    },
    image_view: {
        // height: ,
        marginTop:20,
        alignSelf: 'center',
        width: responsiveScreenWidth(16),
        // backgroundColor: 'yellow'
    },
    text: {
        marginTop:2,
        textAlign: 'center',
        fontSize: responsiveFontSize(1.2),
        fontFamily: Font_poppins.SemiBold_font,
    }
});


export default Bottom_tab
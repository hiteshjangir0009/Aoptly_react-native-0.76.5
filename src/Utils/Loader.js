import { Dimensions, Image, View } from "react-native"
import FastImage from "react-native-fast-image"
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions"
import { Images } from "./Images"

const {height,width} =Dimensions.get('screen')
export const Loader = ()=>{
    return(
        <View 
        style={{
            // flex:1,
            justifyContent:'center',
            alignItems:'center',
            // backgroundColor:'#fff'
        }}>
            <FastImage
            style={{
                height:150,
                width:150,
                objectFit:'scale-down',
                // padding:2
            }}
            source={Images.Loader}
            />
        </View>
    )
}
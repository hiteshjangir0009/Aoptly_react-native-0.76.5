import { Text, TouchableOpacity } from "react-native"
import { responsiveFontSize } from "react-native-responsive-dimensions"
import { Colors } from "../Utils/Colors"
import { Font_poppins } from "../Utils/fonts"

const Custom_button = ({ text, onPress, button_style, text_style }) => (
    <TouchableOpacity
        style={
            [
                {
                    backgroundColor: Colors.orange,
                    borderRadius: 10,
                    padding: 10
                }
                ,button_style
            ]
        }
        onPress={onPress}>

        <Text style={[{
            color: Colors.Text_white_color,
            fontSize: responsiveFontSize(2),
            fontFamily: Font_poppins.SemiBold_font,
            textAlign: 'center'
        }, { text_style }]}>
            {text}
        </Text>
    </TouchableOpacity>
)
export default Custom_button
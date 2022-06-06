import {Platform, StyleSheet, Dimensions} from "react-native";
// Screen Styles
const {width, height} = Dimensions.get("window");

import {Fonts, Metrics, Colors} from "../../Themes/index";

const styles = StyleSheet.create({
    innerWrapper:{
        backgroundColor: Colors.background_now
    },
    header: {
        backgroundColor: Colors.branding_color,
        borderBottomWidth: 0,
        elevation: 0
    },
    button_style: {
        marginLeft: Fonts.moderateScale(9),
    },
    logo: {
        //flex: 1,
        //width: null,
        textAlign: 'left',
        color: Colors.snow,
        marginLeft: Fonts.moderateScale(20),
        marginTop: Fonts.moderateScale(11),
        fontSize: Fonts.moderateScale(19)
    },
    container: {
        //paddingLeft: Fonts.moderateScale(15),
        //paddingRight: Fonts.moderateScale(15),
        backgroundColor: Colors.background_now,

    },
    center_screen:{
        marginTop:  Metrics.HEIGHT * 0.28,
        width: Metrics.WIDTH,
        //height: Metrics.HEIGHT * 0.60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    top_gap:{
        width: Metrics.WIDTH,
        height: Metrics.HEIGHT * 0.03,
    },
    thangs_text:{
        fontSize: Fonts.moderateScale(16)
    }
});
export default styles;

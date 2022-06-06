import {Platform, StyleSheet, Dimensions} from "react-native";
// Screen Styles
const {width, height} = Dimensions.get("window");

import {Fonts, Metrics, Colors} from "../../Themes/";

const styles = StyleSheet.create({
    page_background: {
        height: '100%',
        width: '100%'
    },
    header_style: {
        marginTop: 12,
        backgroundColor: Colors.transparent,
        borderBottomWidth: 0,
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
    },
    back_button: {
        color: Colors.branding_color,
        fontWeight: '600',
        fontSize: Fonts.moderateScale(16)
    },
    top_select: {
        marginTop: Fonts.moderateScale(25),
        marginLeft: Fonts.moderateScale(10),
        marginRight: Fonts.moderateScale(10),
        alignItems: 'flex-start'
    },

    rtl_image_flip: {
        transform: [{rotateY: '180deg'}],
    },
    title_text: {
        fontSize: Fonts.moderateScale(24),
        marginTop: Metrics.HEIGHT * 0.01,
        fontWeight: '500',
    },
    style_null: {},


    screenBg: {
        backgroundColor: Colors.color_two
    },

    logostyle: {
        alignSelf: "center",
        width: Metrics.WIDTH * 0.28,
        height: Metrics.WIDTH * 0.28,
        backgroundColor: "transparent",
        resizeMode: "contain"
    },
    backArrow: {
        marginTop: 10,
        width: 30,
        alignItems: "center"
    },
    header: {
        backgroundColor: "transparent",
        borderBottomWidth: 0,

        elevation: 0
    },
    left: {
        flex: 0.5,
        backgroundColor: "transparent"
    },

    body: {
        flex: 2,
        alignItems: "center",
        backgroundColor: "transparent"
    },

    right: {
        flex: 0.5
    },
    view2: {
        marginTop: Metrics.HEIGHT * 0.07,
        width: Metrics.WIDTH * 0.92,
        marginLeft: Metrics.WIDTH * 0.04,
        marginRight: Metrics.WIDTH * 0.04,
        //height: Metrics.HEIGHT * 0.20,
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "transparent"
    },
    itememail: {
        alignSelf: "center",
        //width: Metrics.WIDTH * 0.8,
        height: Metrics.HEIGHT * 0.08
    },
    inputemail: {
        fontFamily: Fonts.type.SFUIDisplayRegular,
        color: Colors.hintblue
    },

    iconitem: {
        color: Colors.hintblue
    },

    buttondialogsignup: {
        backgroundColor: Colors.branding_color,
        alignSelf: "center",
        marginTop: Metrics.HEIGHT * 0.03,
        borderRadius: 8,
        width: Metrics.WIDTH * 0.50,
        height: Metrics.HEIGHT * 0.07,
        justifyContent: "center"
    },
    buttonsignin: {
        alignSelf: "center",
        fontSize: Fonts.moderateScale(16),
        fontWeight: '600',
        fontFamily: Fonts.type.SFUIDisplaySemibold,
        color: "white"
    },

    view3: {
        width: Metrics.WIDTH,
        justifyContent: "center",
        backgroundColor: "transparent",
        flexDirection: "row",
        marginTop: Metrics.HEIGHT * 0.05,
        marginBottom: Metrics.HEIGHT * 0.05
    },

    buttontext: {
        alignSelf: "center",
        fontFamily: Fonts.type.SFUIDisplayRegular,
        color: Colors.darktext,
        fontSize: Fonts.moderateScale(16)
    },
    buttontext2: {
        alignSelf: "center",
        fontFamily: Fonts.type.SFUIDisplayRegular,
        color: Colors.branding_color,
        fontSize: Fonts.moderateScale(16)
    },

    signInTxtBg: {
        paddingLeft: Metrics.WIDTH * 0.01
    }
});
export default styles;

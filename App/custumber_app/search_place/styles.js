import {Platform, StyleSheet, Dimensions} from 'react-native';
import {Fonts, Metrics, Colors, Images} from "../../Themes/index";

const styles = StyleSheet.create({

    container: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
        backgroundColor: Colors.snow
    },

    header_style: {
        backgroundColor: Colors.branding_color,
    },
    button_style: {
        marginLeft: Fonts.moderateScale(9),
        //backgroundColor: 'red'
    },
    logo: {
        //flex: 1,
        //width: null,
        color: Colors.snow,
        fontWeight: '500',
        // marginTop: Fonts.moderateScale(11),
        fontSize: Fonts.moderateScale(19)
    },
    search_box: {
        backgroundColor: Colors.branding_color,
        //marginLeft: Fonts.moderateScale(16),
        //marginRight: Fonts.moderateScale(10),
        //borderBottomWidth: 1.5,
        //borderBottomColor: Colors.snow
    },
    search_box_c:{
        width: Metrics.WIDTH * 0.65,
        color : Colors.snow,
        backgroundColor: Colors.branding_color,
        marginLeft: Fonts.moderateScale(16),
        marginRight: Fonts.moderateScale(10),
        borderBottomWidth: 1.5,
        borderBottomColor: Colors.snow
    },
    search_style: {
        width: 20,
        marginRight: Fonts.moderateScale(15),
    },

    left: {
        flex: 0.5,
        backgroundColor: Colors.transparent,
    },

    backArrow: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.transparent
    },
    address_text:{
        fontSize: Fonts.moderateScale(15),
        fontWeight: '400',
        fontFamily: Fonts.type.base
    },

    editInfoText: {
        color: Colors.snow,
        fontSize: Fonts.moderateScale(16),
        fontWeight: '600',
        fontFamily: Fonts.type.helveticaNeueLight,
    }
});

export default styles;

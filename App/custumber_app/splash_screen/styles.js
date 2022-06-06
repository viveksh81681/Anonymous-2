import {Platform, StyleSheet, Dimensions} from 'react-native';
import {Fonts, Metrics, Colors} from '../../Themes/';

const styles = StyleSheet.create({
    page_background: {
        height: '100%',
        width: '100%'
    },
    header_style: {
        backgroundColor: Colors.transparent,
        borderBottomWidth: 0,
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
    },
    editInfoView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: (Metrics.HEIGHT * 0.20),
    },
    title_text: {
        fontSize: Fonts.moderateScale(24),
        marginTop: Fonts.moderateScale(22),
        fontWeight: '500',
    },
    body_text: {
        fontSize: Fonts.moderateScale(13),
        marginTop: Fonts.moderateScale(22),
        fontWeight: '400',
        color: Colors.darktext,
        textAlign: 'center',
        width: '97%',
        lineHeight: 22,
    },
    login_button: {
        width: Fonts.moderateScale(230),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Fonts.moderateScale(22),
        alignSelf: 'center',
        backgroundColor: Colors.branding_color
       // marginLeft: (Metrics.WIDTH * 0.30),
    },
    language_button: {
        width: Fonts.moderateScale(240),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Fonts.moderateScale(22),
        alignSelf: 'center',
        //backgroundColor: Colors.branding_color
        // marginLeft: (Metrics.WIDTH * 0.30),
    },
    login_text: {
        color: Colors.snow,
        fontSize: Fonts.moderateScale(15),
        fontWeight: '500',
    },
    language_text: {
        color: Colors.branding_color,
        fontSize: Fonts.moderateScale(15),
        fontWeight: '500',
    },


    form_back_icon: {
        fontSize: Fonts.moderateScale(27)
    },
    form: {
        width: (Metrics.WIDTH * 0.95),
        marginTop: (Metrics.HEIGHT * 0.02)
    },
    form_inner: {
        marginTop: (Metrics.HEIGHT * 0.02),
        marginLeft: (Metrics.WIDTH * 0.04),
        fontWeight: '600',
        color: Colors.snow
    },
    form_inner_bottom: {
        marginTop: (Metrics.HEIGHT * 0.02),
        marginLeft: (Metrics.WIDTH * 0.04),
        fontSize: Fonts.moderateScale(16),
        color: Colors.snow
    },
    editInfoMainView: {
        width: Metrics.WIDTH
    },
    editDivider: {
        height: Metrics.HEIGHT * 0.001,
        backgroundColor: '#e1e1e1'
    },
    editInfoText: {
        color: Colors.snow,
        fontSize: Fonts.moderateScale(16),
        fontWeight: '700',
        fontFamily: Fonts.type.helveticaNeueLight,
    },
    or_text: {
        textAlign: 'center',
        marginTop: (Metrics.HEIGHT * 0.02),
        fontSize: Fonts.moderateScale(16),
        fontWeight: '600',
        color: Colors.snow
    },
    image_size: {
        height: Fonts.moderateScale(27),
        width: Fonts.moderateScale(27)
    },
    icon_bottom: {
        marginLeft: (Metrics.WIDTH * 0.01),
        marginTop: (Metrics.HEIGHT * 0.01),
        width: (Metrics.WIDTH * 0.04),
        borderBottomWidth: 3,
        borderRadius: 10,
        borderColor: Colors.text_border_color,
        shadowOffset: {width: 1, height: 1,},
        shadowColor: Colors.text_border_color,
        shadowOpacity: 0.5,
    },
    icon_bottom_border_less: {
        marginLeft: (Metrics.WIDTH * 0.01),
        marginTop: (Metrics.HEIGHT * 0.01),
        width: (Metrics.WIDTH * 0.04),
        height: (Metrics.HEIGHT * 0.005),
    },
    card_size: {
        height: (Metrics.HEIGHT * 0.25),
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    card_middel_width: {
        width: Metrics.WIDTH * 0.10
    },
    card_top_margin: {
        marginTop: Fonts.moderateScale(28),
        marginLeft: Fonts.moderateScale(10),
        marginRight: Fonts.moderateScale(10),
    },
    card_image_style: {
        resizeMode: 'stretch',
    },
    container_style: {},
    top_select: {
        marginTop: Fonts.moderateScale(25),
        marginLeft: Fonts.moderateScale(10),
        marginRight: Fonts.moderateScale(10),
        alignItems: 'flex-start'
    },

    rtl_image_flip: {
        transform: [{rotateY: '180deg'}],
    },
    style_null: {}

});

export default styles;

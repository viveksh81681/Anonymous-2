import {Platform, StyleSheet, Dimensions} from 'react-native';
import {Fonts, Metrics, Colors} from '../../Themes/';

const styles = StyleSheet.create({
    header_style: {
        backgroundColor: Colors.branding_color,
        borderBottomWidth: 0,
        justifyContent: "flex-start",
    },
    header_view: {
        flexDirection: 'row',
        marginLeft: Fonts.moderateScale(12),
    },
    header_title: {
        fontSize: Fonts.moderateScale(16),
        marginLeft: Fonts.moderateScale(15),
        color: Colors.snow,
        fontWeight: '600',
        width: 150
    },
    border_bottom: {
        borderBottomWidth: 0.7,
        borderColor: Colors.snow,
        width: (Metrics.WIDTH),
        //marginLeft: (Metrics.WIDTH * 0.05),
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
    top_margin: {
        marginTop: Fonts.moderateScale(20),
    },
    card_top_margin: {
        marginTop: Fonts.moderateScale(10),
        marginBottom: Fonts.moderateScale(10),
        marginLeft: Fonts.moderateScale(10),
        marginRight: Fonts.moderateScale(10),
    },
    card_size: {
        //borderColor: Colors.black,
        //borderWidth: 1,
        //height: (Metrics.HEIGHT * 0.25),
        height: 170,
        flex: 1,
        justifyContent: "flex-start",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        backgroundColor: Colors.snow,
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 10,
    },
    card_image_style: {
        resizeMode: 'stretch',
    },
    editInfoView: {
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center'
    },
    card_left_part: {
        width: (Metrics.WIDTH * 0.50),
        //backgroundColor: Colors.red,
        paddingLeft: (Metrics.WIDTH * 0.05),
    },
    style_card_image_icon: {
        width: (Metrics.WIDTH * 0.48),
        //paddingRight: (Metrics.WIDTH * 0.05),
        //backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card_title_text: {
        fontSize: Fonts.moderateScale(22),
        fontWeight: '600',
        color: Colors.black,
        //marginTop: (Metrics.HEIGHT * 0.02),
        textAlign: 'left'
    },
    card_body_txt: {
        fontSize: Fonts.moderateScale(13),
        fontWeight: '600',
        color: Colors.black,
        marginTop: (Metrics.HEIGHT * 0.02),
        textAlign: 'left'
    },
    card_order_button: {
        width: Fonts.moderateScale(110),
        backgroundColor: Colors.branding_color,
        paddingLeft: Fonts.moderateScale(15),
        paddingRight: Fonts.moderateScale(15),
        marginTop: (Metrics.HEIGHT * 0.02),
        height: 35,
        borderRadius: 5,
    },
    order_txt: {
        fontSize: Fonts.moderateScale(15),
        fontWeight: '600',
        color: Colors.snow
    },
    card_icon: {
        height: 170,
        //resizeMode: 'stretch',
        resizeMode: 'cover',
        width: (Metrics.WIDTH * 0.42),
    },

});

export default styles;

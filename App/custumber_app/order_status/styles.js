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
    top_margin: {
        marginTop: (Metrics.HEIGHT * 0.02),
    },
    editInfoView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: (Metrics.HEIGHT * 0.08),
    },
    top_title:{
        fontSize: Fonts.moderateScale(16),
        fontWeight: '500'
    },
    icon_position:{
        marginTop: (Metrics.HEIGHT * 0.06),
    },
    login_button: {
        width: Fonts.moderateScale(160),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Fonts.moderateScale(22),
        alignSelf: 'center',
        // marginLeft: (Metrics.WIDTH * 0.30),
    },
    login_text: {
        color: Colors.snow,
        fontSize: Fonts.moderateScale(16),
        fontWeight: '600',
    },
    bottom_div: {
        width: Metrics.WIDTH,
        alignItems: 'flex-start',
        marginTop: (Metrics.HEIGHT * 0.08),
        borderTopColor: "rgba(0,0,0,0.08)",
        borderTopWidth: 2,
        borderRadius: 8,
    },
    rowMain: {
        flexDirection: 'row',
        width: (Metrics.WIDTH) * 0.92,
        alignSelf: 'center',
        height: 100,
        backgroundColor: Colors.snow,
        alignItems: 'center',
    },
    cardBgImage: {
        width: (Metrics.WIDTH) * 0.28,
        //marginLeft: (Metrics.HEIGHT) * 0.018,
        height: 70,
        resizeMode: 'cover'
    },
    cardDetailBg: {
        marginLeft: (Metrics.HEIGHT) * 0.02,
        paddingTop: 6,
        flexDirection: 'column',
        textAlign: 'center',
        //backgroundColor: Colors.red
    },
    titleTxt: {
        width: (Metrics.WIDTH) * 0.60,
        color: "#363636",
        fontFamily: Fonts.type.sfuiDisplaySemibold,
        fontSize: Fonts.moderateScale(16),
        paddingRight: (Metrics.HEIGHT) * 0.015,
        textAlign: 'left'
    },
    start_position: {
        marginTop: (Metrics.HEIGHT) * 0.01,
        alignItems: 'flex-start'
    },
    likeCommentBg: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    card_shop_button: {
        color: Colors.branding_color,
        fontSize: Fonts.moderateScale(15),
        fontWeight: '600',
        fontFamily: Fonts.type.sfuiDisplayRegular,
        marginTop: (Metrics.HEIGHT) * 0.009,
        marginLeft: (Metrics.WIDTH) * 0.09,
    },
    mobile_number:{
        fontSize: Fonts.moderateScale(18),
        marginLeft: (Metrics.WIDTH) * 0.04,
        marginRight: (Metrics.WIDTH) * 0.04,
        fontWeight: '600'
    },
    container_inline: {
        width: (Metrics.WIDTH) * 0.92,
        marginLeft: (Metrics.WIDTH) * 0.04,
        marginRight: (Metrics.WIDTH) * 0.04,
        flexDirection: 'row'
    },
    contact_number:{
        fontSize: Fonts.moderateScale(15)
    },
    call_button: {
        fontSize: Fonts.moderateScale(15),
        color: Colors.branding_color,
        fontWeight: '600'
    },
    hard_text:{
        fontSize: Fonts.moderateScale(18),
        fontWeight: '600'
    }


});

export default styles;

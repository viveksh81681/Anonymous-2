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
        width: 240
    },
    top_margin: {
        marginTop: Fonts.moderateScale(35),
    },
    product_margin:{
      marginTop: Fonts.moderateScale(15)
    },

    segmentTabSecOne: {
        width: Metrics.WIDTH * 0.96,
        height: Metrics.HEIGHT * 0.06,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: Metrics.HEIGHT * 0.003,
    },
    segmentSelectedTabOne: {
        width: Metrics.WIDTH * 0.45,
        height: Metrics.HEIGHT * 0.06,
        backgroundColor: Colors.branding_color,
        alignSelf: "center",
        justifyContent: "center",
        borderColor: "transparent",
        borderWidth: 0,
    },
    segmentTabOne: {
        width: Metrics.WIDTH * 0.45,
        height: Metrics.HEIGHT * 0.06,
        backgroundColor: Colors.snow,
        alignSelf: "center",
        justifyContent: "center",
        borderColor: Colors.branding_color,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
    },
    activeTabOne: {
        color: Colors.snow,
        fontSize: Fonts.moderateScale(16),
        fontFamily: Fonts.type.robotoRegular,
        textAlign: "center",
        fontWeight: "bold"
    },

    normalTabOne: {
        color: Colors.branding_color,
        fontSize: Fonts.moderateScale(16),
        fontFamily: Fonts.type.robotoRegular,
        textAlign: "center",
        fontWeight: "bold"
    },
    card_view: {
        width: Metrics.WIDTH * 0.91,
        marginLeft: Metrics.WIDTH * 0.05,
        marginRight: Metrics.WIDTH * 0.04,
        marginTop: Metrics.HEIGHT * 0.05,
    },
    order_id: {
        fontSize: Fonts.moderateScale(16),
        fontWeight: '500',
        //alignItems: 'flex-start',
        textAlign: 'left'
    },
    devider_row: {
        marginTop: Metrics.HEIGHT * 0.01,
        width: Metrics.WIDTH * 0.91,
        height: 2,
        backgroundColor: "rgba(0,0,0,0.08)"
    },
    rowMain: {
        flexDirection: 'row',
        width: (Metrics.WIDTH) * 0.92,
        alignSelf: 'center',
        height: 100,
        backgroundColor: Colors.snow,
        alignItems: 'center',
        borderBottomColor: "rgba(0,0,0,0.08)",
        borderBottomWidth: 2
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
    view_details_button: {
        color: Colors.branding_color,
        fontSize: Fonts.moderateScale(15),
        fontWeight: '600',
        fontFamily: Fonts.type.sfuiDisplayRegular,
        marginTop: (Metrics.HEIGHT) * 0.005,
    },
    card_shop_button: {
        color: Colors.branding_color,
        fontSize: Fonts.moderateScale(15),
        fontWeight: '600',
        fontFamily: Fonts.type.sfuiDisplayRegular,
        marginTop: (Metrics.HEIGHT) * 0.009,
        marginLeft: (Metrics.WIDTH) * 0.09,
    },
    amount_style: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    amount_paid: {
        fontSize: Fonts.moderateScale(16),
        marginTop: Fonts.moderateScale(14),
    },
    track_order: {
        color: Colors.branding_color,
        fontSize: Fonts.moderateScale(15),
        fontWeight: '600',
        fontFamily: Fonts.type.sfuiDisplayRegular,
    }


});

export default styles;

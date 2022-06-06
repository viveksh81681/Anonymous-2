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
        marginTop: Fonts.moderateScale(35),
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

    start_position: {
        marginTop: (Metrics.HEIGHT) * 0.03,
        alignItems: 'flex-start'
    },
    order_id: {
        fontSize: Fonts.moderateScale(13),
        fontWeight: '500',
        alignItems: 'flex-start',
        textAlign: 'left'
    },
    write_review: {
        marginTop: (Metrics.HEIGHT) * 0.04,
        fontSize: Fonts.moderateScale(13),
        fontWeight: '500',
        alignItems: 'flex-start',
        textAlign: 'left'
    },
    text_area:{
        marginTop: (Metrics.HEIGHT) * 0.02,
    },
    next_button: {
        backgroundColor: Colors.branding_color,
        marginTop: (Metrics.HEIGHT) * 0.04,
    },
    button_text:{
        fontWeight: '500',
        color: Colors.snow,
        fontSize: Fonts.moderateScale(16)
    }


});

export default styles;

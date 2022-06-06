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
        fontWeight: '600'
    },
    cart_card: {
        width: (Metrics.WIDTH) * 0.90,
        alignItems: 'flex-start',
        marginLeft: (Metrics.WIDTH) * 0.05,
        marginRight: (Metrics.WIDTH) * 0.05,
        paddingBottom: (Metrics.HEIGHT) * 0.02,
        borderBottomWidth: 0.4,
        borderBottomColor: Colors.darktext
    },
    top_row:{
        flexDirection: 'row',
        marginTop: (Metrics.HEIGHT) * 0.03,
        alignItems: 'center'
    },
    likeCommentBg: {
        flexDirection: 'row',
    },
    card_shop_button: {
        color: Colors.black,
        marginTop: Fonts.moderateScale(12),
        marginRight: Fonts.moderateScale(15),
        marginLeft: Fonts.moderateScale(15),
        fontSize: Fonts.moderateScale(18),
        fontWeight: '400',
        fontFamily: Fonts.type.sfuiDisplayRegular,
    },
    product_title: {
        fontSize: Fonts.moderateScale(16),
        fontWeight: '600'
    },
    chboxConatiner: {
        flexDirection: 'row',
        marginTop: (Metrics.HEIGHT) * 0.01,
        alignItems: 'center'
    },
    textRememberMe: {
        fontSize: Fonts.moderateScale(13),
        marginLeft: Fonts.moderateScale(10),
    },
    spacel_instruction:{
        fontSize: Fonts.moderateScale(13),
        fontWeight: '600'
    },
    total_amount: {
        fontSize: Fonts.moderateScale(13),
        fontWeight: '600',
        marginTop: (Metrics.HEIGHT) * 0.05,
        alignItems: 'flex-start',
    },
    final_amount_card: {
        width: (Metrics.WIDTH) * 0.90,
        alignItems: 'flex-start',
        marginLeft: (Metrics.WIDTH) * 0.05,
        marginRight: (Metrics.WIDTH) * 0.05,
        paddingBottom: (Metrics.HEIGHT) * 0.02,
    },
    payment_instruction: {
        fontSize: Fonts.moderateScale(16),
        fontWeight: '400',
    },


    root: {
        width: "100.00%",
        height: Fonts.moderateScale(60),
        backgroundColor: "rgba(0,61,136,1)",
        justifyContent: 'center',
        flexDirection: 'row',
        //position: "absolute"
    },
    cart_left: {
        flexDirection: 'row',
        marginLeft: Fonts.moderateScale(4),
        backgroundColor: "transparent",
    },
    cart_right:{
        flexDirection: 'row',
        marginRight: Fonts.moderateScale(16),
        backgroundColor: "transparent",
        justifyContent: 'flex-end',
    },
    productsAdded: {
        marginLeft: Fonts.moderateScale(15),
        backgroundColor: "transparent",
        color: Colors.snow,
        fontSize: Fonts.moderateScale(13),
        fontWeight: '600',
        fontFamily: "helveticaneue-medium",

    },
    viewCart: {
        //marginRight: Fonts.moderateScale(15),
        backgroundColor: "transparent",
        color: Colors.snow,
        ...Platform.select({
            ios: {
                fontSize: Fonts.moderateScale(14),
            },
            android: {
                fontSize: Fonts.moderateScale(12),
            }
        }),

        fontWeight: '600',
        fontFamily: "helveticaneue-medium",
        //width: 170
    },
    reviews_card: {
        width:  Metrics.WIDTH * 0.92,
        paddingBottom: Fonts.moderateScale(15),
        flexDirection: "row",
        marginLeft: Metrics.WIDTH * 0.04,
        marginRight: Metrics.WIDTH * 0.04,
        marginBottom: Metrics.HEIGHT * 0.02,
        borderRadius: 4,
        borderColor: "rgba(0,0,0,0.08)",
        borderWidth: 2,
        shadowOffset: {
            height: 0,
            width: 0
        },
        shadowColor: "rgba(0,0,0,0.16)",
        shadowOpacity: 1,
        shadowRadius: 8
    }
});

export default styles;

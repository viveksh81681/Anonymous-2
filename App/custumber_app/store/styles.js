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
        width: 250
    },
    button_style: {
        marginLeft: Fonts.moderateScale(9)
    },
    headerImageBG: {
        height: 170,
        borderRadius: 8,
        marginTop: Fonts.moderateScale(20),
        marginLeft: (Metrics.WIDTH * 0.04),
        marginRight: (Metrics.WIDTH * 0.04),
        width: (Metrics.WIDTH * 0.92),
    },
    title_detail: {
        fontWeight: '500',
        fontSize: Fonts.moderateScale(16)
    },
    header: {
        ...Platform.select({
            ios: {
                paddingTop: (Metrics.HEIGHT * 0.001),
            },
            android: {
                paddingTop: (Metrics.HEIGHT * 0.05),
            }
        }),
        backgroundColor: Colors.transparent,
        height: Metrics.HEIGHT * 0.03,
        borderBottomWidth: 0,
        elevation: 0,
        paddingLeft: (Metrics.WIDTH * 0.05),
        paddingRight: (Metrics.WIDTH * 0.05),
    },
    left: {
        flex: 0.5,
        backgroundColor: Colors.transparent
    },
    button_shadow: {
        width: Fonts.moderateScale(98),
        height: Fonts.moderateScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Fonts.moderateScale(82),
        backgroundColor: Colors.snow,
        shadowColor: Colors.black,
        shadowOpacity: 0.4,
        elevation: 1,
        shadowRadius: 4,
        shadowOffset: {width: 1, height: 1},
    },
    button_text: {
        color: Colors.branding_color,
        ...Platform.select({
            ios: {
                fontSize: Fonts.moderateScale(13),
            },
            android: {
                fontSize: Fonts.moderateScale(10),
            }
        }),
        fontWeight: '700'
    },
    body: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: Colors.transparent
    },
    textTitle: {
        color: Colors.snow,
        fontSize: Fonts.moderateScale(17),
        marginTop: (Metrics.HEIGHT * 0.001),
        alignSelf: 'center',
        fontFamily: Fonts.type.sfuiDisplaySemibold,
    },
    right: {
        flex: 0.5
    },
    settingIcon: {
        height: (Metrics.HEIGHT * 0.028),
        width: (Metrics.HEIGHT * 0.028),
        resizeMode: 'contain'
    },
    bottom_txt_list: {
        //paddingLeft: (Metrics.WIDTH * 0.05),
        //paddingRight: (Metrics.WIDTH * 0.05),
        //paddingTop: (Metrics.HEIGHT * 0.03),
    },
    padding_left_right: {
        marginLeft: (Metrics.WIDTH * 0.05),
        marginRight: (Metrics.WIDTH * 0.05),
        marginBottom: (Metrics.HEIGHT * 0.03),
    },
    start_position: {
        marginTop: (Metrics.HEIGHT) * 0.01,
        alignItems: 'flex-start'
    },
    likeCommentBg: {
        flexDirection: 'row',
        marginTop: Fonts.moderateScale(12),
        alignItems: 'flex-start'
        //marginTop: (Metrics.HEIGHT) * 0.001
    },
    right_button_yello: {
        color: Colors.snow,
        fontWeight: '600'
    },
    likeCommentBg_two: {
        flexDirection: 'row',
        marginTop: (Metrics.HEIGHT) * 0.03
    },
    location_text: {
        color: Colors.black,
        marginTop: (Metrics.HEIGHT) * 0.01,
        //marginLeft: (Metrics.WIDTH) * 0.04,
    },
    location_style: {
        flexDirection: 'row',
        marginTop: (Metrics.HEIGHT) * 0.03,
        paddingBottom: (Metrics.HEIGHT * 0.02),
        borderBottomColor: Colors.black,
        borderBottomWidth: 0.5,
    },
    title_dsc_view_style: {
        marginTop: (Metrics.HEIGHT) * 0.03,
        paddingBottom: (Metrics.HEIGHT * 0.02),
        borderBottomColor: Colors.snow,
        borderBottomWidth: 0.5,
    },
    title_text: {
        color: Colors.black,
        fontSize: Fonts.moderateScale(18),
        textAlign: 'left'
    },
    dsc_text: {
        color: Colors.darktext,
        fontWeight: '300',
        fontSize: Fonts.moderateScale(13),
        marginTop: (Metrics.HEIGHT) * 0.01,
        textAlign: 'left'
    },
    margin_top_list: {
        marginTop: (Metrics.HEIGHT) * 0.02,
    },
    image_size_footer: {
        height: Fonts.moderateScale(27),
        width: Fonts.moderateScale(27)
    },
    icon_bottom_border_less: {
        marginLeft: (Metrics.WIDTH * 0.01),
        marginTop: (Metrics.HEIGHT * 0.01),
        width: (Metrics.WIDTH * 0.04),
        height: (Metrics.HEIGHT * 0.005),
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
    imageBG: {
        width: (Metrics.WIDTH * 0.445),
        height: (Metrics.WIDTH * 0.445)
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        bottom: 0,
        position: 'absolute',
        marginLeft: (Metrics.WIDTH * 0.03),
        marginRight: (Metrics.WIDTH * 0.04)
    },
    profileContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: (Metrics.HEIGHT * 0.01)
    },

    profileImg: {
        width: (Metrics.WIDTH * 0.065),
        height: (Metrics.WIDTH * 0.065),
        borderRadius: (Metrics.WIDTH * 0.0325),
        borderWidth: 1,
        borderColor: "#FFFFFF",
        resizeMode: 'cover',
    },

    likeCountText: {
        fontFamily: Fonts.type.SFUIDisplayRegular,
        fontSize: Fonts.moderateScale(16),
        marginLeft: 5,
        color: "#FFFFFF",
        alignSelf: 'center',
        justifyContent: 'center'
    },

    likeImage: {
        ...Platform.select({
            ios: {
                marginBottom: (Metrics.HEIGHT * 0.015),
            },
            android: {
                marginBottom: (Metrics.HEIGHT * 0.015),
            }
        }),
        width: (Metrics.HEIGHT * 0.0225),
        height: (Metrics.HEIGHT * 0.0225),
        resizeMode: 'contain',
    },

    tabUnderLine: {
        backgroundColor: Colors.branding_color,
    },
    tabUnderLineTrans: {
        backgroundColor: 'transparent'
    },
    tabText: {
        fontSize: Fonts.moderateScale(16),
        fontWeight: '400',

    },
    listContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: (Metrics.WIDTH * 0.025),
        marginVertical: (Metrics.HEIGHT * 0.015),
        paddingBottom: (Metrics.HEIGHT * 0.030),
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'space-between'
    },
    text_white: {
        color: Colors.snow,
        textAlign: 'left'
    },
    amount_text: {
        color: Colors.branding_color,
        fontWeight: '600',
    },
    footer_inactive_text: {
        fontSize: Fonts.moderateScale(15),
        color: Colors.snow,
        marginTop: Fonts.moderateScale(5),
        fontWeight: '600'
    },
    footer_active_text: {
        fontSize: Fonts.moderateScale(15),
        color: Colors.branding_color,
        marginTop: Fonts.moderateScale(5),
        fontWeight: '600'
    },
    ReviewsImg: {
        height: Metrics.HEIGHT * 0.08,
        width: Metrics.HEIGHT * 0.08,
        borderRadius: 2,
        marginTop: Metrics.HEIGHT * 0.02,
        marginLeft: Metrics.HEIGHT * 0.02
    },

    ReviewsName: {
        color: Colors.black,
        fontFamily: Fonts.type.sfuiDisplaySemibold,
        fontSize: Fonts.moderateScale(15),
        fontWeight: '500',
        marginLeft: Metrics.HEIGHT * 0.02,
        marginTop: Metrics.HEIGHT * 0.02,
        textAlign: 'left'
    },
    ratingStar: {
        height: Metrics.HEIGHT * 0.025,
        width: Metrics.HEIGHT * 0.025,
        marginLeft: Metrics.HEIGHT * 0.01
    },
    ReviewsHours: {
        color: Colors.darktext,
        fontFamily: Fonts.type.sfuiDisplayRegular,
        fontSize: Fonts.moderateScale(13),
        marginTop: Metrics.HEIGHT * 0.02,
        marginLeft: Metrics.HEIGHT * 0.02,
        textAlign: 'left'
    },
    ReviewDes: {
        color: Colors.darktext,
        fontFamily: Fonts.type.sfuiDisplayRegular,
        fontSize: Fonts.moderateScale(13),
        marginTop: Metrics.HEIGHT * 0.01,
        marginLeft: Metrics.HEIGHT * 0.02,
        width: Metrics.WIDTH * 0.62,
        textAlign: 'left'
    },
    scrollableTabView_height:{
        ...Platform.select({
            ios: {
                height: Metrics.HEIGHT * 0.79
            },
            android: {
                height: Metrics.HEIGHT * 0.82
            }
        }),
    },
    form_two: {
        width: (Metrics.WIDTH),
        marginTop: (Metrics.HEIGHT * 0.02),
        backgroundColor: Colors.transparent,
    },
    sale_label: {
      backgroundColor: Colors.red,
        width: Fonts.moderateScale(90)
    },
    sale_text:{
        color: Colors.snow,
        marginLeft: Fonts.moderateScale(8),
        fontWeight: 'bold'
    },
    rowMain: {
        flexDirection: 'row',
        width: (Metrics.WIDTH) * 0.92,
        alignSelf: 'center',
        marginTop: (Metrics.HEIGHT) * 0.008,
        marginBottom: (Metrics.HEIGHT) * 0.015,
        height: 140,
        backgroundColor: Colors.snow,
        alignItems: 'center',
        borderRadius: 4,
        shadowOffset: {
            height: 0,
            width: 0
        },
        shadowColor: "rgba(0,0,0,0.16)",
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 3, //shadow on Android
    },
    rowMain1: {
        flexDirection: 'row',
        width: (Metrics.WIDTH) * 0.92,
        alignSelf: 'center',
        marginTop: (Metrics.HEIGHT) * 0.008,
        marginBottom: (Metrics.HEIGHT) * 0.015,
        height: 155,
        backgroundColor: Colors.snow,
        alignItems: 'center',
        borderRadius: 4,
        shadowOffset: {
            height: 0,
            width: 0
        },
        shadowColor: "rgba(0,0,0,0.16)",
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 3, //shadow on Android
    },
    cardBgImage: {
        marginTop: Fonts.moderateScale(10),
        width: (Metrics.WIDTH) * 0.29,
        borderRadius: 6,
        marginLeft: (Metrics.HEIGHT) * 0.018,
        height: 112,
        resizeMode: 'cover'
    },
    cardDetailBg: {
        height: (Metrics.HEIGHT) * 0.18,
        marginLeft: (Metrics.HEIGHT) * 0.016,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    descriptionTxt: {
        marginTop: (Metrics.HEIGHT) * 0.022,
        width: (Metrics.WIDTH) * 0.45,
        color: Colors.text_border_color,
        fontFamily: Fonts.type.sfuiDisplayRegular,
        fontSize: Fonts.moderateScale(14),
        paddingRight: (Metrics.HEIGHT) * 0.015,
        textAlign: 'left'
    },
    card_second_fm_text: {
        //marginLeft: (Metrics.WIDTH)* 0.01,
        width: (Metrics.WIDTH) * 0.4,
        color: Colors.text_border_color,
        fontSize: Fonts.moderateScale(14),
        fontFamily: Fonts.type.sfuiDisplayRegular,
    },
    plus_minus_right: {
        flexDirection: 'row',
        //marginLeft: Fonts.moderateScale(1)
    },
    card_shop_button: {
        color: Colors.black,
        marginTop: Fonts.moderateScale(11),
        marginRight: Fonts.moderateScale(15),
        marginLeft: Fonts.moderateScale(15),
        fontSize: Fonts.moderateScale(18),
        fontWeight: '400',
        fontFamily: Fonts.type.sfuiDisplayRegular,
    },
    titleTxt: {
        width: (Metrics.WIDTH) * 0.60,
        color: "#363636",
        fontFamily: Fonts.type.sfuiDisplaySemibold,
        fontSize: Fonts.moderateScale(16),
        paddingRight: (Metrics.HEIGHT) * 0.015,
        textAlign: 'left',
        //marginTop: Fonts.moderateScale(35)
    },
    titleTxt2: {
        width: (Metrics.WIDTH) * 0.60,
        color: "#363636",
        fontFamily: Fonts.type.sfuiDisplaySemibold,
        fontSize: Fonts.moderateScale(10),
        paddingRight: (Metrics.HEIGHT) * 0.015,
        textAlign: 'left',
        //marginTop: Fonts.moderateScale(35)
    },
    footer_cart: {
        flexDirection: 'row',
        marginLeft: Fonts.moderateScale(32),
        backgroundColor: Colors.snow
    },
    cart_text: {
        color: Colors.branding_color,
        fontWeight: '500',
        marginLeft: Fonts.moderateScale(15),
        marginTop: Fonts.moderateScale(5),
    },
    cart_view_button: {
        height: '100%',
        borderRadius: 0,
        backgroundColor: Colors.dark_blue
    },
    cart_btn_text: {
        color: Colors.snow,
        fontWeight: '500'
    },
    chboxConatiner: {
        flexDirection: 'row',
        marginTop: Fonts.moderateScale(12),
        width: (Metrics.WIDTH * 0.84),
        alignItems: 'center',
        alignSelf: 'center',
    },
    textRememberMe: {
        fontSize: Fonts.moderateScale(13)
    },
    price_bg_tag: {
        height: 66,
        position: 'absolute',
        width: (Metrics.WIDTH) * 0.28,
        bottom: -6,
        right: -4,
    },
    price_text:{
        fontSize: Fonts.moderateScale(14),
        fontWeight: '600',
        color: Colors.snow,
        textAlign: 'center',
        marginTop: 15
    },
    price_text2:{
        fontSize: Fonts.moderateScale(9),
        fontWeight: '600',
        color: Colors.snow,
        textAlign: 'center',
        marginTop: 5,
        textDecorationLine: 'line-through'
    },
    rtl_image_flip: {
        transform: [{rotateY: '180deg'}],
        resizeMode: 'stretch'
    },
    style_flip_null:{
        resizeMode: 'stretch'
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
        marginLeft: Fonts.moderateScale(23),
        backgroundColor: "transparent",
    },
    cart_right:{
        flexDirection: 'row',
        marginRight: Fonts.moderateScale(23),
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
        //marginRight: Fonts.moderateScale(2),
        backgroundColor: "transparent",
        color: Colors.snow,
        fontSize: Fonts.moderateScale(13),
        fontWeight: '600',
        fontFamily: "helveticaneue-medium",
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
    },

    top_tab: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: Colors.snow,
        paddingLeft: Fonts.moderateScale(15),
        paddingRight: Fonts.moderateScale(15),
        paddingVertical: Fonts.moderateScale(20),
    },
    tab_text: {
        fontSize: Fonts.moderateScale(18),
        fontWeight: '500'
    },
    tab_text_unacitive: {
        fontSize: Fonts.moderateScale(18),
        color: Colors.branding_color,
        fontWeight: '400'
    },
    border_tab: {
        marginTop: Fonts.moderateScale(10),
        borderBottomWidth: 2,
        borderColor: Colors.branding_color,
        width: Fonts.moderateScale(40)
    },
    border_tab_unactive: {
        marginTop: Fonts.moderateScale(10),
        borderBottomWidth: 2,
        borderColor: Colors.snow,
        width: Fonts.moderateScale(40)
    },

});

export default styles;

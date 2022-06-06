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
        //width: 250
    },
    button_style: {
        width: (Metrics.WIDTH * 0.50)
    },
    remove_border: {
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0
    },
    tanker_price: {
        backgroundColor: Colors.branding_color,
        color: Colors.snow,
        paddingLeft: Fonts.moderateScale(8),
        paddingRight: Fonts.moderateScale(8),
        paddingTop: Fonts.moderateScale(5),
        paddingBottom: Fonts.moderateScale(5),
    },
    tanker_tag_center: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    minus_tag: {
        marginTop: -Fonts.moderateScale(6)
    },
    search_input: {
        //width: Metrics.WIDTH * .90
        //borderBottomWidth: 0.7,
        height: Fonts.moderateScale(38)
    },
    right_button: {
        marginRight: Fonts.moderateScale(20)
    },
    title_text: {
        fontSize: Fonts.moderateScale(16),
        fontWeight: '400',
        marginLeft: Fonts.moderateScale(12)
    },
    border_bottom: {
        borderBottomWidth: 2,
        borderColor: Colors.text_border_color,
        width: (Metrics.WIDTH),
        //marginLeft: (Metrics.WIDTH * 0.05),
    },
    tabUnderLine: {
        backgroundColor: Colors.branding_color,
    },
    tabUnderLineTrans: {
        backgroundColor: 'transparent'
    },
    slidesec: {
        height: Metrics.HEIGHT * 0.250,
        backgroundColor: Colors.transparent
    },
    activeDot: {
        backgroundColor: Colors.branding_color,
        width: Metrics.WIDTH * 0.02,
        height: Metrics.WIDTH * 0.02,
        borderRadius: Metrics.WIDTH * 0.01,
        marginLeft: Metrics.WIDTH * 0.005,
        marginRight: Metrics.WIDTH * 0.005
    },
    sliderImage: {
        resizeMode: "cover",
        height: Metrics.HEIGHT * 0.3,
        width: Metrics.WIDTH,
        backgroundColor: "grey"
    },
    contentStyle: {
        position: "absolute",
        alignSelf: "center",
        alignItems: "center",
        top: Metrics.HEIGHT * 0.055
    },
    dot: {
        backgroundColor: "#d4d4d4",
        width: Metrics.WIDTH * 0.02,
        height: Metrics.WIDTH * 0.02,
        borderRadius: Metrics.WIDTH * 0.01,
        marginLeft: Metrics.WIDTH * 0.005,
        marginRight: Metrics.WIDTH * 0.005
    },
    form_back_icon: {
        fontSize: Fonts.moderateScale(27)
    },
    title_change: {
        fontSize: Fonts.moderateScale(16),
        fontWeight: '700',
        color: Colors.branding_color_two
    },
    form: {
        width: (Metrics.WIDTH * 0.95),
        marginTop: (Metrics.HEIGHT * 0.02)
    },
    form_two: {
        width: (Metrics.WIDTH),
        //marginTop: (Metrics.HEIGHT * 0.01),
        backgroundColor: Colors.transparent
    },
    form_inner: {
        marginTop: (Metrics.HEIGHT * 0.01),
        marginLeft: (Metrics.WIDTH * 0.05),
        fontWeight: '500',
        color: Colors.text_border_color,
        fontSize: Fonts.moderateScale(22),
    },
    form_inner_bottom: {
        marginTop: (Metrics.HEIGHT * 0.01),
        marginLeft: (Metrics.WIDTH * 0.05),
        fontSize: Fonts.moderateScale(17),
        color: Colors.text_border_color,
        fontWeight: '400'
    },
    card_title: {
        fontSize: Fonts.moderateScale(17),
        color: Colors.text_border_color,
        fontWeight: '600'
    },
    editInfoMainView: {
        width: Metrics.WIDTH
    },
    editDivider: {
        height: Metrics.HEIGHT * 0.001,
        backgroundColor: '#e1e1e1'
    },
    editInfoView: {
        height: Metrics.HEIGHT * 0.060,
        margin: Metrics.HEIGHT * 0.015,
        marginTop: (Metrics.HEIGHT * 0.02),
        backgroundColor: Colors.branding_color_two,
        borderRadius: 5,
        width: Metrics.WIDTH * 0.92,
        justifyContent: 'center',
        alignItems: 'center'
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
        fontWeight: '600'
    },
    image_size: {
        height: Fonts.moderateScale(38),
        width: Fonts.moderateScale(38),
        marginTop: -(Metrics.HEIGHT * 0.04),
    },
    image_size_footer: {
        height: Fonts.moderateScale(27),
        width: Fonts.moderateScale(27)
    },
    card_style: {
        width: (Metrics.WIDTH * 0.94),
        marginLeft: (Metrics.WIDTH * 0.02),
        marginTop: (Metrics.HEIGHT * 0.02),
        borderRadius: 5
    },
    companies: {
        marginBottom: (Metrics.HEIGHT * 0.01)
    },
    card_side: {
        fontSize: Fonts.moderateScale(14),
        marginTop: (Metrics.HEIGHT * 0.02),
    },
    icon_bottom: {
        marginLeft: (Metrics.WIDTH * 0.01),
        marginTop: (Metrics.HEIGHT * 0.01),
        width: (Metrics.WIDTH * 0.05),
        borderBottomWidth: 3,
        borderRadius: 10,
        borderColor: Colors.branding_color,
        shadowOffset: {width: 1, height: 1,},
        shadowColor: Colors.text_border_color,
        shadowOpacity: 0.5,
    },
    icon_bottom_border_less: {
        marginLeft: (Metrics.WIDTH * 0.01),
        marginTop: (Metrics.HEIGHT * 0.01),
        width: (Metrics.WIDTH * 0.05),
        height: (Metrics.HEIGHT * 0.005),
    },


    main: {
        flex: 1,
        width: Metrics.WIDTH,
        backgroundColor: Colors.snow,
        flexDirection: 'column'
    },

    rowMain: {
        flexDirection: 'row',
        width: (Metrics.WIDTH) * 0.92,
        alignSelf: 'center',
        marginTop: Fonts.moderateScale(14),
        height: 148,
        backgroundColor: Colors.snow,
        alignItems: 'center',
        borderRadius: 4,
        borderColor: "rgba(0,0,0,0.08)",
        borderWidth: 2
        /**
        shadowOffset: {
            height: 0,
            width: 0
        },
        shadowColor: "rgba(0,0,0,0.16)",
        shadowOpacity: 1,
        shadowRadius: 8,
         **/
    },

    cardBgImage: {
        width: (Metrics.WIDTH) * 0.30,
        marginLeft: (Metrics.HEIGHT) * 0.018,
        ...Platform.select({
            ios: {
                height: 120,
            },
            android: {
                height: (Metrics.HEIGHT) * 0.15,
            }
        }),
        resizeMode: 'cover'
    },

    cardDetailBg: {
        height: 120,
        marginLeft: (Metrics.HEIGHT) * 0.02,
        paddingTop: 6,
        flexDirection: 'column',
        justifyContent: 'center',
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

    descriptionTxt: {
        marginTop: (Metrics.HEIGHT) * 0.018,
        width: (Metrics.WIDTH) * 0.52,
        color: Colors.darktext,
        fontFamily: Fonts.type.sfuiDisplayRegular,
        fontSize: Fonts.moderateScale(14),
        paddingRight: (Metrics.HEIGHT) * 0.015,
        textAlign: 'left'
    },

    likeCommentBg: {
        flexDirection: 'row',
        marginTop: (Metrics.HEIGHT) * 0.01
    },

    countImgBg: {
        flexDirection: 'row',
        width: (Metrics.WIDTH) * 0.15,
        alignItems: 'center'
    },

    commentImg: {
        width: (Metrics.WIDTH * 0.04),
        height: (Metrics.WIDTH * 0.04),
        resizeMode: 'contain'
    },

    card_second_fm_text: {
        //marginLeft: (Metrics.WIDTH)* 0.01,
        width: (Metrics.WIDTH) * 0.4,
        color: Colors.text_border_color,
        fontSize: Fonts.moderateScale(14),
        fontFamily: Fonts.type.sfuiDisplayRegular,
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
        marginTop: (Metrics.HEIGHT) * 0.005,
        marginLeft: (Metrics.WIDTH) * 0.16,
    },

    listDivider: {
        backgroundColor: Colors.transparent,
        height: 1,
        width: (Metrics.WIDTH) * 0.98,
        alignSelf: "flex-end",
        marginTop: (Metrics.HEIGHT) * 0.001
    },
    start_position: {
        marginTop: (Metrics.HEIGHT) * 0.01,
        alignItems: 'flex-start'
    },
    map_view: {
        height: Metrics.HEIGHT * 0.9,
        width: Metrics.WIDTH
    },
    filter_view: {
        marginTop: Fonts.moderateScale(16),
        flexDirection: 'row',
        backgroundColor: Colors.snow,
    },
    filter_view_text:{
        width: '70%',
        marginTop: Fonts.moderateScale(8),
        paddingLeft: Fonts.moderateScale(12),
    },
    filter_dropdown:{
        width: Fonts.moderateScale(80),
        marginTop: 0,
        paddingTop: 0,
    },
    tanker_provider: {
        fontSize: Fonts.moderateScale(16),
        fontWeight: '500',
        color: Colors.darktext,
        textAlign: 'left'
    },
    foot_style:{
        shadowOffset: {
            height: -2,
            width: 0
        },
        shadowColor: "rgba(0,0,0,0.12)",
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 2
    },

    pickerWrapper: {
        width: '30%',
        backgroundColor: Colors.snow,
    },
    picker_new:{
        flexDirection: 'row',
        marginTop: Fonts.moderateScale(8),
        justifyContent:'space-between'
    },
    dropdown_icon: {
        marginTop: Fonts.moderateScale(6)
    },
    short_by: {
        fontSize: Fonts.moderateScale(16),
        fontWeight: '500',
        marginRight: Fonts.moderateScale(12),
        color: Colors.darktext
    },
    card_view: {
        width: Metrics.WIDTH * 0.91,
        marginLeft: Metrics.WIDTH * 0.05,
        marginRight: Metrics.WIDTH * 0.04,
        marginTop: Metrics.HEIGHT * 0.05,
        marginBottom: Metrics.HEIGHT * 0.05,
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
    rowMain1: {
        flexDirection: 'row',
        width: (Metrics.WIDTH) * 0.92,
        alignSelf: 'center',
        height: 100,
        backgroundColor: Colors.snow,
        alignItems: 'center',
        borderBottomColor: "rgba(0,0,0,0.08)",
        borderBottomWidth: 2
    },
    cardDetailBg: {
        marginLeft: (Metrics.HEIGHT) * 0.02,
        marginRight: (Metrics.HEIGHT) * 0.02,
        //paddingTop: 6,
        flexDirection: 'column',
        textAlign: 'center',
        //backgroundColor: Colors.red
    },
    likeCommentBg: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleTxt: {
        width: (Metrics.WIDTH) * 0.40,
        //marginTop: Fonts.moderateScale(8),
        color: "#363636",
        fontFamily: Fonts.type.sfuiDisplaySemibold,
        fontSize: Fonts.moderateScale(16),
        paddingRight: (Metrics.HEIGHT) * 0.015,
        textAlign: 'left'
    },
    titleTxt1: {
        width: (Metrics.WIDTH) * 0.90,
        //marginTop: Fonts.moderateScale(8),
        color: "#363636",
        //fontFamily: Fonts.type.sfuiDisplaySemibold,
        fontSize: Fonts.moderateScale(16),
        paddingRight: (Metrics.HEIGHT) * 0.015,
        textAlign: 'left'
    },
    card_shop_button: {
        color: Colors.branding_color,
        fontSize: Fonts.moderateScale(15),
        fontWeight: '600',
        fontFamily: Fonts.type.sfuiDisplayRegular,
        //marginTop: (Metrics.HEIGHT) * 0.009,
        //marginLeft: (Metrics.WIDTH) * 0.09,
    },
    card_shop_button1: {
        color: Colors.branding_color,
        fontSize: Fonts.moderateScale(15),
        fontWeight: '600',
        fontFamily: Fonts.type.sfuiDisplayRegular,
        //marginTop: (Metrics.HEIGHT) * 0.009,
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
    },
    footer_button:{
        backgroundColor: Colors.branding_color,
    },
    footer_text: {
        color: Colors.snow,
        fontSize: Fonts.moderateScale(18)
    }

});

export default styles;

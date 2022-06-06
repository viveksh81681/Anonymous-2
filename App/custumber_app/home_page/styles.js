import {Platform, StyleSheet, Dimensions} from 'react-native';
import {Fonts, Metrics, Colors} from '../../Themes/';

const styles = StyleSheet.create({

    header_height: {
        backgroundColor: Colors.branding_color,
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0
    },
    left_arrow: {
        backgroundColor: Colors.snow,
        paddingRight: 0
    },
    button_style: {
        width: (Metrics.WIDTH * 0.50)
    },
    remove_border: {
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0
    },
    search_input: {
      //width: Metrics.WIDTH * .90
        //borderBottomWidth: 0.7,
        height: Fonts.moderateScale(38)
    },
    right_button:{
      marginRight: Fonts.moderateScale(20)
    },
    title_text: {
        fontSize: Fonts.moderateScale(16),
        fontWeight: '600',
        marginLeft: Fonts.moderateScale(12),
        color: Colors.snow
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
        height: 197,
        backgroundColor: Colors.transparent,
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
        backgroundColor: "grey",
        height: 170,
        borderRadius: 8,
        marginTop: Fonts.moderateScale(20),
        marginLeft: (Metrics.WIDTH * 0.04),
        marginRight: (Metrics.WIDTH * 0.04),
        width: (Metrics.WIDTH * 0.92),


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
        marginTop: (Metrics.HEIGHT * 0.01),
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
        marginTop: Fonts.moderateScale(18),
        height: 148,
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
        width: (Metrics.WIDTH) * 0.30,
        marginLeft: (Metrics.HEIGHT) * 0.018,
        ...Platform.select({
            ios: {
                height: (Metrics.HEIGHT) * 0.15,
            },
            android: {
                height: (Metrics.HEIGHT) * 0.15,
            }
        }),
        resizeMode: 'cover'
    },

    cardDetailBg: {
        height: (Metrics.HEIGHT) * 0.18,
        marginLeft: (Metrics.HEIGHT) * 0.02,
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
        marginTop: (Metrics.HEIGHT) * 0.022,
        width: (Metrics.WIDTH) * 0.52,
        color: Colors.text_border_color,
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
    card_shop_button: {
        color: Colors.branding_color,
        fontSize: Fonts.moderateScale(15),
        fontWeight: '600',
        fontFamily: Fonts.type.sfuiDisplayRegular,
        marginTop: (Metrics.HEIGHT) * 0.005,
        marginLeft: (Metrics.WIDTH) * 0.099,
    },


    start_position: {
        marginTop: (Metrics.HEIGHT) * 0.01,
        alignItems: 'flex-start'
    },
    map_view: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH
    },
    foot_style:{
        shadowOffset: {
            height: -2,
            width: 0
        },
        shadowColor: "rgba(0,0,0,0.12)",
        shadowOpacity: 1,
        shadowRadius: 4
    }

});

export default styles;

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
    top_card_container: {
        marginBottom: 10,
        flexDirection: 'row',
        marginTop: (Metrics.HEIGHT * 0.03),
    },
    card_style: {
        width: (Metrics.WIDTH * 0.40),
        height: 170,
        marginLeft: (Metrics.WIDTH * 0.03),
        //borderRadius: 20,

        marginBottom: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        backgroundColor: Colors.snow,
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 5,
    },
    card_item_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    filterImageSize: {
        height: 143,
        width: (Metrics.WIDTH * 0.40),
        resizeMode: "cover",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    card_title: {
        fontSize: Fonts.moderateScale(15),
        //marginTop: Fonts.moderateScale(15),
        color: Colors.black,
        fontWeight: '800'
    },
    size_tag:{
        flex: 1,
        justifyContent: "flex-start",
        paddingRight: (Metrics.WIDTH * 0.03),
        paddingLeft: (Metrics.WIDTH * 0.03),
        marginTop: Fonts.moderateScale(10)
    },
    tag_txt:{
        fontSize: Fonts.moderateScale(16),
        fontWeight: '600'
    },

    form_back_icon: {
        fontSize: Fonts.moderateScale(27)
    },
    title_change: {
        fontSize: Fonts.moderateScale(16),
        fontWeight: '700',
        color: Colors.branding_color_two
    },
    button_style: {
        width: (Metrics.WIDTH * 0.50),
        marginLeft: (Metrics.WIDTH * 0.04),
    },

    form_two: {
        width: (Metrics.WIDTH),
        marginTop: (Metrics.HEIGHT * 0.01),
        backgroundColor: Colors.snow
    },
    form_inner: {
        marginTop: (Metrics.HEIGHT * 0.01),
        marginLeft: (Metrics.WIDTH * 0.05),
        fontWeight: '500',
        color: Colors.text_border_color,
        fontSize: Fonts.moderateScale(22),
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
    card_side: {
        fontSize: Fonts.moderateScale(14),
        marginTop: (Metrics.HEIGHT * 0.02),
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


    main: {
        flex: 1,
        width: Metrics.WIDTH,
        backgroundColor: Colors.snow,
        flexDirection: 'column'
    },

    rowMain: {
        flexDirection: 'row',
        width: (Metrics.WIDTH) * 0.96,
        alignSelf: 'center',
        marginTop: (Metrics.HEIGHT) * 0.015,
        marginBottom: (Metrics.HEIGHT) * 0.015,
        height: (Metrics.HEIGHT) * 0.18,
        backgroundColor: Colors.snow,
        alignItems: 'center'
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
        justifyContent: 'center'
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
        width: (Metrics.WIDTH) * 0.45,
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
        marginLeft: (Metrics.WIDTH) * 0.03,
        color: Colors.branding_color_two,
        marginRight: (Metrics.WIDTH) * 0.03,
        fontSize: Fonts.moderateScale(17),
        fontWeight: '600',
        fontFamily: Fonts.type.sfuiDisplayRegular,
    },

    listDivider: {
        backgroundColor: Colors.snow,
        height: 1,
        width: (Metrics.WIDTH) * 0.98,
        alignSelf: "flex-end",
        marginTop: (Metrics.HEIGHT) * 0.002
    },
    start_position: {
        marginTop: (Metrics.HEIGHT) * 0.01,
        alignItems: 'flex-start'
    },


    listContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: (Metrics.WIDTH * 0.05),
        marginTop: (Metrics.HEIGHT * 0.02),
    },
    txtBg: {
        marginBottom: Metrics.HEIGHT * 0.01,
        marginHorizontal: Metrics.WIDTH * 0.01,
        borderRadius: Metrics.HEIGHT * 0.006,
        paddingVertical: Metrics.HEIGHT * 0.02,
        paddingHorizontal: Metrics.WIDTH * 0.03,
        borderWidth: 1,
        borderColor: Colors.branding_color,
        justifyContent: 'center',
    },
    selectedButton: {
        backgroundColor: Colors.branding_color,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: Metrics.HEIGHT * 0.005,
        },
        elevation: Fonts.moderateScale(8),
    },
    musicname: {
        fontFamily: Fonts.type.robotoMedium,
        fontSize: Fonts.moderateScale(12),
        textAlign: 'center',
        backgroundColor: "transparent"
    },
    footer_button_text: {
        fontSize: Fonts.moderateScale(18),
        color: Colors.snow,
        fontWeight: '600'
    }

});

export default styles;

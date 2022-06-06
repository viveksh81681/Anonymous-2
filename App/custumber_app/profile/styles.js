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
    top_margin: {
        marginTop: (Metrics.HEIGHT) * 0.04,
    },
    icon_text_container:{
        width: (Metrics.WIDTH) * 0.90,
        alignItems: 'flex-start',
        //backgroundColor: Colors.red,
        marginLeft: (Metrics.WIDTH) * 0.05,
        marginRight: (Metrics.WIDTH) * 0.05,
        flexDirection: 'row'
    },
    icon_container: {
        flexDirection: 'row'
    },
    icon_style:{
        marginTop: 2,
    },
    icon_text: {
        fontSize: Fonts.moderateScale(18),
        marginLeft: (Metrics.WIDTH) * 0.04,
        fontWeight: '600'
    },
    button_text:{
        fontSize: Fonts.moderateScale(18),
        color: Colors.branding_color,
        fontWeight: '600'
    },
    profile_pic:{
        marginLeft: (Metrics.WIDTH) * 0.05,
        marginRight: (Metrics.WIDTH) * 0.05,
        marginTop: (Metrics.HEIGHT) * 0.01,
    },
    normal_text:{
        marginLeft: (Metrics.WIDTH) * 0.05,
        marginRight: (Metrics.WIDTH) * 0.05,
        marginTop: (Metrics.HEIGHT) * 0.01,
        fontSize: Fonts.moderateScale(16),
        fontWeight: '400',
        color: Colors.darktext,
        textAlign: 'left'
    },
    main_model:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        //paddingTop: '10%',
        width: Metrics.WIDTH * 0.9,
        alignItems: "center",
        paddingVertical: 20
    },
    top_header_view:{
        flexDirection: 'row',
        width: '100%',
        alignItems: "center",
    },
    model_title: {
        //marginTop: '10%',
        color: Colors.black,
        fontSize: Fonts.moderateScale(18),
        textAlign: 'center',
        marginLeft: Metrics.WIDTH * 0.30
    },
    cros_icon:{
        marginLeft: 'auto',
        marginRight: Fonts.moderateScale(20)
    },
    okText: {
        color: "#FFFFFF",
        fontFamily: Fonts.type.sfuiDisplayRegular,
        fontSize: Fonts.moderateScale(18)
    },
    itememail: {
        alignSelf: "center",
        marginTop: 10,
        borderBottomWidth: 0.7,
        borderBottomColor: Colors.black,
        width: Metrics.WIDTH * 0.80,
        height: Metrics.HEIGHT * 0.08
    },
    done_button:{
        marginTop: 30,
        backgroundColor: Colors.branding_color,
        borderRadius: 5,
        paddingVertical: 14,
        paddingHorizontal: Metrics.WIDTH * 0.35,
        alignSelf: "center",
    },

});

export default styles;

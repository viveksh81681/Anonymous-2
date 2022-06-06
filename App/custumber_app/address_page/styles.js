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
    form_two: {
        width: (Metrics.WIDTH),
        //marginTop: (Metrics.HEIGHT * 0.01),
        backgroundColor: Colors.transparent
    },
    map_view: {
        height: Metrics.HEIGHT * 0.4,
        width: Metrics.WIDTH
    },
    companies: {
        marginBottom: (Metrics.HEIGHT * 0.01)
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
    companies:{
        width: Metrics.WIDTH,
        paddingLeft: Fonts.moderateScale(20),
        paddingRight: Fonts.moderateScale(20),
    },
    head_text: {
        textAlign: 'left',
        marginTop: Fonts.moderateScale(20),
        fontSize: 18,
        width: Metrics.WIDTH,
        //left: Fonts.moderateScale(16),
    },
    dsc_text: {
        textAlign: 'left',
        marginTop: Fonts.moderateScale(30),
        fontSize: 15,
        fontWeight: '300',
        //width: Metrics.WIDTH * 0.9,
        //marginLeft: Fonts.moderateScale(16)
    },
    itememail: {
        marginLeft: Fonts.moderateScale(6),
        alignSelf: "center",
        borderBottomWidth: 0.7,
        borderBottomColor: Colors.darktext,
        marginTop: Fonts.moderateScale(4),
        //width: Metrics.WIDTH * 0.88,
        height: Fonts.moderateScale(40)
    },



});

export default styles;

import {Platform, StyleSheet} from "react-native";
import {Metrics, Fonts, Colors} from "../../Themes/";

const styles = StyleSheet.create({
    background_gold: {
      backgroundColor: Colors.branding_color
    },

    time_window: {
        flex: 1,
        flexDirection: 'row',
        width: Metrics.WIDTH * 0.73,
        backgroundColor: Colors.color_two,
        //marginLeft: Metrics.WIDTH * 0.13,
        //marginTop: Fonts.moderateScale(16),
    },
    time_middle: {
        marginLeft: Fonts.moderateScale(11),
        marginRight: Fonts.moderateScale(11),
        color: Colors.snow,
        fontSize: Fonts.moderateScale(17),
        fontWeight: '600',
        marginTop: Fonts.moderateScale(9),
        marginBottom: Fonts.moderateScale(9)
    },
    time_left_row_margin: {
        marginLeft: Metrics.WIDTH * 0.09,
        marginBottom: Fonts.moderateScale(15),
        marginTop: Fonts.moderateScale(15),
    }

});

export default styles;

import {Platform, StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
import {Fonts, Metrics, Colors} from '../../Themes/';

const styles = StyleSheet.create({
  header_style: {
    backgroundColor: Colors.branding_color,
    borderBottomWidth: 0,
  },
  button_style: {
    marginLeft: Fonts.moderateScale(9),
  },
  header_title: {
    fontSize: Fonts.moderateScale(19),
    color: Colors.snow,
  },
  map_view: {
    height: Metrics.HEIGHT * 0.61,
    width: Metrics.WIDTH,
  },
  bottom_car_menu: {
    backgroundColor: Colors.snow,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    //marginTop: Fonts.moderateScale(8),
    marginBottom: Fonts.moderateScale(8),
    paddingTop: Fonts.moderateScale(17),
    //height: Fonts.moderateScale(135),
    //height: Metrics.HEIGHT * 0.24,
    width: '100%',
  },
  rectangleCopy2: {
    position: 'absolute',
    top: '4.44%',
    left: '4.35%',
    //marginTop: Fonts.moderateScale(20),
    height: Fonts.moderateScale(120),
    width: '91.11%',
    borderRadius: 8,
    elevation: 18,
    shadowColor: 'rgba(65,72,59,0.32)',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowRadius: 16,
    shadowOpacity: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    flexDirection: 'column',
  },
  my_location_icon: {
    position: 'absolute',
    bottom: '4.35%',
    right: '4.35%',
    //marginTop: Fonts.moderateScale(20),
    //height: Fonts.moderateScale(120),
    //width: "91.11%",
    borderRadius: 8,
    flexDirection: 'column',
  },
  rectangleCopy3: {
    height: Fonts.moderateScale(60),
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'rgba(86,201,251,0.08)',
    //backgroundColor: "red",
    flexDirection: 'row',
  },
  rectangleCopy4: {
    height: Fonts.moderateScale(60),
    width: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: Colors.snow,
    //backgroundColor: "red",
    flexDirection: 'row',
  },
  card_top_left: {
    width: '13%',
    paddingTop: Fonts.moderateScale(9),
    paddingLeft: Fonts.moderateScale(19),
    //backgroundColor: 'red'
  },
  card_top_middle: {
    width: '70%',
    paddingTop: Fonts.moderateScale(8),
    paddingLeft: Fonts.moderateScale(8),
    paddingBottom: Fonts.moderateScale(8),
    justifyContent: 'space-between',
    //backgroundColor: 'red'
  },
  card_top_right: {
    width: '13%',
    paddingTop: Fonts.moderateScale(23),
    paddingLeft: Fonts.moderateScale(20),
  },

  line4: {
    //position: "absolute",
    height: Fonts.moderateScale(17),
    width: Fonts.moderateScale(17),
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  location_text: {
    fontSize: Fonts.moderateScale(14),
    fontWeight: '300',
  },
  choose_vehicle_title: {
    fontSize: Fonts.moderateScale(20),
    textAlign: 'center',
    fontWeight: '300',
    color: Colors.most_text,
  },
  choose_vehicle_scroll: {
    width: '100%',
    marginTop: Fonts.moderateScale(28),
    flexDirection: 'row',
  },
  vehicle_group: {
    marginLeft: Fonts.moderateScale(12),
    marginRight: Fonts.moderateScale(12),
    alignItems: 'center',
  },
  car_thumbnale: {
    width: Fonts.moderateScale(57),
    height: Fonts.moderateScale(18),
    marginBottom: Fonts.moderateScale(2),
  },
  sports: {
    fontSize: Fonts.moderateScale(14),
    fontWeight: '400',
    color: Colors.darktext,
    textAlign: 'center',
    marginTop: Fonts.moderateScale(3),
  },
  sports_selected: {
    fontSize: Fonts.moderateScale(14),
    fontWeight: '400',
    color: Colors.branding_color,
    textAlign: 'center',
    marginTop: Fonts.moderateScale(3),
  },
  footer_bottom: {
    backgroundColor: Colors.snow,
    borderTopColor: Colors.snow,
  },
  bottom_wide_color: {
    marginTop: Fonts.moderateScale(11),
    borderRadius: 0,
    backgroundColor: Colors.branding_color,
    width: '100%',
    justifyContent: 'center',
  },
  bottom_button_text: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(18),
    fontWeight: '500',
  },
  footer_bottom_row: {
    width: '100%',
    backgroundColor: Colors.snow,
    //marginTop: Fonts.moderateScale(10),
    flexDirection: 'row',
  },
  bottom_wide_half: {
    width: '49.9%',
    justifyContent: 'center',
    borderRadius: 0,
    backgroundColor: Colors.branding_color,
  },
  second_step_btm: {
    marginTop: Fonts.moderateScale(12),
    flexDirection: 'row',
    flex: 1,
  },
  left_group_two: {
    backgroundColor: Colors.snow,
    width: Metrics.WIDTH * 0.47,
    height: Fonts.moderateScale(54),
    marginLeft: Fonts.moderateScale(12),
    borderRadius: 4,
    elevation: 2,
    shadowColor: 'rgba(65,72,59,0.14)',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    paddingTop: Fonts.moderateScale(5),
  },

  right_group_two: {
    borderRadius: 4,
    backgroundColor: Colors.snow,
    width: Metrics.WIDTH * 0.42,
    height: Fonts.moderateScale(54),
    marginLeft: Fonts.moderateScale(14),
    elevation: 2,
    shadowColor: 'rgba(65,72,59,0.14)',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    flexDirection: 'row',
  },
  right_group_two_large: {
    borderRadius: 4,
    backgroundColor: Colors.snow,
    width: Metrics.WIDTH * 0.47,
    height: Fonts.moderateScale(54),
    marginLeft: Fonts.moderateScale(14),
    elevation: 2,
    shadowColor: 'rgba(65,72,59,0.14)',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    flexDirection: 'row',
  },
  left_icon_card: {
    backgroundColor: Colors.branding_color,
    width: '25%',
    paddingTop: Fonts.moderateScale(10),
    paddingLeft: Fonts.moderateScale(5),
  },
  card_body_small: {
    width: '50%',
    paddingTop: Fonts.moderateScale(4),
  },
  card_body_large: {
    width: '57%',
    paddingTop: Fonts.moderateScale(4),
  },
  card_left_small: {
    width: '25%',
    paddingLeft: Fonts.moderateScale(10),
    paddingTop: Fonts.moderateScale(12),
  },
  bottom_car_menu_two: {
    backgroundColor: Colors.snow,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    marginTop: -Fonts.moderateScale(68),
    paddingTop: Fonts.moderateScale(17),
    height: Fonts.moderateScale(180),
    width: '100%',
  },
  sports_small: {
    fontSize: Fonts.moderateScale(14),
    fontWeight: '400',
    color: Colors.darktext,
    textAlign: 'center',
    marginTop: Fonts.moderateScale(9),
  },
  step_two_footer: {
    //position: "absolute",
    //bottom: 0,
    paddingBottom: Fonts.moderateScale(5),
    width: '100%',
    borderRadius: 8,
  },
  driver_find_bottom: {
    backgroundColor: Colors.snow,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    marginTop: -Fonts.moderateScale(38),
    paddingTop: Fonts.moderateScale(17),
    height: Fonts.moderateScale(150),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  driver_title_find: {
    fontSize: Fonts.moderateScale(20),
    marginTop: Fonts.moderateScale(8),
    textAlign: 'center',
    fontWeight: '400',
    color: Colors.most_text,
  },
  driver_title_dsc: {
    fontSize: Fonts.moderateScale(16),
    marginTop: Fonts.moderateScale(8),
    textAlign: 'center',
    fontWeight: '400',
    color: Colors.darktext,
  },

  /** side bar code **/
  listProfileContainer: {
    height: Metrics.HEIGHT * 0.98,
    backgroundColor: 'transparent',
  },
  top_cross_icon: {
    marginTop: Metrics.HEIGHT * 0.07,
    marginLeft: Fonts.moderateScale(20),
  },
  profileBg: {
    flexDirection: 'row',
    marginBottom: Metrics.HEIGHT * 0.04,
    //height: Metrics.HEIGHT * 0.28,
    paddingLeft: Fonts.moderateScale(20),
    alignItems: 'center',
  },
  profileDataBg: {
    flexDirection: 'row',
    marginTop: Metrics.HEIGHT * 0.04,
    alignItems: 'center',
    //width: Fonts.moderateScale(80),
    alignSelf: 'center',
    justifyContent: 'center',
  },

  profileImg: {
    width: Fonts.moderateScale(70),
    height: Fonts.moderateScale(70),
    borderRadius: 50,
  },
  top_margin_nm: {
    //backgroundColor: Colors.red,
    marginTop: Fonts.moderateScale(40),
  },
  nameTxt: {
    textAlign: 'center',
    color: 'black',
    //fontFamily: Fonts.type.sfuiDisplayBold,
    fontSize: Fonts.moderateScale(19),
    fontWeight: '500',
    marginLeft: Fonts.moderateScale(12),
    marginBottom: Fonts.moderateScale(7),
    marginTop: 'auto',
  },
  star_name: {
    color: 'black',
    //fontFamily: Fonts.type.sfuiDisplayBold,
    fontSize: Fonts.moderateScale(14),
    fontWeight: '500',
    marginLeft: Fonts.moderateScale(12),
    marginBottom: Fonts.moderateScale(7),
    marginTop: 'auto',
  },
  menu_item_container: {
    marginTop: Metrics.WIDTH * 0.03,
    paddingLeft: Fonts.moderateScale(20),
  },
  subTitleBg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Metrics.WIDTH * 0.04,
    marginRight: 10,
  },
  margin_icon_menu: {
    marginRight: Fonts.moderateScale(10),
  },
  menu_icon_text_group: {
    flexDirection: 'row',
    //justifyContent: "space-between",
    marginBottom: Metrics.WIDTH * 0.06,
  },
  titleTxt: {
    width: Metrics.WIDTH * 0.71,
    fontSize: Fonts.moderateScale(18),
    color: 'black',
    fontWeight: '400',
    //textAlign: "center"
  },
  titleTxt2: {
    width: Metrics.WIDTH * 0.71,
    fontSize: Fonts.moderateScale(15),
    color: 'black',
    fontWeight: '400',
    //textAlign: "center"
  },

  legal_options: {
    flexDirection: 'row',
    marginTop: Metrics.HEIGHT * 0.08,
  },
  menu_icon_text_group2: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    //justifyContent: "space-between",
    marginBottom: Metrics.WIDTH * 0.02,
  },
  titleTxt3: {
    //width: Metrics.WIDTH * 0.71,
    fontSize: Fonts.moderateScale(14),
    color: 'black',
    fontWeight: '400',
    //textAlign: "center"
  },
});

export default styles;

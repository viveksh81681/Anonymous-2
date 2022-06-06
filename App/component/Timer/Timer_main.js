import React, {Component} from 'react';
import {
  Platform,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  BackHandler,
  ListView,
  I18nManager,
} from 'react-native';
import PropTypes from 'prop-types';
import {Button, Icon} from 'native-base';
import styles from './style';
import {Images} from '../../Themes';

export class Timer_main extends Component {
  static propTypes = {
    background_color: PropTypes.any,
    button_background: PropTypes.any,
    button_color: PropTypes.any,
    selected_hours: PropTypes.any,
    selected_minutes: PropTypes.any,
    selected_am_pm: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      start_time: 1,
      start_minutes: 10,
      am_pm: 'AM',
    };
    this.props.selected_hours(1);
    this.props.selected_minutes(10);
    this.props.selected_am_pm('AM');
  }

  hours(type) {
    if (type === 'inc') {
      let current_time = this.state.start_time;
      let now_time = current_time + 1;
      if (now_time <= 12) {
        this.setState({start_time: now_time});
        this.props.selected_hours(now_time);
      }
    } else {
      let current_time = this.state.start_time;
      let now_time = current_time - 1;
      if (now_time >= 1) {
        this.setState({start_time: now_time});
        this.props.selected_hours(now_time);
      }
    }
  }

  minutes(type) {
    if (type === 'inc') {
      let current_time = this.state.start_minutes;
      let now_time = current_time + 1;
      if (now_time <= 60) {
        this.setState({start_minutes: now_time});
        this.props.selected_minutes(now_time);
      }
    } else {
      let current_time = this.state.start_minutes;
      let now_time = current_time - 1;
      if (now_time >= 1) {
        this.setState({start_minutes: now_time});
        this.props.selected_minutes(now_time);
      }
    }
  }

  am_pm() {
    if (this.state.am_pm === 'AM') {
      this.setState({am_pm: 'PM'});
      this.props.selected_am_pm('PM');
    } else {
      this.setState({am_pm: 'AM'});
      this.props.selected_am_pm('AM');
    }
  }

  render() {
    return (
      <View style={styles.time_window}>
        <View style={styles.time_left_row_margin}>
          <Button
            style={[
              styles.background_gold,
              {backgroundColor: this.props.button_background},
            ]}
            onPress={() => this.hours('inc')}>
            <Icon name="arrow-up" style={{color: this.props.button_color}} />
          </Button>
          <Text style={styles.time_middle}>{this.state.start_time}</Text>
          <Button
            style={[
              styles.background_gold,
              {backgroundColor: this.props.button_background},
            ]}
            onPress={() => this.hours('dec')}>
            <Icon name="arrow-down" style={{color: this.props.button_color}} />
          </Button>
        </View>

        <View style={styles.time_left_row_margin}>
          <Button
            style={[
              styles.background_gold,
              {backgroundColor: this.props.button_background},
            ]}
            onPress={() => this.minutes('dec')}>
            <Icon name="arrow-up" style={{color: this.props.button_color}} />
          </Button>
          <Text style={styles.time_middle}>{this.state.start_minutes}</Text>
          <Button
            style={[
              styles.background_gold,
              {backgroundColor: this.props.button_background},
            ]}
            onPress={() => this.minutes('inc')}>
            <Icon name="arrow-down" style={{color: this.props.button_color}} />
          </Button>
        </View>

        <View style={styles.time_left_row_margin}>
          <Button
            style={[
              styles.background_gold,
              {backgroundColor: this.props.button_background},
            ]}
            onPress={() => this.am_pm()}>
            <Icon name="arrow-up" style={{color: this.props.button_color}} />
          </Button>
          <Text style={styles.time_middle}>{this.state.am_pm}</Text>
          <Button
            style={[
              styles.background_gold,
              {backgroundColor: this.props.button_background},
            ]}
            onPress={() => this.am_pm()}>
            <Icon name="arrow-down" style={{color: this.props.button_color}} />
          </Button>
        </View>
      </View>
    );
  }
}

export default Timer_main;

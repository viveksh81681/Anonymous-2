import React, { Component } from "react";
import Svg, { Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";
export default class ExploreInactiveCopy extends Component {
   render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.group3}>
          <Svg
            style={styles.line1}
            viewBox="-0.5 -0.5 5.4939393893923505 5.707218268443084"
          >
            <Path
              strokeWidth={1}
              fill="transparent"
              stroke="rgba(47,72,88,1)"
              d="M0.00 0.00 L3.49 3.71 "
            />
          </Svg>
          <Svg style={styles.oval1} viewBox="-0.5 -0.5 12.5 12.88888888888889">
            <Path
              strokeWidth={1}
              fill="transparent"
              stroke="rgba(47,72,88,1)"
              d="M5.25 10.89 C8.15 10.89 10.50 8.45 10.50 5.44 C10.50 2.44 8.15 0.00 5.25 0.00 C2.35 0.00 0.00 2.44 0.00 5.44 C0.00 8.45 2.35 10.89 5.25 10.89 Z"
            />
          </Svg>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  group3: {
    position: "absolute",
    top: "6.25%",
    left: "12.50%",
    height: "87.50%",
    width: "75.00%"
  },
  line1: {
    position: "absolute",
    height: "40.77%",
    width: "45.78%",
    top: "68.65%",
    left: "64.58%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval1: {
    position: "absolute",
    height: "92.06%",
    width: "104.17%",
    top: "-3.57%",
    left: "-4.17%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});

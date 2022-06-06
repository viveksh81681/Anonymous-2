import React, { Component } from "react";
import Svg, { Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";
export default class LocationIconCopy5 extends Component {
   render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg style={styles.path1} viewBox="-0 -0 10 14">
          <Path
            strokeWidth={0}
            fill="rgba(47,72,88,1)"
            d="M10.00 4.50 C10.00 8.00 5.00 14.00 5.00 14.00 C5.00 14.00 0.00 8.00 0.00 4.50 C0.00 2.02 2.24 0.00 5.00 0.00 C7.76 0.00 10.00 2.02 10.00 4.50 Z M5.00 6.42 C5.90 6.42 6.63 5.72 6.63 4.85 C6.63 3.97 5.90 3.27 5.00 3.27 C4.10 3.27 3.37 3.97 3.37 4.85 C3.37 5.72 4.10 6.42 5.00 6.42 Z"
          />
        </Svg>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  path1: {
    position: "absolute",
    height: "87.50%",
    width: "62.50%",
    top: "6.25%",
    left: "18.75%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});

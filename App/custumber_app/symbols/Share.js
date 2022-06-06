import React, { Component } from "react";
import Svg, { Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";
export default class Share extends Component {
   render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg style={styles.line4} viewBox="-0.5 -0.5 14 14">
          <Path
            strokeWidth={1}
            fill="transparent"
            stroke="rgba(47,72,88,1)"
            d="M7.80 12.00 L6.00 5.71 L0.00 4.57 L12.00 0.00 L7.80 12.00 Z"
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
  line4: {
    position: "absolute",
    height: "87.50%",
    width: "87.50%",
    top: "9.38%",
    left: "9.38%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});

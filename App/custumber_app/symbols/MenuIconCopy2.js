import React, { Component } from "react";
import Svg, { Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";
export default class MenuIconCopy2 extends Component {
   render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.group1}>
          <Svg style={styles.line} viewBox="-0.5 -0.5 20 3">
            <Path
              strokeWidth={1}
              fill="transparent"
              stroke="rgba(255,255,255,1)"
              d="M0.00 0.50 L18.00 0.50 "
            />
          </Svg>
          <Svg style={styles.lineCopy} viewBox="-0.5 -0.5 20 3">
            <Path
              strokeWidth={1}
              fill="transparent"
              stroke="rgba(255,255,255,1)"
              d="M0.00 0.50 L18.00 0.50 "
            />
          </Svg>
          <Svg style={styles.lineCopy2} viewBox="-0.5 -0.5 20 3">
            <Path
              strokeWidth={1}
              fill="transparent"
              stroke="rgba(255,255,255,1)"
              d="M0.00 0.50 L18.00 0.50 "
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
  group1: {
    position: "absolute",
    top: "29.17%",
    left: "12.50%",
    height: "45.83%",
    width: "75.00%"
  },
  line: {
    position: "absolute",
    height: "27.27%",
    width: "111.11%",
    top: "-4.55%",
    left: "-2.78%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  lineCopy: {
    position: "absolute",
    height: "27.27%",
    width: "111.11%",
    top: "40.91%",
    left: "-2.78%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  lineCopy2: {
    position: "absolute",
    height: "27.27%",
    width: "111.11%",
    top: "86.36%",
    left: "-2.78%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});

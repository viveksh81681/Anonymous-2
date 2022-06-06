import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
export default class Artboard extends Component {
   render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          style={styles.screenshot20190327At40010Pm}
          source={require("../assets/images/c3c757a4190eef79b1d47b620413e72637713e0d.png")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  screenshot20190327At40010Pm: {
    position: "absolute",
    top: "16.67%",
    left: "5.36%",
    height: "66.67%",
    width: "89.29%",
  }
});

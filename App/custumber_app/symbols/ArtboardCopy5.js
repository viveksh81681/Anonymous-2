import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
export default class ArtboardCopy5 extends Component {
   render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          style={styles.screenshot20190327At35920Pm}
          source={require("../assets/images/1fe6cbc5d4eec087f3c24ee3f8e7ca1b7cd24318.png")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  screenshot20190327At35920Pm: {
    position: "absolute",
    top: "20.83%",
    left: "8.93%",
    height: "58.33%",
    width: "82.14%",
    //backgroundColor: "rgba(47,72,88,1)"
  }
});

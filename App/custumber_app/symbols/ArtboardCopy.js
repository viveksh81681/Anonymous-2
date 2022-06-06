import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
export default class ArtboardCopy extends Component {
   render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          style={styles.screenshot20190327At35913Pm}
          source={require("../assets/images/86cab349c1f4ab4257bb9f47c6b5de1b5921a8d3.png")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  screenshot20190327At35913Pm: {
    position: "absolute",
    top: "16.67%",
    left: "7.14%",
    height: "66.67%",
    width: "85.71%",
    //backgroundColor: "rgba(47,72,88,1)"
  }
});

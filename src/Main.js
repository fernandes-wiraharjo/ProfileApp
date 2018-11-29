import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

class Main extends Component {
  render() {
    return (
      <View style={Styles.classContainer}>


        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Name</Text>
          </View>
          <View style={Styles.inputContainer}>
            <Text style={Styles.inputResult}>Name</Text>
          </View>
        </View>

        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Gender</Text>
          </View>
          <View style={Styles.inputContainer}>
            <Text style={Styles.inputResult}>Gender</Text>
          </View>
        </View>

        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Phone</Text>
          </View>
          <View style={Styles.inputContainer}>
            <Text style={Styles.inputResult}>Phone</Text>
          </View>
        </View>

        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Address</Text>
          </View>
          <View style={Styles.inputContainer}>
            <Text style={Styles.inputResult}>Address</Text>
          </View>
        </View>

        <TouchableOpacity style={Styles.buttonSubmit}>
          <Text style={Styles.textButton}>Submit</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const Styles = StyleSheet.create({
  classContainer: { flex: 1, padding: 15 },
  containerPerSection: { flexDirection: "row" },
  textContainer: { width: "30%" },
  text: { fontSize: 20, fontWeight: "bold" },
  inputContainer: { width: "70%", backgroundColor: "#f33a3a" },
  inputResult: { fontSize: 20 },
  buttonSubmit: {
    backgroundColor: "#d2d2d2",
    borderRadius: 3,
    borderWidth: 1,
    position: "absolute",
    bottom: 10,
    right: 10,
    left: 10
  },
  textButton: { textAlign: "center", margin: 10 }
});

export default Main;

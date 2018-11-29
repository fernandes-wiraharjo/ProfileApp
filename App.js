import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Main from "./src/Main";
import InputFormName from "./src/inputs/InputFormName";
import InputFormGender from "./src/inputs/InputFormGender";
import InputFormPhone from "./src/inputs/InputFormPhone";
import InputFormAddress from "./src/inputs/InputFormAddress";
import Result from "./src/Result";

class App extends Component {
  render() {
    return <Main />;
  }
}

export default App;

//1. Bikin 4-pairs inputan
//2.

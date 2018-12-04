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
  constructor(props) {
    super(props);

    this.state = {
      pageNeedsTobeRendered: "Main",
      userName: ""
    };
  }

  navigateToInputFormName = () => {
    this.setState({ pageNeedsTobeRendered: "inputName" });
  };

  navigateToMainPage = () => {
    this.setState({ pageNeedsTobeRendered: "Main" });
  };

  setUserName = (name) => {
    this.setState({ userName:  name });
  };

  render() {
    const { pageNeedsTobeRendered, userName } = this.state; //Destructuring

    if (pageNeedsTobeRendered === "inputName") {
      return <InputFormName 
                navigateToMainPage={this.navigateToMainPage}
                setUserName={this.setUserName}/>;
    } else if (pageNeedsTobeRendered === "inputAddress") {
      return <InputFormAddress />;
    }

    return (
      <Main
        userName={userName}
        navigateToInputFormName={this.navigateToInputFormName}
      />
    );
  }
}

export default App;

//1. Bikin 4-pairs inputan
//2.

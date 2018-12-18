import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Result = ({ userName, gender, phone, address }) => {
  return (
    <View style={Styles.classContainer}>
        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Name</Text>
          </View>
          
          <Text style={Styles.inputResult}>{ userName }</Text>
        </View>

        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Gender</Text>
          </View>

          <Text style={Styles.inputResult}>{ gender }</Text>
        </View>

        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Phone</Text>
          </View>

          <Text style={Styles.inputResult}>{ phone }</Text>
        </View>

        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Address</Text>
          </View>
          
          <Text style={Styles.inputResult}>{ address }</Text>
        </View>
      </View>
  )
};

const Styles = StyleSheet.create({
  classContainer: { flex: 1, padding: 15 },
  containerPerSection: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10
  },
  textContainer: { width: "30%" },
  text: { fontSize: 20, fontWeight: "bold" },
  inputResult: { fontSize: 20, marginLeft: 5 },
});

export default Result;

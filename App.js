import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Button, TextInput } from "react-native";
import { Provider } from "react-redux";
import store from "./Redux";
import Item from "./Item";
import { useState, useEffect } from "react";
import { Init, AddNewItem } from "./database";
export default function App() {
  const [txt, setTxt] = useState("");
  var index = 0;
  // useEffect(() => {
  //   Init()
  //     .then(() => {
  //       console.log("db create well");
  //     })
  //     .catch(() => {
  //       console.log("db create failed");
  //     });
  // }, []);
  return (
    <View style={styles.container}>
      <View>
        {/* <TextInput
           value={txt}
           onChangeText={(t) => {
             setTxt(t);
           }}
         ></TextInput>
       </View>
       <View>
         <Button
           title="Add to DB"
           onPress={() => {
             alert(txt);
             AddNewItem(index, txt, 1, "blue");
             index = index + 1;
           }}
         ></Button>
       </View> */}
        <Provider store={store}>
          <Item></Item>
        </Provider>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});

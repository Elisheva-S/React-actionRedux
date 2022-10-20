import React from "react";
import {
  TextInput,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { add, remove, remark, critical, top, edit } from "./Slice";
import { Init, AddNewItem, RemoveItem, SelectAll } from "./database";
export default function Item() {
  const arr = useSelector((state) => state.reducerList.arr);
  const dispatch = useDispatch();
  const [txt, setTxt] = useState("");
  var index = 0;
  useEffect(() => {
    Init()
      .then(() => {
        console.log("db create well");
      })
      .catch(() => {
        console.log("db create failed");
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.txt}>
        <TextInput
          value={txt}
          onChangeText={(t) => {
            setTxt(t);
          }}
        ></TextInput>
      </View>
      <View style={styles.button}>
        <Button
          title="Add"
          onPress={() => {
            dispatch(add(txt));
            AddNewItem(index, txt, 1, "blue")
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
            index++;
            setTxt("");
          }}
        ></Button>
      </View>
      <ScrollView style={styles.contentContainer}>
        {arr.map((o, i) => {
          return (
            <View
              key={i}
              style={{
                borderWidth: o[2],
                borderColor: o[3],
                textAlign: "center",
              }}
            >
              <Text>{o[1]}</Text>
              <View style={styles.button}>
                <Button
                  title="Remove"
                  onPress={() => {
                    dispatch(remove(i));
                    //RemoveItem(index);
                  }}
                ></Button>
              </View>
              <View style={styles.button}>
                <Button
                  title="Remark item"
                  onPress={() => {
                    dispatch(remark(i));
                  }}
                ></Button>
              </View>
              <View style={styles.button}>
                <Button
                  title="Critical item"
                  onPress={() => {
                    dispatch(critical(i));
                  }}
                ></Button>
              </View>
              <View style={styles.button}>
                <Button
                  title="Top item"
                  onPress={() => {
                    dispatch(top(i));
                  }}
                ></Button>
              </View>
              <View style={styles.button}>
                <Button
                  title="Edit item"
                  onPress={() => {
                    //setTxt(o[1]);
                    return (
                      <Button
                        value="save"
                        onPress={() => {
                          setTxt(o[1]);
                        }}
                      ></Button>
                    );
                    dispatch(edit(i));
                  }}
                ></Button>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <Button
        title="Select All"
        onPress={() => {
          SelectAll()
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      ></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  txt: {
    borderColor: "red",
    borderRadius: 10,
  },
  contentContainer: {
    paddingVertical: 10,
    height: 600,
    width: 350,
    flexGrow: 1,
    top: 10,
    alignSelf: "center",
    fontSize: 10,
  },
  button: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 20,
    paddingHorizontal: 30,
    height: 36,
    width: 300,
    textAlign: "center",
    alignSelf: "center",
  },
});

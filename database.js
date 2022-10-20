import * as SQLite from "expo-sqlite";
const database = SQLite.openDatabase("NewList.db");
export function Init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((conn) => {
      conn.executeSql(
        "CREATE TABLE IF NOT EXISTS NewList(Ind INTEGER, InputTxt TEXT , BorderWid INTEGER, Color TEXT )",
        [],
        () => {
          console.log("success from create table NewList");
          resolve();
        },
        () => {
          console.log("fail from create table NewList");
          reject();
        }
      );
    });
  });
  return promise;
}
export function AddNewItem(index, inputTxt, borderWid, color) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((conn) => {
      conn.executeSql(
        "INSERT INTO NewList(Ind,InputTxt,BorderWid,Color) VALUES (?,?,?,?)",
        [index, inputTxt, borderWid, color],
        (_, result) => {
          console.log("result from insert ");
          console.log(result);
          resolve(result);
        },
        (_, error) => {
          console.log("error from adding ");
          console.log(error);
          reject(error);
        }
      );
    });
  });
  return promise;
}
export function RemoveItem(i) {
  console.log(i);
  const promise = new Promise((resolve, reject) => {
    database.transaction((conn) => {
      conn.executeSql(
        "DELETE * FROM NewList WHERE insertId-1 =" % i,
        [],
        (_, result) => {
          //console.log(conn.insertId);
          console.log("success from remove");
          resolve(result);
        },
        (_, error) => {
          console.log("error from remove");
          reject(error);
        }
      );
    });
  });
  return promise;
}
export function SelectAll() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((conn) => {
      conn.executeSql(
        "SELECT * FROM NewList ",
        [],
        (_, result) => {
          //console.log("success from selectAll");
          resolve(result);
        },
        (_, error) => {
          //console.log("error from selectAll");
          reject(error);
        }
      );
    });
  });
  return promise;
}

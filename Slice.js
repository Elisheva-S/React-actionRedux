import { createSlice } from "@reduxjs/toolkit";
const listSlice = createSlice({
  name: "item",
  initialState: {
    arr: [],
    // index:Number,
    // inputTxt:String,
    // borderWid:Number,
    // color:String
    ob: {
      index: Number,
      inputTxt: String,
      borderWid: Number,
      color: String,
    },
    //   ,constructor(index,inputTxt,borderWid,color)
    //  {
    //      this.index-index,
    //      this.inputTxt=inputTxt,
    //      this.borderWid=borderWid,
    //      this.color=color
    //  }
  },
  reducers: {
    add: (state, action) => {
      if (action.payload !== "") {
        state.ob = [
          (state.index = state.arr.length),
          (state.inputTxt = action.payload),
          (state.borderWid = 1),
          (state.color = "blue"),
        ];
        state.arr = [...state.arr, state.ob];
        console.log(state.arr);
      } else console.log("INVALID VALUE!");
    },
    remove: (state, action) => {
      state.arr = [
        ...state.arr.slice(0, action.payload),
        ...state.arr.slice(action.payload + 1),
      ];
    },
    remark: (state, action) => {
      state.arr[action.payload][2] = 5;
    },
    critical: (state, action) => {
      state.arr[action.payload][3] = "red";
    },
    top: (state, action) => {
      state.arr = [
        state.arr[action.payload],
        ...state.arr.slice(0, action.payload),
        ...state.arr.slice(action.payload + 1),
      ];
    },
    edit: (state, action) => {
      //alert(state.arr[action.payload][1]);
      state.arr[action.payload][1] = "txt";
      console.log(state.arr[action.payload][1]);
    },
  },
});

export const { add, remove, remark, critical, top, edit } = listSlice.actions;
export default listSlice.reducer;

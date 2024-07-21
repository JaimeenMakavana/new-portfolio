import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  zIndexs: [
    { screen1Value: 7 },
    { screen1Value: 6 },
    { screen1Value: 5 },
    { screen1Value: 4 },
    { screen1Value: 3 },
    { screen1Value: 2 },
    { screen1Value: 1 },
  ],
};

const zIndexSlice = createSlice({
  name: "zIndexValue",
  initialState,
  reducers: {
    handleNext: (state: any, action: any) => {
      state.zIndexs.forEach((ele: any) => {
        ele.screen1Value =
          ele.screen1Value !== 7 ? ele.screen1Value + 1 : ele.screen1Value - 6;
      });
    },
    handlePrev: (state: any, action: any) => {
      state.zIndexs.forEach((ele: any) => {
        ele.screen1Value =
          ele.screen1Value !== 1 ? ele.screen1Value - 1 : ele.screen1Value + 6;
      });
    },
  },
});

export const { handleNext, handlePrev }: any = zIndexSlice.actions;

export default zIndexSlice.reducer;

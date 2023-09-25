import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: []
  },
  reducers: {
    saveUsers: (state: any, action: any) => {
      const { payload } = action;
      console.log("payload" + payload);
      state.data = [...state.data, payload];
    }
  }
});

export const { saveUsers } = usersSlice.actions;
export default usersSlice.reducer;
//state, action

import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topic",
  initialState: {
    topics: {
      123412: { id: "32425", name: "", icon: "asdasda" },
    },
    quidIds: [],
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state[id] = { id, name, icon };
    },
  },
});

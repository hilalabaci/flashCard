import { createSlice } from "@reduxjs/toolkit";

export const quizzes = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {
      id,
    },
    reducers: {
      addQuiz: (state, action) => {
        const { id, name, topicId, cardIds } = action.payload;
      },
    },
  },
});

import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import cardsSlice from "../features/cards/cardsSlice";
// import reducers

export default configureStore({
  reducer: {
    quizzes: quizzesReducer,
    topics: topicsReducer,
    cards: cardsSlice,
  },
});

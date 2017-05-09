import * as Redux from "redux";
import WikiPageReducer from "./WikiPage/WikiPage.reducer";

const reducer = Redux.combineReducers({
  wikipage: WikiPageReducer
})

export default reducer;

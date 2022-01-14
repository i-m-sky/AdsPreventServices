import { createStore,applyMiddleware } from "redux";
import { reducer } from "./features/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
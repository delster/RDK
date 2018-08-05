import React from "react";
import ReactDOM from "react-dom";
import Rune from "./RuneContainer";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import { initialState } from "./store";
import injectTapEventPlugin from "react-tap-event-plugin";

const composeEnhancers = (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__)
    ? composeWithDevTools({
        actionsBlacklist: [/* actions to be ignored in Redux DevTools */]
    })
    : compose;

const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
        applyMiddleware(
            createLogger()
            //sagaMiddleware
        )
    )
);

injectTapEventPlugin();

export const RUNE_ID = "a61d6619-fea1-4cba-81a5-60b0491b3240";

ReactDOM.render(
    <Provider store={store}>
        <Rune />
    </Provider>,
    document.getElementById("root")
);

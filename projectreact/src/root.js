import React from "react";
import store from "./store";
import { Provider } from "react-redux";
const root = (props)  => {
    return <Provider store={store}> {props.children}</Provider>;
};
export default root;
// 1. store - global state accessible throughout application
// 2. action - define what to do
// 3. reducer - describes how action changes from one state to another/ check what action is called and store will be modified
// 4. dispatch - performs the action to reducers

import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

export default store;
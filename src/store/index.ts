import { state } from "./state";
import { createStore } from "vuex";

export default createStore({
  state,
  mutations: {
    setState(state, title) {
      state.title = title;
    },
  },
  actions: {
    getdata(context) {
      context.commit("setState", 12345);
    },
  },
  modules: {},
});

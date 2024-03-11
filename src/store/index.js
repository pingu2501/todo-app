import { createStore } from "vuex";
import Localbase from "localbase";

let db = new Localbase("db");
db.config.debug = false

export default createStore({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    tasks: [
      // {
      //   id: 1,
      //   title: "wakeup",
      //   done: false,
      //   dueDate: "2023-5-5",
      // },
      // {
      //   id: 2,
      //   title: "have sex",
      //   done: false,
      //   dueDate: "2023-10-5",
      // },
      // {
      //   id: 3,
      //   title: "sleep",
      //   done: false,
      // },
    ],
    snackbar: {
      show: false,
      text: "",
    },
    sortable: false,
  },
  getters: {
    fiterTask(state) {
      if (!state.search) {
        return state.tasks;
      } else {
        return state.tasks.filter((task) =>
          task.title.toLowerCase().includes(state.search.toLowerCase())
        );
      }
    },
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
    toggleSort(state) {
      state.sortable = !state.sortable;
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    addTask(state, newTask) {
      state.tasks.push(newTask);
    },
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title;
    },
    saveDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },
    showSnackBar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };
      db.collection("tasks")
        .add(newTask)
        .then((task) => {
          commit("addTask", newTask);
          commit("showSnackBar", "Task Added!");
        });
    },
    doneTask({ state, commit }, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      db.collection("tasks")
        .doc({ id: id })
        .update({
          done: !task.done,
        })
        .then(() => {
          commit("doneTask", id);
        });
    },
    deleteTask({ commit }, id) {
      db.collection("tasks")
        .doc({ id: id })
        .delete()
        .then(() => {
          commit("deleteTask", id);
          commit("showSnackBar", "Task Deleted!");
        });
    },
    updateTaskTitle({ state, commit }, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      db.collection("tasks")
        .doc({ id: payload.id })
        .update({
          title: payload.title,
        })
        .then(() => {
          commit("updateTaskTitle", payload);
          commit("showSnackBar", "Task Updated!");
        });
    },
    saveDueDate({ state, commit }, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      db.collection("tasks")
        .doc({ id: payload.id })
        .update({
          dueDate: payload.dueDate,
        })
        .then(() => {
          commit("saveDueDate", payload);
          commit("showSnackBar", "Task Updated!");
        });
    },
    setTasks({ commit }, tasks) {
      // db.collection("tasks").set(tasks);
      commit("setTasks", tasks);
    },
    getTasks({ commit }) {
      db.collection("tasks")
        .get()
        .then((task) => {
          commit("setTasks", task);
        });
    },
  },
});

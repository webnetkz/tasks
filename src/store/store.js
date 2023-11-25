import { createStore } from 'vuex';

const store = createStore({
  state: {
    boards: [],
    lists: [],
    tasks: [],
    sub_tasks: [],
  },
  mutations: {
    addList(state, list) {
      state.lists.push(list);
      localStorage.setItem('lists', JSON.stringify(state.lists));
    },
    changeTitleList(state, listInfo) {
      const listIndex = state.lists.findIndex((list) => list.id === listInfo.id);

      if (listIndex !== -1) {
        state.lists[listIndex].title = listInfo.title;
        localStorage.setItem('lists', JSON.stringify(state.lists));
      }
    },
    removeList(state, listId) {
      // Удаляем список
      state.lists = state.lists.filter(list => list.id !== listId);
      localStorage.setItem('lists', JSON.stringify(state.lists));

      // Удаляем задачи, связанные с этим списком
      state.tasks = state.tasks.filter(task => task.id_list !== listId);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));

      // Удаляем подзадачи, связанные с этими задачами
      // state.sub_tasks = state.sub_tasks.filter(subTask => {
      //   const relatedTask = state.tasks.find(task => task.id === subTask.id_task);
      //   return relatedTask ? relatedTask.id_list !== listId : true;
      // });
      // localStorage.setItem('sub_tasks', JSON.stringify(state.sub_tasks));
    },
    addTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    changeTitleTask(state, taskInfo) {
      const taskIndex = state.tasks.findIndex((task) => task.id === taskInfo.id);

      if (taskIndex !== -1) {
        state.tasks[taskIndex].title = taskInfo.title;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
  actions: {
    createList({ commit }, list) {
      commit('addList', list);
    },
    updateList({ commit }, {id: listId, title: newTitle}) {
      commit('changeTitleList', {id: listId, title: newTitle});
    },
    createTask({ commit }, task) {
      commit('addTask', task);
    },
    updateTitleTask({ commit }, {id: taskId, title: newTitle}) {
      commit('changeTitleTask', {id: taskId, title: newTitle});
    },
    updateDescriptionTask({ commit }, {id: taskId, description: newTitle}) {
      commit('changeDescriptionTask', {id: taskId, description: newTitle});
    },
  },
  getters: {
    getTasks: (state) => {
      return state.tasks;
    },
  },
});

// При инициализации хранилища, попробуйте считать данные из localStorage
const lists = JSON.parse(localStorage.getItem('lists'));
if (lists) {
  store.state.lists = lists;
}

const tasks = JSON.parse(localStorage.getItem('tasks'));
if (tasks) {
  store.state.tasks = tasks;
}

export default store;

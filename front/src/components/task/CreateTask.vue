<script setup>

import { useStore } from 'vuex';

const store = useStore();
const props = defineProps(['listId']);

const taskCreate = () => {
  const tasks = store.state.tasks;
  
  let highestId = tasks.reduce((maxId, task) => {
  return task.id > maxId ? task.id : maxId;
  }, 0);
  highestId++;
  
  const newTask = {
    id: highestId, id_list: props.listId, position: 3, title: 'Новая задача '+highestId, description: 'Для списка '+props.listId, date: '01.01.2023', sub_task: true, status: true
  };

  store.commit('addTask', newTask);
};

</script>

<template>
  <img class="create-icon" src="/icons/create.svg" @click="taskCreate">
</template>

<style scoped>
.create-icon {
  width: 25px;
}
.create-icon:hover {
  cursor: pointer;
  transform: scale(1.2);
}
@media (min-width: 1024px) {

}
</style>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

import TaskComponent from '../task/Task.vue';
import CreateTaskComponent from '../task/CreateTask.vue';
import DeleteListComponent from './DeleteList.vue';


const store = useStore();
const lists = ref(computed(() => store.state.lists));
const editingList = ref(null);
const newListTitle = ref('');

const startEditingList = (list) => {
  editingList.value = list;
  newListTitle.value = list.title;
};

const stopEditingList = () => {
  editingList.value = null;
  newListTitle.value = '';
};

const saveListTitle = () => {
  if (editingList.value) {
    editingList.value.title = newListTitle.value;
    store.dispatch('updateList', {id: editingList.value.id, title: editingList.value.title});
    stopEditingList();
  }
};

</script>

<template>
  <div class="list" v-for="list in lists" :key="list.id">
    <div v-if="editingList === list">
      <input 
        v-model="newListTitle"
        class="input"
        @blur="saveListTitle"
        @keydown.enter="saveListTitle"
        @keydown.esc="stopEditingList"
      />
    </div>
    <div v-else>
      <span class="title-list" @click="startEditingList(list)">
        {{ list.title }}
      </span>
    </div>
    <TaskComponent :listId="list.id"/>
    <CreateTaskComponent :listId="list.id" />
    <DeleteListComponent :listId="list.id" />
  </div>
</template>

<style scoped>
.list {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-width: 220px;
  width: 220px;
  height: 100%;
  min-height: 88vh;
  background: var(--gray);
  border: 1px dotted rgba(0,0,0,0);
  z-index: 10;
  border-radius: var(--border-radius);
  margin-right: 7px;
  padding-top: 5px;
}

.title-list {
  display: block;
  width: 100%;
  cursor: pointer;
  margin-bottom: 5px;
}
.title-list:hover::after {
  content: "\2710";
  margin-left: 5px;
  position: absolute;

}

.list:last-child {
  margin-right: 50px;
}
.list > div {
  width: 96%;
}

@media (min-width: 1024px) {

}
</style>

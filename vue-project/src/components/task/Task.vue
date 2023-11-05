<script setup>
import { ref, computed, defineProps } from 'vue';
import { useStore } from 'vuex';
// import draggable from 'vuedraggable';

import TaskStatusComponent from './TaskStatus.vue';


const store = useStore();
const props = defineProps(['listId']);
const editingTask = ref(null);
const newTaskTitle = ref('');
const filteredTasks = computed(() => {
  return props.listId ? store.state.tasks.filter(task => task.id_list === props.listId) : [];
});

const startEditingTask = (task) => {
  editingTask.value = task;
  newTaskTitle.value = task.title;
};

const stopEditingTask = () => {
  editingTask.value = null;
  newTaskTitle.value = '';
};

const saveTaskTitle = () => {
  if (editingTask.value) {
    editingTask.value.title = newTaskTitle.value;
    store.dispatch('updateTask', {id: editingTask.value.id, title: editingTask.value.title});
    stopEditingTask();
  }
};

</script>

<template>
  <!-- <draggable v-model="filteredTasks" tag="div" :itemKey="list => list.id" class="task-draggable">
    <template #item="{ element, index }"> -->
      <!-- <div class="task"> -->
      <div class="task" v-for="task in filteredTasks" :key="task.id">
        <TaskStatusComponent :taskId="task.id" v-if="editingTask !== task" />
        <div>
          <div v-if="editingTask === task">
            <input 
              v-model="newTaskTitle"
              class="input"
              @blur="saveTaskTitle"
              @keydown.enter="saveTaskTitle"
              @keydown.esc="stopEditingTask"
            />
          </div>
          <div v-else>
            <p class="title-task" @click="startEditingTask(task)">{{ task.title }}</p>
          </div>
          <p class="description-task">{{ task.description }}</p>
        </div>
      </div>
      <!-- </div>
    </template> -->
  <!-- </draggable> -->
</template>

<style scoped>
.task {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 15px;
  max-width: 220px;
  height: 80px;
  background: var(--white);
  backdrop-filter: blur(12px);
  z-index: 10;
  border-radius: var(--border-radius);
  margin-bottom: 5px;
  cursor: pointer;
  border: 1px solid var(--gray);
}
.task:hover {
  background: var(--gray);
  border-color: var(--green);
}
.title-task {
  font-weight: 600;
}

.description-task {
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (min-width: 1024px) {

}
</style>

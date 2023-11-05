<script setup>
import { ref, computed, defineProps } from 'vue';
import { useStore } from 'vuex';
// import draggable from 'vuedraggable';

import TaskTitleComponent from './TaskTitle.vue';
import TaskStatusComponent from './TaskStatus.vue';


const store = useStore();
const props = defineProps(['listId']);

const filteredTasks = computed(() => {
  return props.listId ? store.state.tasks.filter(task => task.id_list === props.listId) : [];
});

</script>

<template>
  <!-- <draggable v-model="filteredTasks" tag="div" :itemKey="list => list.id" class="task-draggable">
    <template #item="{ element, index }"> -->
      <!-- <div class="task"> -->
      <div class="task" v-for="task in filteredTasks" :key="task.id">
        <TaskStatusComponent :taskId="task.id" />
        <div>
          <TaskTitleComponent :taskId="task.id" @click="hiddenStatus"/>
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
.description-task {
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (min-width: 1024px) {

}
</style>

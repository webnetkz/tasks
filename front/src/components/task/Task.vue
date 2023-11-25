<script setup>
import { ref, computed, defineProps, provide } from 'vue';
import { useStore } from 'vuex';
// import draggable from 'vuedraggable';

import TitleTaskComponent from './TitleTask.vue';
import DescriptionTaskComponent from './DescriptionTask.vue';
import DeteleTaskComponent from './DeleteTask.vue';

const store = useStore();
const props = defineProps(['listId']);
const editingTask = ref(null);

provide('editingTask', editingTask);

const filteredTasks = computed(() => {
  return props.listId ? store.state.tasks.filter(task => task.id_list === props.listId) : [];
});


</script>

<template>
  <!-- <draggable v-model="filteredTasks" tag="div" :itemKey="list => list.id" class="task-draggable">
    <template #item="{ element, index }"> -->
      <!-- <div class="task"> -->
      <div class="task" v-for="task in filteredTasks" :key="task.id">
        <DeteleTaskComponent :taskId="task.id" />
        <div>
          <TitleTaskComponent :taskId="task.id" @click="hiddenStatus"/>
          <DescriptionTaskComponent :taskId="task.id" @click="hiddenStatus"/>
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

.task:has(input) .status-task {
  display: none;
}
.task:hover {
  background: var(--gray);
  border-color: var(--green);
}

@media (min-width: 1024px) {

}
</style>

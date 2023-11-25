<script setup>
import { defineProps, inject } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps(['taskId']);
const editingTask = inject('editingTask');


const completedTask = () => {  
  store.commit('removeTask', props.taskId);
};

</script>

<template>
  <div class="status-task" @click="completedTask">
  </div>
</template>


<style scoped>
.status-task {
  position: relative;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border: 1px solid var(--green);
}
.status-task:hover {
  background: var(--green);
  box-shadow: 0 0 15px var(--green);
}

@media (min-width: 1024px) {

}
</style>

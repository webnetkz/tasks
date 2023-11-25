<script setup>
import { ref, computed, defineProps, inject } from 'vue';
import { useStore } from 'vuex';

const newTaskDescription = ref('');
const store = useStore();
const editingTask = inject('editingTask');
const props = defineProps({
  taskId: Number
});

const task = computed(() => {
  return store.state.tasks.find(task => task.id === props.taskId);
});

const startEditingTask = (task) => {
  editingTask.value = task;
  newTaskDescription.value = task.description;
};

const stopEditingTask = () => {
  editingTask.value = null;
  newTaskDescription.value = '';
};

const saveTaskDescription = () => {
  if (editingTask.value) {
    editingTask.value.description = newTaskDescription.value;
    store.dispatch('updateTask', {id: editingTask.value.id, description: editingTask.value.description});
    stopEditingTask();
  }
};

</script>

<template>
    <div v-if="editingTask === task" class="task-title-container">
        <input 
            v-model="newTaskDescription"
            class="input input-description-task"
            @blur="saveTaskDescription"
            @keydown.enter="saveTaskDescription"
            @keydown.esc="stopEditingTask"
        />
    </div>
    <div v-else>
        <p class="description-task" @click="startEditingTask(task)">{{ task.description }}</p>
    </div>
</template>

<style scoped>
.input-description-task {

}
.description-task {
  font-weight: 100;
}
.description-task {
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.description-task:hover::after {
  content: "\2710";
  margin-left: 5px;
  position: absolute;
}

</style>
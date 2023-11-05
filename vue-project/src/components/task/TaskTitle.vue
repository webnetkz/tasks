<script setup>
import { ref, computed, defineProps } from 'vue';
import { useStore } from 'vuex';

const newTaskTitle = ref('');
const editingTask = ref(null);
const store = useStore();
const props = defineProps({
  taskId: Number
});

const task = computed(() => {
  return store.state.tasks.find(task => task.id === props.taskId);
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
</template>

<style scoped>
.title-task {
  font-weight: 600;
}
.title-task {
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title-task:hover::after {
  content: "\2710";
  margin-left: 5px;
  position: absolute;
}

</style>
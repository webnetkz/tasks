<script setup>

import { useStore } from 'vuex';
import { defineProps } from 'vue';


const store = useStore();
const props = defineProps(['listId']);

const deleteList = () => {  
  store.commit('removeList', props.listId);
};

</script>

<template>
    <button @click="deleteList">- Delete list</button>
</template>

<style scoped>

button {
  margin-bottom: 20px;
}

@media (min-width: 1024px) {

}
</style>

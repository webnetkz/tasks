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
    <img class="delete-icon" src="/icons/delete.svg" @click="deleteList">
</template>

<style scoped>
.delete-icon {
  width: 25px;
}
.delete-icon:hover {
  cursor: pointer;
  transform: scale(1.2);
}

@media (min-width: 1024px) {

}
</style>

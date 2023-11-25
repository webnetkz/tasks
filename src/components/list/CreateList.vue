<script setup>

import { useStore } from 'vuex';

const store = useStore();

const listCreate = () => {
    const lists = store.state.lists;

    let highestId = lists.reduce((maxId, list) => {
    return list.id > maxId ? list.id : maxId;
    }, 0);
    highestId++;

    const newList = {
        id: highestId, id_board: 1, title: 'Новый список '+highestId
    };

    store.commit('addList', newList);
};

</script>

<template>
    <img class="create-icon" src="/icons/create.svg" @click="listCreate">
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

<script setup>
import CreateNewListComponent from '../list/CreateList.vue';

</script>

<template>
  <header>
    <CreateNewListComponent />
    
  </header>
</template>

<style scoped>
header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left:0;
  width: 100vw;
  min-height: 50px;
  background: var(--gray);
  backdrop-filter: blur(12px);
  z-index: 12;
  padding: 3px 12px;
  border-bottom: 0.1px solid black;
}

@media (min-width: 1024px) {

}
</style>

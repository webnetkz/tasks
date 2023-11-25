<script setup>
import ListComponent from './list/List.vue';

</script>

<template>
  <div class="board">
    <ListComponent />
  </div>
</template>

<style scoped>
.board {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  top: 60px;
  left: 1vw;
  min-width: 100%;
  width: 100%;
  padding: 10px 10px;
  min-height: calc(98vh - 60px);
  background: var(--white);
  z-index: 10;
  border-radius: var(--border-radius);
}

@media (min-width: 1024px) {

}
</style>




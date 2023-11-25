<script setup>


</script>

<template>
  <div>
    <div class="task-more">
      <div>
        <p class="title-task-more">item.title </p>
        <p>item.description</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.task-more {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 15px;
  max-width: 220px;
  height: 60px;
  background: var(--gray);
  backdrop-filter: blur(12px);
  z-index: 10;
  border-radius: var(--border-radius);
  margin-bottom: 5px;
  cursor: pointer;
  border: 1px solid var(--gray);
}
.task-more:hover {
  background: var(--gray);
  border-color: var(--green);
}

.title-task-more {
  font-weight: 600;
}

@media (min-width: 1024px) {

}
</style>

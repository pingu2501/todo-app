<template>
  <div class="no-task">
    <v-icon icon="mdi-check" size="100" color="blue"></v-icon>
    <div class="text-h5">No Tasks</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.no-task {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
}
</style>

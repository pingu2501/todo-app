<template>
  <v-btn @click="$store.commit('toggleSort')" color="primary" class="button-sort"> Done Sorting </v-btn>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button-sort{
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
}
</style>

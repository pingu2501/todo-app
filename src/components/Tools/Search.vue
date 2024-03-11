<template>
  <v-text-field
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    placeholder="Search"
    :model-value="$store.state.search"
    @update:model-value="(event) => $store.commit('setSearch', event)"
    clearable
    density="compact"
    prepend-inner-icon="mdi-magnify"
    class="expanding-search pa-2"
    :class="{ closed: searchClosed && !$store.state.search }"
    hide-details
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      searchClosed: true,
    };
  },
};
</script>

<style lang="scss">
.expanding-search {
  transition: max-width 0.3s;
  .v-field__outline {
    &::before,
    &::after {
      border-color: transparent !important;
    }
  }
}

.expanding-search.closed {
  max-width: 60px !important;
  .v-field__overlay {
    background-color: transparent !important;
  }
}
</style>

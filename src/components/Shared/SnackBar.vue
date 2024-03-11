<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="$store.state.snackbar.show">
      {{ $store.state.snackbar.text }}

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="$store.state.snackbar.show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {};
</script>

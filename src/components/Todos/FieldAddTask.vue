<template>
  <v-text-field
    v-model="newTaskTitle"
    class="pa-3"
    label="Add Task"
    variant="outlined"
    hide-details
    clearable
    density="compact"
    @keyup.enter="addTask"
  >
    <template v-slot:append-inner>
      <v-icon color="blue-darken-2" @click="addTask" :disabled="invalidTaskInput">
        mdi-plus</v-icon
      >
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
    };
  },
  computed: {
    invalidTaskInput() {
      return !this.newTaskTitle;
    },
  },
  methods: {
    addTask() {
      if (!this.invalidTaskInput) {
        this.$store.dispatch("addTask", this.newTaskTitle);
        this.newTaskTitle = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

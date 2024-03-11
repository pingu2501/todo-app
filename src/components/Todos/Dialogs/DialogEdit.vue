<template>
  <v-dialog :model-value="true" max-width="290" persistent>
    <v-card text="Edit the title of this task" title="Edit task">
      <v-text-field
        v-model="newTaskTitle"
        variant="underlined"
        class="pt-0 pl-6 pr-6"
        @keyup.enter="updateTask"
      />
      <template v-slot:actions>
        <v-spacer></v-spacer>
        <v-btn @click="$emit('close')"> Cancel </v-btn>
        <v-btn
          color="red lighten-1"
          @click="updateTask()"
          :disabled="taskTitleInvalid"
        >
          Save
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ["task"],
  data() {
    return {
      newTaskTitle: null,
    };
  },
  computed: {
    taskTitleInvalid() {
      return !this.newTaskTitle || this.newTaskTitle == this.task.title;
    },
  },
  methods: {
    updateTask() {
      if (!this.taskTitleInvalid) {
        let payload = {
          id: this.task.id,
          title: this.newTaskTitle,
        };
        this.$store.dispatch("updateTaskTitle", payload);
        this.$emit("close");
      }
    },
  },
  mounted() {
    this.newTaskTitle = this.task.title;
  },
};
</script>

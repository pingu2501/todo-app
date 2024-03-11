<template>
  <v-list class="pt-0" flat>
    <draggable v-model="tasks" handle=".handle">
      <task v-for="task in tasks" :key="task.id" :task="task" />
    </draggable>
  </v-list>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";
export default {
  computed: {
    tasks: {
      get() {
        return this.$store.getters.fiterTask;
      },
      set(value) {
        this.$store.dispatch("setTasks", value);
      },
    },
  },
  components: {
    task: require("@/components/Todos/Task.vue").default,
    draggable: VueDraggableNext,
  },
};
</script>

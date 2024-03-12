<template>
  <div>
    <v-list-item
      :class="{ blue: task.done }"
      @click="$store.dispatch('doneTask', task.id)"
      :ripple="false"
      class="white"
    >
      <template v-slot:prepend>
        <v-checkbox-btn
          :model-value="task.done"
          :ripple="false"
        ></v-checkbox-btn>
      </template>
      <v-list-item-title
        :class="{ 'text-decoration-line-through': task.done }"
        >{{ task.title }}</v-list-item-title
      >
      <template v-slot:append>
        <v-list-item-action v-if="task.dueDate">
          <div>
            <v-icon icon="mdi-calendar" size="x-small"></v-icon>
          </div>
          <div class="text-subtitle-1">{{ niceDate }}</div>
        </v-list-item-action>
        <v-list-item-action>
          <task-menu :task="task" />
        </v-list-item-action>
        <v-list-item-action v-if="$store.state.sortable">
          <v-btn
            icon="mdi-drag-horizontal"
            variant="plain"
            class="handle drag-button"
            size="x-small"
            :ripple="false"
          >
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["task"],
  computed: {
    niceDate() {
      return moment(this.task.dueDate).format("MMM D");
    },
  },
  components: {
    "task-menu": require("@/components/Todos/TaskMenu.vue").default,
  },
};
</script>

<style lang="scss">
.text-subtitle-1 {
  font-size: 0.5rem !important;
}
.sortable-ghost {
  opacity: 0;
}
.sortable-drag {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.blue {
  background-color: #0085ff4d;
}
.drag-button {
  i {
    color: #002fff !important;
  }
}
</style>

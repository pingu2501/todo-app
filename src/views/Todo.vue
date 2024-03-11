<template>
  <div class="home">
    <field-add-task />
    <list-tasks v-if="$store.state.tasks.length" />
    <no-tasks v-else />
    <button-done-sorting v-if="$store.state.sortable" />
  </div>
</template>

<script>
// Components

export default {
  name: "HomeView",
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {},
  components: {
    "field-add-task": require("@/components/Todos/FieldAddTask.vue").default,
    "list-tasks": require("@/components/Todos/ListTasks.vue").default,
    "no-tasks": require("@/components/Todos/NoTasks.vue").default,
    "button-done-sorting": require("@/components/Todos/ButtonDoneSorting.vue")
      .default,
  },
};
</script>

<style lang="scss">
.v-list-item__content {
  display: contents;
}
</style>

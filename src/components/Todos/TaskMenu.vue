<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-icon
          icon="mdi-dots-vertical"
          v-bind="props"
          color="primary"
          size="x-small"
        ></v-icon>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon" size="x-small"></v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <dialog-edit
      v-if="dialogs.edit"
      :task="task"
      @close="dialogs.edit = false"
    />
    <dialog-due-date
      v-if="dialogs.dueDate"
      :task="task"
      @close="dialogs.dueDate = false"
    />
    <dialog-delete
      v-if="dialogs.delete"
      :task="task"
      @close="dialogs.delete = false"
    />
  </div>
</template>

<script>
export default {
  props: ["task"],
  data: () => ({
    dialogs: {
      edit: false,
      dueDate: false,
      delete: false,
    },
    items: [
      {
        title: "Edit",
        icon: "mdi-pencil",
        click() {
          this.dialogs.edit = true;
        },
      },
      {
        title: "Due Date",
        icon: "mdi-calendar",
        click() {
          this.dialogs.dueDate = true;
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        click() {
          this.dialogs.delete = true;
        },
      },
      {
        title: "Sort",
        icon: "mdi-drag-horizontal",
        click() {
          this.$store.commit('toggleSort')
        },
      },
    ],
  }),
  methods: {
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
  components: {
    "dialog-edit": require("@/components/Todos/Dialogs/DialogEdit.vue").default,
    "dialog-due-date": require("@/components/Todos/Dialogs/DialogDueDate.vue")
      .default,
    "dialog-delete": require("@/components/Todos/Dialogs/DialogDelete.vue")
      .default,
  },
};
</script>

<style lang="scss" scoped></style>

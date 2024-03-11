<template>
  <v-dialog :model-value="true" max-width="400" persistent>
    <v-date-picker
      color="primary"
      :model-value="date"
      @update:modelValue="(e) => updateDueDate(e)"
    >
      <template v-slot:actions>
        <v-spacer></v-spacer>
        <v-btn @click="$emit('close')"> Cancel </v-btn>
        <v-btn @click="saveDueDate"> Save </v-btn>
      </template>
    </v-date-picker>
  </v-dialog>
</template>

<script>
import { useDate } from "vuetify";

export default {
  props: ["task"],
  data() {
    return {
      date: null,
    };
  },
  methods: {
    updateDueDate(e) {
      this.date = e;
    },
    saveDueDate() {
      let payload = {
        id: this.task.id,
        dueDate: this.date,
      };
      this.$store.dispatch("saveDueDate", payload);
      this.$emit('close')
    },
  },
  mounted() {
    if (this.task.dueDate) {
      const adapter = useDate();
      const date = this.task.dueDate;
      this.date = adapter.parseISO(date);
    }
  },
};
</script>

<style lang="scss" scoped></style>

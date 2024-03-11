<template>
  <v-dialog :model-value="true" max-width="290" persistent>
    <v-card
      text="Are you sure you want to delete this task?"
      title="Delete task?"  
    >
      <template v-slot:actions>
        <v-spacer></v-spacer>
        <v-btn @click="$emit('close')"> No </v-btn>
        <v-btn
          @click="$store.dispatch('deleteTask', task.id)"
          color="red lighten-1"
        >
          Yes
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
    props: ['task']
};
</script>

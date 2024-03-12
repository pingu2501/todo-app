<template>
  <div class="text-caption ml-5 white">{{ date }}</div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      date: null,
    };
  },
  methods: {
    getDate() {
      this.date = moment().format("MMMM D, h:mm:ss a");
      setTimeout(this.getDate, 1000);
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>

<style lang="scss" scoped>
.white {
  color: white !important;
}
</style>

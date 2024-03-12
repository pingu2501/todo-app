<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="768">
      <v-img
        src="./components/Images/Blue Illustrated Mountains Wallpaper Mural _ Hovia.jpeg"
        cover
        height="170"
        class="pa-4 pt-7"
      >
        <v-avatar color="info" size="x-large" class="mb-4">
          <v-img
            alt="Avatar"
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          ></v-img>
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">
          Priyang Joshi
        </div>
        <div class="white--text text-subtitle-2">pingu_pahadi</div>
      </v-img>

      <v-list density="compact" nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          :to="item.to"
          color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :class="$route.path == '/' ? 'app-bar' : 'app-bar-about'"
      image="https://galenlovenauthor.files.wordpress.com/2014/12/distance-blue-clouds-mountains-perspective-2538592-480x320.jpg"
      density="prominent"
      :height="$route.path == '/' ? '210' : '170'"
    >
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>

      <v-container class="header-container pa-6">
        <v-row>
          <v-app-bar-nav-icon
            @click="drawer = !drawer"
            color="#ffffff"
          ></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search />
        </v-row>
        <v-row class="mt-8">
          <v-app-bar-title class="text-h4 ml-4 white--text">{{
            $store.state.appTitle
          }}</v-app-bar-title>
        </v-row>
        <v-row class="mt-1">
          <live-date-time />
        </v-row>
        <v-row v-if="$route.path === '/'">
          <field-add-task />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main :class="$route.path === '/' ? 'main' : 'main-about'">
      <router-view></router-view>
      <snack-bar />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
</script>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { text: "Todo", icon: "mdi-format-list-bulleted-type", to: "/" },
      { text: "About", icon: "mdi-comment-question-outline", to: "/about" },
    ],
  }),
  mounted() {
    console.log(this.$route);
    this.$store.dispatch("getTasks");
  },
  components: {
    search: require("@/components/Tools/Search.vue").default,
    "live-date-time": require("@/components/Tools/LiveDateTime.vue").default,
    "field-add-task": require("@/components/Todos/FieldAddTask.vue").default,
    "snack-bar": require("@/components/Shared/SnackBar.vue").default,
  },
};
</script>

<style lang="scss">
.main {
  --v-layout-top: 210px !important;
}
.main-about {
  --v-layout-top: 170px !important;
}
.app-bar {
  .v-toolbar__content {
    height: 210px !important;
  }
}
.app-bar-about {
  .v-toolbar__content {
    height: 170px !important;
  }
}
.white--text {
  color: white !important;
}
.header-container {
  max-width: none !important;
}
</style>

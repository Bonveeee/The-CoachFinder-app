<template>
  <q-layout>
    <q-header>
      <q-toolbar>
        <q-toolbar-title @click="$router.replace('/home')" icon-right="home">
          Coach Finder
        </q-toolbar-title>
        <q-tabs v-model="tab" fixed-center>
          <q-tab
            @click="$router.replace('/home')"
            icon-right="home"
            name="home"
            label="Home"
            aria-label="Go to home page"
          />
          <q-tab
            @click="$router.replace('/coaches')"
            icon-right="coaches"
            name="coaches"
            label="Coaches"
            aria-label="Go to coaches page"
          />
          <q-tab
            @click="$router.replace('/requests')"
            icon-right="requests"
            name="requests"
            label="Requests"
            aria-label="Go to requests page"
          />
          <q-tab
            @click="$router.replace('/login')"
            icon-right="login"
            name="login"
            label="login"
            aria-label="Go to login page"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterArea />
  </q-layout>
</template>
<script>
import { defineComponent, ref } from "vue";
import FooterArea from "components/FooterArea.vue";


export default defineComponent({
  name: "MainLayout",
  components: {
    FooterArea,
  },
  setup() {
    const tab = ref("home");
    return { tab };
  },
});
</script>
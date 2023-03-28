<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
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
          />
          <q-tab
            @click="$router.replace('/coaches')"
            icon-right="coaches"
            name="coaches"
            label="Coaches"
          />
          <q-tab
            @click="$router.replace('/players')"
            icon-right="players"
            name="players"
            label="Players"
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
  setup() {
    const tab = ref("home");
    return { tab };
  },
  components: {
    FooterArea,
  },
});
</script>

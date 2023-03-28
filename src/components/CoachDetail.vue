<template>
    <q-page padding>
      <!-- content -->
      <h2>Coach Detail</h2>
      <router-view></router-view>
      <q-tabs v-model="tab" fixed-center>
            <q-tab
              @click="$router.replace('/coaches/c1/contact')"
              icon-right="Contact"
              name="Contact"
              label="Contact"
          /></q-tabs>
    </q-page>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "CoachDetail",
    setup() {
      const tab = ref("contact");
      return { tab };
    },
    components: {},
  });
  </script>
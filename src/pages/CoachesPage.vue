<template>
  <q-page-container>
    <q-page padding>
      <!-- content -->
      <section>
        <div>FIlTER</div>
      </section>

      <section>
        <div class="controls">
          <q-btn flat icon="refresh" @click="refresh">refresh</q-btn>
          <q-tabs v-model="tab" fixed-center>
            <q-tab
              @click="$router.replace('/login')"
              icon-right="Register"
              name="Register"
              label="Register As A Coach"
          /></q-tabs>
        </div>
        <ul>
          list Coaches
        </ul>
      </section>
    </q-page>
  </q-page-container>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CoachesPage",
  setup() {
    const tab = ref("login");
    return { tab };
  },
  components: {},
});
</script>

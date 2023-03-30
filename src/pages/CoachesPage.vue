<template>
  <q-page-container>
    <q-page padding>
      <!-- content -->
      <section>
        <div>FIlTER</div>
      </section>

      <section>
        <base-card>
          <div class="controls">
            <base-button mode="outline">refresh</base-button>
            <base-button 
              v-model="tab"
            @click="$router.replace('/login')"
              icon-right="Register"
              name="Register"
              label="Register As A Coach"
            >
              Register As coach</base-button
            >
          </div>
          <ul v-if="hasCoaches">
            <coach-list
              v-for="coach in filteredCoaches"
              :key="coach.id"
              :id="coach.id"
              :first-name="coach.firstName"
              :last-name="coach.lastName"
              :rate="coach.hourlyRate"
              :areas="coach.areas"
            ></coach-list>
          </ul>
          <h3 v-else>No coaches found</h3>
        </base-card>
      </section>
    </q-page>
  </q-page-container>
</template>

<script>
import { defineComponent, ref } from "vue";
import CoachList from "src/components/CoachList.vue";
import BaseCard from "src/components/UI/BaseCard.vue";
import BaseButton from "src/components/UI/BaseButton.vue";
export default defineComponent({
  name: "CoachesPage",
  setup() {
    const tab = ref("login");
    return { tab };
  },
  components: {
    CoachList,
    BaseCard,
    BaseButton,
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
});
</script>

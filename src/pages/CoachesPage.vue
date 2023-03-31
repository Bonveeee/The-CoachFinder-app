<template>
  <section>
    <!-- content -->
    <coach-filter @change-filter="setFilter"></coach-filter>
  </section>

  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">refresh</base-button>
        <base-button
          v-if="!isCoach"
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
</template>

<script>
import { defineComponent, ref } from "vue";
import CoachList from "src/components/CoachList.vue";
import BaseCard from "src/components/UI/BaseCard.vue";
import BaseButton from "src/components/UI/BaseButton.vue";
import CoachFilter from "src/components/CoachFilter.vue";
export default defineComponent({
  name: "CoachesPage",
  setup() {
    const tab = ref("login");
    return { tab };
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  components: {
    CoachList,
    BaseCard,
    BaseButton,
    CoachFilter,
  },
  methods: {
    setFilter(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
  computed: {
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backn && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
});
</script>

import mutations from "../coaches/mutations";
import actions from "../coaches/actions.js";
import getters from "../coaches/getters.js";

export default {
  namespaced: true,
  state() {
    return {
      // userIsCoach: true,
      lastFetched: null,
      coaches: [
        {
          id: "c1",
          firstName: "Kimani",
          lastName: "Ichungwa",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm Kimani and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Simon",
          lastName: "Cheraggei",
          areas: ["frontend", "career"],
          description:
            "I am Cheraggei and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
      ],
    };
  },
  getters,
  actions,
  mutations,
};

<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="Firstname">Firstname</label>
      <input type="text" id="FirstName" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastName">Lastname</label>
      <input type="text" id="lastName" v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model="description" />
    </div>
    <div class="form-control">
      <label for="rate">Rate per Hour</label>
      <input type="number" id="rate" v-modelnumber="rate" />
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
        <label for="frontend">Frontend Development</label>
        <div>
          <input type="checkbox" id="backend" value="backend" v-model="areas" />
          <label for="backend">Backend Development</label>
        </div>
        <div>
          <input type="checkbox" id="career" value="design" v-model="areas" />
          <label for="career">Career Advisor</label>
        </div>
      </div>
    </div>
    <base-button >Register</base-button>
  </form>
</template>

<script>
import BaseButton from "src/components/UI/BaseButton.vue";
export default {
    emits: ['save-data'],
  // name: 'PageName',
  components: {
    BaseButton,
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        description: "",
        rate: 0,
        areas: [],
      },
    };
  },
  methods: {
    submitForm() {
      // this.$store.dispatch('register', this.form)
      const formData = {
        first: this.firstName,
        last: this.lastName,
        descr: this.description,
        rate: this.rate,
        areas: this.areas,
      };
     this.$emit('save-data', formData)
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>

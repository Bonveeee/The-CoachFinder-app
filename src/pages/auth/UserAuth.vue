<template>
  <base-card>
    <form action="" @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <p v-if="!formIsValid">
        Please Enter a valid email and passoerd must be at least 6 characters
        long
      </p>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="passowrd" id="password" v-model="password" />
      </div>
      <base-button >{{ submitButtonCaption }}</base-button>
     
     <base-button type="button" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
    </form>
  </base-card>
</template>

<script>
import BaseButton from "src/components/UI/BaseButton.vue";
import BaseCard from "src/components/UI/BaseCard.vue";
export default {
  components: {
    BaseButton,
    BaseCard,
  },
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "login") {
        return "Login";
      } else {
        return "Signup";
      }
    },
  },
  switchModeButtonCaption() {
    if (this.mode === "login") {
      return "Signup instead";
    } else {
      return "Login Instead";
    }
  },

  methods: {
    submitForm() {
      this.formIsValid = true;

      if (
        this.email === "" ||
        this.password.length < 6 ||
        !this.email.includes("@")
      ) {
        this.formIsValid = false;
        return;
      }

      if (this.mode === 'login') {
        //this.$store.dispatch("login", { email: this.email, password: this.password });
      } else {
        this.$store.dispatch("signup", { 
            email: this.email, 
            password: this.password
         });
      }


    },
    switchAuthMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>

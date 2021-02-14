// pages/login.vue
<template>
  <div>
    <i @click="login">Click to Login</i>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Login",
  components: {
    //
  },
  computed: {
    auth() {
      return this.$auth0;
    }
  },
  mounted() {
    //
  },
  methods: {
    login() {
      this.$auth0
        .loginPopup();
}
  }
});
</script>

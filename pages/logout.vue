// pages/logout.vue
<template>
  <div>
    <i @click="logout">Click to Logout</i>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Logout',
  components: {
    //
  },
  mounted() {
    //
  },
  methods: {
    async logout() {
      await this.$auth0.logout()
    }
  }
})
</script>

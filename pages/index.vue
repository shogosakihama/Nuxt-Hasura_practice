<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import users from "~/apollo/queries/fetchUsers";

export default {
  apollo: {
    users: {
      prefetch: true,
      query: users
    }
  },
  head() {
    return {
      title: "Users List"
    };
  }
};
</script>

<style>
div {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

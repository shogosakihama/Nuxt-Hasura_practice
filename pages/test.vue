<template>
  <div>
    <div>{{ title }}</div>
    <h1>{{ $store.state.message }}</h1>

    <div @click="$store.dispatch('doit')">
      <a>clicked: {{ $store.state.counter }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Hello",
      message: "this is message."
    };
  }
};
</script>

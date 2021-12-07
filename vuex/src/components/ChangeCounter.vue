<template>
  <button @click="addOne">Add Two</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // return (this.$store.state.counter += 1);
      this.$store.commit('increase', { value: 2 });
    },
  },
};
</script>
<template>
  <button @click="addOne">Add one</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // return (this.$store.state.counter += 1);
      this.$store.commit('increment');
    },
  },
};
</script>
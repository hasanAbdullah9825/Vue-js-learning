<template>
  <base-container title="Vuex">
    <TheCounter></TheCounter>
    <button @click="addOne">Add 1</button>
    <ChangeCounter></ChangeCounter>
    <FavoriteCounter></FavoriteCounter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteCounter from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    TheCounter,
    FavoriteCounter,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    addOne() {
      //this.$store.state.counter += 11;
      this.$store.commit('increment');
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
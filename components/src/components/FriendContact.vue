<template>
  <ul>
    <li>
      <h2>{{ name }} {{ isFavorite ? "(favorite)" : "" }}</h2>
      <button @click="toggleDetails">ShowDetails</button>
      <button @click="toggleFavorite">toggleFavorite</button>
      <ul v-if="detailsAreVisible">
        <li>
          <strong>phone</strong>
          {{ phoneNumber }}
        </li>
        <li>
          <strong>Email</strong>
          {{ emailAddress }}
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
<style >
</style>
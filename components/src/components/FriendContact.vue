<template>
  <ul>
    <li>
      <h2>{{ name }} {{ isFavorite ? "(favorite)" : "" }}</h2>
      <button @click="toggleDetails">ShowDetails</button>
      <button @click="toggleFavorite">toggleFavorite</button>
      <button @click="deleteFriend">Delete</button>
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
      type: Boolean,
      required: false,
    },
  },
  emits:['toggle-favorite','delete-friend'],
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
    deleteFriend(){
      this.$emit("delete-friend",this.id);
    }
  },
};
</script>
<style >
</style>
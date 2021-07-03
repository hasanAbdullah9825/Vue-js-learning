<template>
  <ul>
    <li>
      <h2>{{ name }} {{ friendIsFavorite === "1" ? "(favorite)" : "" }}</h2>
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
  props: ["name", "emailAddress", "phoneNumber", "isFavorite"],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
      friendIsFavorite:this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {

        if(this.friendIsFavorite==='1'){
            this.friendIsFavorite="0";
        }
        else{
            this.friendIsFavorite="1";
        }
    },
  },
};
</script>
<style >
</style>
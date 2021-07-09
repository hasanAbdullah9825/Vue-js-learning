<template>
  <form @submit.prevent="addUser">
    <div>
      <label for="">Username</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label for="">Age</label>
      <input type="text" v-model="age" />
      
    </div>
    <div><button type="submit">Add User</button></div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    addUser() {
        
       this.$emit("add-user", this.name, this.age);
    },
  },
};
</script>
<style>
</style>
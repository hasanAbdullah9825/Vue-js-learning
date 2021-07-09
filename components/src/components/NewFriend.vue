<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="">Name</label>
      <input type="text" name="name" v-model="name" />
    </div>
    <div>
      <label for="">Phone</label>
      <input type="tel" v-model="phone" />
    </div>
    <div>
      <label for="">Email</label>
      <input type="email" v-model="email" />
    </div>
    <button type="submit">Add friend</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: ""
    };
  },
  methods: {
    submitData() {
      this.$emit("add-friend", this.name, this.phone, this.email);
    },
  },
  emits:['add-friend']
};
</script>
<style >
</style>
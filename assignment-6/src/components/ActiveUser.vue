<template>
  <div>
    <ul>
      <li>
        <ul>
          <li>
            <strong>Name</strong>
            {{ userName }}
          </li>
          <li>
            <strong>Age</strong>
            {{ age }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      require: true,
    },
    age: {
      
      require: true,
    },
  },
  data() {
    return {};
  },

  methods: {},
  emits: [],
};
</script>

<style>
</style>
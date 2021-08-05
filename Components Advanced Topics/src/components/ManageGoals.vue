<template>
  <h1>Manage Goals</h1>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  
  
  <teleport to="body">
  <error-alert v-if="inputInvalid" >

      <h1>please give an input</h1>
        <button @click="confirmError">ok</button>
  </error-alert>
  
  </teleport>

</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
  components: { ErrorAlert },
  data() {
    return {
      inputInvalid: false,
    };
  },
  methods: {
    setGoal() {
     
      if (this.$refs.goal.value ==="") {

        this.inputInvalid = true;
      }
    },
    confirmError(){
         this.inputInvalid = false;
    }
  },
};
</script>
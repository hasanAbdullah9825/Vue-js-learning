<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->

    <button @click="setSelectedComponents('active-goals')">Active Goals</button>
    <button  @click="setSelectedComponents('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponents==='active-goals'"></active-goals>
    <manage-goals v-if="selectedComponents==='manage-goals'"></manage-goals> -->
      <component :is="selectedComponents"></component>
    
    
  </div>

</template>

<script>
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
// import BadgeList from "./components/BadgeList.vue";
import TheHeader from "./components/TheHeader.vue";
// import UserInfo from "./components/UserInfo.vue";

export default {
  components: { TheHeader, ActiveGoals, ManageGoals },
  data() {
    return {
      activeUser: {
        name: "Abdullah Al Hasan",
        description: "Site owner and admin",
        role: "admin",

      
      },
            selectedComponents:"active-goals"
    };
  },
  methods:{
    setSelectedComponents(cmp){
      
this.selectedComponents=cmp;
    }
  }
};
</script>

<style>
  html {
    font-family: sans-serif;
  }
  body {
    margin: 0;
  }
</style>
<template>
  <ul>
    <li>
      <h2>{{ name }} {{ friendIsFavorite ? "(favorite)" : "" }}</h2>
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
  //props: ["name", "emailAddress", "phoneNumber", "isFavorite"],
  props:{
name:{
  type:String,
  required:true,
},
emailAddress:{
  type:String,
  required:true
},
phoneNumber:{
  type:String,
  required:true
},
isFavorite:{
  type:String,
  required:false,
  default:'0',
  validator:function(value){
return value==='0'|| value==='1';
  }
}
  },
  data() {
    return {
      detailsAreVisible: false,
      
      friendIsFavorite:this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
        this.friendIsFavorite=!this.friendIsFavorite;
    },
  },
};
</script>
<style >
</style>
<template>
    <ul>
        <li>
        <h2>{{name}}</h2>
        <button @click="toggleDetails" >ShowDetails</button>
        <ul v-if ="detailsAreVisible">
            <li>
                <strong>phone</strong>
                {{phoneNumber}}
            </li>
            <li>
                <strong>Email</strong>
                {{emailAddress}}

            </li>
            
        </ul>
    </li>
    </ul>
</template>
<script>
export default {
    props:["name","emailAddress","phoneNumber"],
    data(){
 return{
     detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com"
 }
 }
 },
 methods:{
     toggleDetails(){
         this.detailsAreVisible=!this.detailsAreVisible;
         
     }
 }
}
</script>
<style >

</style>
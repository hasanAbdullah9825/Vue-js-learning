const app=Vue.createApp({
    data(){
   return {
       myName:"Hasan",
       myAge:24,
       myAgeAfterFiveYears:'',
       link:"dummy.png"
   };
    },
    methods:
    {
        afterFiveyears(){
            return this.myAge+5;
        },
        favouriteNumber(){
            return Math.random()*1;
        }
    }
});

app.mount('#assignment');
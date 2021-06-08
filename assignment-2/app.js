const app=Vue.createApp({
data(){
return {
    userEvent:'',
    myName:''
};
},
methods:{
    myAlert(){
        return alert("lorem ipsum?")
    },
    keyDown(event){
    this.userEvent=event.target.tagName;
    console.log(this.userEvent);
    }
},
computed:{
    fullName(){
        return this.myName+"Ahmed";
    }
}


});

app.mount('#assignment');
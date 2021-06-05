const app = Vue.createApp({
    data() {
        return {
            boxAselected: false,
            boxBselected: false,
            boxCselected: false
        }
 
    }
    ,
    computed:{

        
    },
    methods:{
        boxSelected(value){
            if (value === "A") {
                this.boxAselected = true;
            }
            else if (value === "B") {
                this.boxBselected = true;
            }
            else if (value === "C") {
                this.boxCselected = true;
            }

        }
    }
});
app.mount('#styling');
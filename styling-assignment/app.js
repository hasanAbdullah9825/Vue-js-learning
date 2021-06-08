const app = Vue.createApp({
    data() {
        return {
            input1: "",
            btnClick:false,
            bgColor:""
        }
    },
    computed:
    {
        userClass() {

            if (this.input1 === "user1") {
                return { user1: true }
            }
            else if (this.input1 === "user2") {
                return { user2: true }
            }

        }
    },
    methods:
    {
        btn(){

            return this.btnClick=!this.btnClick
        }
    }
});

app.mount('#assignment');
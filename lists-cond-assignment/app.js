const app= Vue.createApp({

    data(){
        return {
            taskInput:'',
            tasks:[],
            liShow:true
        }
    }

    ,
    methods:{
        addTask(){
        this.tasks.push(this.taskInput);
        }
        ,
        listShow(){
            this.liShow=!this.liShow;
        }
    }
});

app.mount("#assignment");
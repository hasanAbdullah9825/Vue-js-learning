new Vue({

    el:'#app',
    data:{
        title:"First vue project",
        name:"hasan",
        src:"https://picsum.photos/seed/picsum/200/300",
        alt:"this is a picture",
        link:"https://google.com",
        MyText:"helloo I am hasan",
        MyHtml:"<strong>This is my  vue js starting</strong>",
        age:23,
        todos:[
            {text:"learn javascript"},
            {text:"learn vue js"},
            {text:"make something awesome"}
        ]
        
        
    },
    methods:{
        greeting(){
            return this.name;
        },
        update(){
            setTimeout(()=>{return this.title="Imran vaiiiiiiiii"},2000);
        },
        clickme(){
            return this.title="changed after click event";
        }
    }
});

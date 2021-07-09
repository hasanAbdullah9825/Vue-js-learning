import { createApp } from 'vue'
import App from './App.vue'
import ActiveUser from "./components/ActiveUser.vue"
import AddUser from "./components/AddUser.vue"


const app=createApp(App);

app.component('active-user',ActiveUser);
 app.component('add-user',AddUser)


app.mount('#app');

const app = Vue.createApp({
    data() {
        return {
            result: 0,
            message: ''
        }
    },
    methods: {
        add(value) {
            this.result += value;
            console.log(44444444444444444);

        },

        howBig() {
            if (this.result < 37) {
                return this.message = "Not there yet";
            }
            else if (this.result > 37) {
                return this.message = "Too much!";
            }
        }
    },
    watch: {
        result(value) {
            if (value === 37) {
                const that = this;
                setTimeout(function () { that.result = 0; }, 5000)

            }
        }
    }
})

app.mount('#assignment');
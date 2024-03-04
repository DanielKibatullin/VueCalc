import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
            equation: "",
        };
    },
    computed: {
    },
    watch:  {
    },
    methods: {
        num(x){
            this.equation += x;
            console.log(this.equation);
        },
        operator(operator){
            this.equation += operator;
            console.log(this.equation);
        },
        del(){
            console.log(this.equation.length)
            if ( this.equation.substring(this.equation.length-3) == 'mod')
                this.equation = this.equation.substring(0,this.equation.length-3)
            else
                this.equation = this.equation.substring(0,this.equation.length-1)
        },
        mod(){
            this.equation += 'mod';
        },
        pie(){
            this.equation += 'π';
        },
        sqrt(){
            this.equation += '√';
        },
        pow2(){
            this.equation += '²';
        },
        compute(){
            
        },

    },
}).mount('#app');
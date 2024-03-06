import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
            equation: "",
            answer: null,
            substitute : "",
        };
    },
    computed: {
    },
    watch:  {
    },
    methods: {
        num(x){
            this.equation += x;

        },
        operator(operator){
            this.equation += operator;

        },
        del(){
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
            for(let i = 0; i < this.equation.length; i++){
                if ( this.equation.substring(i,i + 3) == "mod"){
                    this.substitute = this.equation.substring(0, i ) + "%" + this.equation.substring(i+3)
                    this.answer = eval(this.substitute)
                    this.equation = ""
                    return null;
                }
                if ( this.equation.substring(i,i + 1) == "%"){
                    this.substitute = this.equation.substring(0, i )/100
                    this.answer = eval(this.substitute)
                    this.equation = ""
                    return null;
                }
                if ( this.equation.substring(i,i + 1) == "π"){
                    this.substitute = this.equation.substring(0, i ) + "3.14159265358979323846264338327950288419716939937510" + this.equation.substring(i+1)
                    this.answer = eval(this.substitute)
                    this.equation = ""
                    return null;
                }
                
            }
            try{
                this.answer = eval(this.equation)
                
            }
            catch{
                alert("that didnt work xd")
            }
            this.equation = ""
        },

    },
}).mount('#app');
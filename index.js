import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
	data() {
		return {
			equation: '',
			answer: null,
			substitute: '',
			recentEquations: [],
			recentAnswers: []
		};
	},
	computed: {},
	watch: {},
	methods: {
		num(x) {
			this.equation += x;
		},
		operator(operator) {
			this.equation += operator;
		},
		del() {
			if (this.equation.substring(this.equation.length - 3) == 'mod')
				this.equation = this.equation.substring(0, this.equation.length - 3);
			else this.equation = this.equation.substring(0, this.equation.length - 1);
		},
		mod() {
			this.equation += 'mod';
		},
		pie() {
			this.equation += 'π';
		},
		sqrt() {
			this.equation += '√';
		},
		pow2() {
			this.equation += '²';
		},
		compute() {
			let equation = this.equation;

			equation = equation.replace(/²/g, '**2');

			equation = equation.replace(/π/g, '(Math.PI)');
			equation = equation.replace(/√(\d+)/g, '(Math.sqrt($1))');
			equation = equation.replace(/(\d+)\(/g, '$1*(');
			equation = equation.replace(/(\d+)%/g, '($1/100)');

			try {
				this.answer = eval(equation);
			} catch {
				alert('An error occurred while evaluating the expression');
				this.answer = 'ERROR';
			}

			if (this.recentEquations.length >= 2) {
				this.recentEquations.splice(0, 1, this.recentEquations[1]);
				this.recentAnswers.splice(0, 1, this.recentAnswers[1]);
			}

			this.recentEquations.splice(1, 1, this.equation);
			this.recentAnswers.splice(1, 1, this.answer);
			this.equation = '';
			this.answer = '';
		},
		setEquationFromHistory(index) {
			this.equation = this.recentEquations[index];
		},
		setEquationFromHistoryy(index) {
			this.equation += this.recentAnswers[index];
		}
	}
}).mount('#app');

const questions = require('./questions');

var Game = function() {
	
	this.init = () => {

		console.log(`Init`);
		this.question(0);
	}

	this.question = (step) => {


		console.log(`Question:`);

		console.log(questions[step]);

	}
}

var game = new Game();
game.init();
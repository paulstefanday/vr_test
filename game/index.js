const questions = require('./questions');
const yo = require('yo-yo');

var Game = function() {
	
	this.step = 0;

	this.init = () => {

		this.question();
	}

	this.question = () => {

		for (let i = 0; i < questions[this.step].choices.length; i++) {

			let position = this.position();
	    	let entity = yo`<a-entity cursor-listener obj-model="obj: #fly-b-obj; mtl: #fly-b-mtl" position="${position}" scale="1 1 1" rotation="0 0 0"></a-entity>`;

			scene.appendChild(entity)
			console.log('Added Question');
	    }

	}

	this.position = () => {

		let x = this.getRand(-10, 15);
		let y = this.getRand(1, 3);
		let z = this.getRand(-2, -10);

		return `${x} ${y} ${z}`;

	}

	this.getRand = (min, max) => {
    	return Math.round(Math.random() * (max - min) + min);
	}
}

window.onload = function() { 

	var game = new Game();
	let scene = document.querySelector('#scene');

	if (scene.hasLoaded) {
		game.init();
	} else {
		scene.addEventListener('loaded', game.init);
	}
}
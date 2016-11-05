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
			let rotation = this.rotation(position);

			console.log(rotation);

	    	let entity = yo`<a-entity cursor-listener obj-model="obj: #fly-b-obj; mtl: #fly-b-mtl" position="${position.x} ${position.y} ${position.z}" scale="1 1 1" rotation="${rotation.x} ${rotation.y} ${rotation.z}"></a-entity>`;

			scene.appendChild(entity)
			console.log('Added Question');
	    }

	}

	this.position = () => {

		let position = {
			x: this.getRand(-12, 12), 
			y: this.getRand(1, 3),
			z: this.getRand(-2, -12),
		}

		return position;
	}

	this.rotation = (position) => {

		let rotation = {
			x: 0, 
			y: position.x * -10,
			z: 0, 
		}

		return rotation;
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
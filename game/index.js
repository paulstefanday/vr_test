const questions = require('./questions');
const yo = require('yo-yo');

var Game = function() {

	this.step = 0;
	this.score = 0;

	this.init = () => {
		setTimeout(() => {
			this.question();
		}, 3000);
	}

	this.question = () => {

		let scene = document.querySelector('#elements');
		let delay = 500
		for (let i = 0; i < questions[this.step].choices.length; i++) {

			let position = this.position();
			let rotation = this.rotation(position);
			let choice = questions[this.step].choices[i];

	    	let entity = yo`<a-entity clicked cursor-listener obj-model="obj: #fly-b-obj; mtl: #fly-b-mtl" data-choice="${choice}" position="${position.x} ${position.y} ${position.z}" scale="0 0 0" rotation="${rotation.x} ${rotation.y} ${rotation.z}">
						<a-animation attribute="scale" dur="200" fill="forwards" to="1 1 1" repeat="0"></a-animation>
						<a-entity material="color: white" text="text: ${choice}; size: 0.24" position="-0.2 0.1 0"></a-entity>
				</a-entity>`;

			setTimeout(function() {
				scene.appendChild(entity)
			}, delay);
			delay = delay + 500
			console.log('Added Question');
    }

	}

	this.answer = (value) => {
		console.log(91919191, value)
		if(questions[this.step].answer === value) {
			this.score = this.score++
		}
		this.step++

		// wipe existing answers && load new answers
		this.refresh()
	}

	this.refresh = () => {
	  let delay = 200
		$('#elements').children('').each(function () {
			setTimeout(() => $(this).remove(), delay);
			delay = delay + 200;
		});
	}

	this.position = () => {

		let position = {
			x: this.getRand(-10, 10),
			y: this.getRand(1, 3),
			z: this.getRand(-2, -12),
		}

		return position;
	}

	this.rotation = (position) => {

		let rotation = {
			x: this.getRand(-5, 5),
			y: position.x * -8,
			z: this.getRand(-5, 5),
		}

		return rotation;
	}

	this.getRand = (min, max) => {
    	return Math.round(Math.random() * (max - min) + min);
	}
}

module.exports = Game

const questions = require('./questions');
const yo = require('yo-yo');

var Game = function() {

	this.step = 0;
	this.score = 0;
	this.duration = 30000;

	this.init = () => {
		setTimeout(() => {
			this.question();
			this.timer();

		}, 3000);
	}

	this.question = () => {

		let question 
		let questionText = yo`<a-entity position="1 2 -5" material="color: white" text="text: '${questions[this.step].question}'; size: 0.24"></a-entity>`
		
		$('#question').append(questionText)
		let delay = 500

		for (let i = 0; i < questions[this.step].choices.length; i++) {
			this.choice(questions[this.step].choices[i], delay);
			delay = delay + 500
    	}


	}

	this.choice = (choice, delay) => {

		let position = this.position();
		let rotation = this.rotation(position);
		let scene = document.querySelector('#elements');

		let entity = yo`
			<a-entity flapping>
				<a-entity clicked obj-model="obj: #fly-a-obj; mtl: #fly-a-mtl" data-choice="${choice}" position="${position.x} ${position.y} ${position.z}" scale="0 0 0" rotation="${rotation.x} ${rotation.y} ${rotation.z}" sound="src: #sound-eat; on: click">
				<a-animation attribute="scale" dur="200" fill="forwards" to="1 1 1" repeat="0"></a-animation>
				<a-entity data-choice="${choice}" material="color: white" text="text: ${choice}; size: 0.24" position="-0.2 0.1 0"></a-entity>
				<a-box data-choice="${choice}" cursor-listener opacity="0"></a-box>
			</a-entity>

			<a-entity clicked obj-model="obj: #fly-b-obj; mtl: #fly-b-mtl" data-choice="${choice}" position="${position.x} ${position.y} ${position.z}" scale="0 0 0" rotation="${rotation.x} ${rotation.y} ${rotation.z}" sound="src: #sound-eat; on: click">
				<a-animation attribute="scale" dur="200" fill="forwards" to="1 1 1" repeat="0"></a-animation>
				<a-entity data-choice="${choice}" material="color: white" text="text: ${choice}; size: 0.24" position="-0.2 0.1 0"></a-entity>
				<a-box data-choice="${choice}" cursor-listener opacity="0"></a-box>
				</a-entity>
			</a-entity>`;

			setTimeout(function() {
				scene.appendChild(entity)
			}, delay);
	}

	// Sets Timer
	this.timer = () => {

		let timer = yo`<a-box timer color="tomato" data-duration="${this.duration}" position="0 1 -1.5" depth="0.05" height="0.1" width="2"></a-box>`;
		let scene = document.querySelector('#scene');
		scene.appendChild(timer);

		setTimeout(this.result, this.duration + 2000);
	}

	this.result = () => {

		console.log("End of the game!");
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
		setTimeout(() => this.question(), delay);
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

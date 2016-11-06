const questions = require('./questions');
const yo = require('yo-yo');
var sound_correct = new Audio('../sound/SCORE.wav');
var sound_wrong = new Audio('../sound/WRONG.wav');

var Game = function() {

	this.step = 0;
	this.score = 0;
	this.duration = 3000;

	this.init = () => {
		setTimeout(() => {

			let questionContainer = yo`<a-plane id="question" color="#d1fd40" position="0 1 -1.5" height="0.28" width="0.8">
        </a-plane>`;
        	let question = yo`<a-entity id="question-text" bmfont-text="text: ; color:#000000" position="-0.18 -0.03 0" scale="0.8 0.8 0.8"></a-entity>`;

        	let camera = document.querySelector('#camera');

        	questionContainer.appendChild(question)
        	camera.appendChild(questionContainer)

			this.question();
			this.timer();

		}, 3000);
	}

	this.question = () => {

		let q = document.querySelector('#question-text');
		q.setAttribute('bmfont-text', `text: ${questions[this.step].question}; color:#000000`);

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
				<a-entity clicked obj-model="obj: #fly-a-obj; mtl: #fly-a-mtl" data-choice="${choice}" position="${position.x} ${position.y - 0.1} ${position.z}" scale="0 0 0" rotation="${rotation.x} ${rotation.y + 5} ${rotation.z - 3}" sound="src: #sound-eat; on: click">
						<a-animation attribute="scale" dur="200" fill="forwards" to="1 1 1" repeat="0"></a-animation>
						<a-entity data-choice="${choice}" material="color: white" text="text: ${choice}; size: 0.24" position="-0.2 0.1 0"></a-entity>
						<a-box data-choice="${choice}" cursor-listener opacity="0"></a-box>
				</a-entity>

				<a-entity clicked obj-model="obj: #fly-b-obj; mtl: #fly-b-mtl" data-choice="${choice}" position="${position.x} ${position.y + 0.1} ${position.z}" scale="0 0 0" rotation="${rotation.x} ${rotation.y -5} ${rotation.z + 3}" sound="src: #sound-eat; on: click">
						<a-animation attribute="scale" dur="200" fill="forwards" to="1 1 1" repeat="0"></a-animation>
						<a-entity data-choice="${choice}" material="color: white" text="text: ${choice}; size: 0.24" position="-0.2 0.1 0"></a-entity>
						<a-box data-choice="${choice}" cursor-listener opacity="0"></a-box>
				</a-entity>
			</a-entity>`;

			setTimeout(function() {
				scene.appendChild(entity);
			}, delay);
	}

	// Sets Timer
	this.timer = () => {
		//3d9fba
		let timerContainer = yo`<a-plane color="#ffffff" position="0 0.85 -1.5" height="0.05" width="0.8"></a-plane>`;
		let timer = yo`<a-plane timer color="#ef5a30" data-duration="${this.duration}" position="0 0 0" height="0.05" width="0.8"></a-plane>`;
		let camera = document.querySelector('#camera');

		timerContainer.appendChild(timer)
		camera.appendChild(timerContainer);

		setTimeout(this.result, 0);
	}

	this.result = () => {
		// hide question and score
		$('#question').attr('visible', 'false')
		$('#question-text').attr('visible', 'false')
		$('#box').attr('visible', 'false')

		// show sign
		let show = yo`<a-animation attribute="position" dur="800" fill="forwards" to="1 -0.25 -2.77" repeat="0"></a-animation>`
		$('#endfish').appendChild(show)

		console.log("End of the game!");
	}

	this.updateScore = () => {
		this.score = this.score + 1
		let text = $('#score').children('')[0]
		$(text).attr('bmfont-text', `text: ${this.score} x; color:white`)
	}

	this.answer = (value) => {
		// Update score if correct
		if(questions[this.step].answer === parseInt(value)) this.updateScore()

		// Update step
		this.step++

		// wipe existing answers && load new answers
		this.refresh()
	}

	this.refresh = () => {
	  let delay = 200
		$('#elements').children('').each(function () {
			 $(this).remove()
		 })

		// $('#elements').children('').each(function () {
		// 	setTimeout(() => $(this).remove(), delay);
		// 	delay = delay + 200;
		// });
		setTimeout(() => this.question(), 500);
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

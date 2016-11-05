const questions = require('./questions');

var Game = function() {

	this.init = () => {
		console.log(`Init`);
		this.question(0);
	}

	this.question = (step) => {
		let scene = document.querySelector('#scene');

		console.log(scene);
		console.log(`Question:`);

		console.log(questions[step].choices);


		for (let i = 0; i < questions[step].choices.length; i++) {

	    	let entity = document.createElement('a-entity');

      		entity.setAttribute('position', {
		        x: 15,
		        y: 9,
		        z: -7
      		});

	    	entity.setAttribute('obj-model', 'obj: url(models/fly-a.obj); mtl: url(models/fly-a.mtl)');
	    	entity.setAttribute('scale', '1 1 1');
	    	entity.setAttribute('rotation', '0 0 0');

	    	scene.appendChild(entity);

	    	console.log(scene);
	    }
	}

}

var game = new Game();
setTimeout(game.init, 3000);

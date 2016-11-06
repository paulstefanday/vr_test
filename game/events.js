const yo = require('yo-yo')

function addAnimation(el) {

	let parent = el.parentElement;
	let choice = el.getAttribute('data-choice');

	console.log(`Choice: ${choice}`);

	let animation = yo`<a-animation attribute="scale" dur="200" fill="forwards" to="1.4 1.4 1.4" repeat="0"></a-animation>`
	//let text = yo`<a-entity material="color: white" text="text: ${choice}; size: 0.3" position="-0.3 0.1 0"></a-entity>`
	parent.appendChild(animation);
	//el.appendChild(text)
}
//
function leaveAnimation(el) {
	console.log(el)
	// el.innerHTML = ''

	let parent = el.parentElement;
	let choice = el.getAttribute('data-choice');

	console.log(`Choice: ${choice}`);

	let child = yo`<a-animation attribute="scale" dur="200" fill="forwards" to="1 1 1" repeat="0"></a-animation>`
	//let text = yo`<a-entity material="color: white" text="text: ${choice}; size: 0.3" position="-0.3 0.1 0"></a-entity>`
	parent.appendChild(child)
	//el.appendChild(text)
}

function answerResponse(el) {
	console.log(el)
	// el.innerHTML = ''
	debugger;
	let parent = el.parentElement;
	let choice = el.getAttribute('data-choice');
	let child = yo`<a-animation attribute="scale" dur="200" fill="forwards" to="1.5 1.5 1.5" repeat="0"></a-animation>`;
	//let text = yo`<a-entity material="color: white" text="text: ${choice}; size: 0.3" position="-0.3 0.1 0"></a-entity>`
	parent.appendChild(child)
	//el.appendChild(text)
}


AFRAME.registerComponent('cursor-listener', {
	init: function () {
		// this.el.addEventListener('click', function (e) {
		//   console.log('I was clicked!', e.target.getAttribute('data-choice'));
		// });
		this.el.addEventListener('mouseenter', function (e) {
			console.log('Mouse enter!', e.target);
				addAnimation(e.target)
				const el_status = document.querySelectorAll('#question-response')
				answerResponse(el_status)
		});
		this.el.addEventListener('mouseleave', function (e) {
			console.log('Mouse leave!', e.target);
			leaveAnimation(e.target)
		});
		this.el.addEventListener('stateadded', function (evt) {
			console.log('state added: ', evt.detail.state);
		});
		this.el.addEventListener('stateremoved', function (evt) {
			if ( evt.detail.state === "cursor-hovered") {

			}
			console.log('state removed: ', evt.detail.state);
		});
	}
});

AFRAME.registerComponent('timer', {
	init: function () {
		let el = this.el;

		let duration = this.el.getAttribute('data-duration');
		let width = this.el.getAttribute('width');

		let animation = yo`<a-animation dur="${duration}" attribute="width" from="${width}" to="0"></a-animation>`;
		el.appendChild(animation);
	}
})

const yo = require('yo-yo')

// function addAnimation(el) {
//   // el.setAttribute('')
//   console.log(el.children[0])
//   // let choice = el.getAttribute('data-choice')
//   // let child = yo`<a-animation attribute="scale" dur="200" fill="forwards" to="1.4 1.4 1.4" repeat="0"></a-animation>`
//   // let text = yo`<a-entity material="color: white" text="text: ${choice}; size: 0.3" position="-0.3 0.1 0"></a-entity>`
//   // el.appendChild(child)
//   // el.appendChild(text)
// }
//
// function leaveAnimation(el) {
//   console.log(el.children[0])
//   // el.innerHTML = ''
//   // let choice = el.getAttribute('data-choice')
//   // let child = yo`<a-animation attribute="scale" dur="200" fill="forwards" to="1 1 1" repeat="0"></a-animation>`
//   // let text = yo`<a-entity material="color: white" text="text: ${choice}; size: 0.3" position="-0.3 0.1 0"></a-entity>`
//   // el.appendChild(child)
//   // el.appendChild(text)
// }

AFRAME.registerComponent('cursor-listener', {
  init: function () {
    this.el.addEventListener('click', function (e) {
      console.log('I was clicked!', e.target.getAttribute('data-choice'));
    });
    this.el.addEventListener('mouseenter', function (e) {
      console.log('Mouse enter!', e.target);
      // addAnimation(e.target)
    });
    this.el.addEventListener('mouseleave', function (e) {
      console.log('Mouse leave!', e.target);
      // leaveAnimation(e.target)
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

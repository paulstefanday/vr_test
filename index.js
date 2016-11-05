// require('aframe-animation-component');
//
// var el = document.querySelector('#mario');
//
// // TweenMax.to(this.state.sphere.position, 1, {
// //   bezier:[{x:1, y:1}, {x:0, y:2}, {x:-1, y:1}, {x:0, y:0}, {x:1, y:1}],
// //   ease:Linear.easeNone,
// //   repeat: -1,
// //   onUpdate: () => {
// //     this.setState({sphere: {
// //       position: this.state.sphere.position
// //     }});
// //   }
// // });

require('./game/index.js');
const yo = require('yo-yo')

function addAnimation(el) {
  let child = yo`<a-animation attribute="scale" dur="200" fill="forwards" to="2 2 2" repeat="0"></a-animation>`
  el.appendChild(child)
  console.log('added')
}

function leaveAnimation(el) {
  el.innerHTML = ''
  let child = yo`<a-animation attribute="scale" dur="200" fill="forwards" to="1 1 1" repeat="0"></a-animation>`
  el.appendChild(child)
}

AFRAME.registerComponent('cursor-listener', {
  init: function () {
    console.log('cursor initialised')
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function () {
      var randomIndex = Math.floor(Math.random() * COLORS.length);
      this.setAttribute('material', 'color', COLORS[randomIndex]);
      console.log('I was clicked!');
    });
    this.el.addEventListener('mouseenter', function (e) {
      console.log('Mouse enter!', e.target);
      // e.target.setAttribute("scale","2 2 2")
      addAnimation(e.target)
    });
    this.el.addEventListener('mouseleave', function (e) {
      console.log('Mouse leave!', e.target);
      leaveAnimation(e.target)
    });
    this.el.addEventListener('stateadded', function (evt) {
      // if (  )
      // document.querySelector('#cursor').emit('fade');
    });
    this.el.addEventListener('stateremoved', function (evt) {
      if ( evt.detail.state === "cursor-hovered") {
          // rendering state
          // document.querySelector('#cursor').emit('nice')
      }
      console.log('state removed: ', evt.detail.state);

    });
  }
});

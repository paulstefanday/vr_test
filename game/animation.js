// require('aframe-animation-component');
//
// var el = document.querySelector('#mario');
//
// TweenMax.to(this.state.sphere.position, 1, {
//   bezier:[{x:1, y:1}, {x:0, y:2}, {x:-1, y:1}, {x:0, y:0}, {x:1, y:1}],
//   ease:Linear.easeNone,
//   repeat: -1,
//   onUpdate: () => {
//     this.setState({sphere: {
//       position: this.state.sphere.position
//     }});
//   }
// });
const yo = require('yo-yo')
const getOpposite = (input, a, b) => {
    if ( input === a ) return a
    return b
}


AFRAME.registerComponent('animate-fly', {
  init: function () {
    console.log('#######################')
    console.log('Initialised FLY')
    console.log('#######################')
    // const pos = this.el.getAttribute('position');
    // const positions = [
    //   , { x: pos.x, y: pos.y + 0.1, z: pos.z}
    //   , { x: pos.x, y: pos.y - 0.1, z: pos.z}
    //   , { x: pos.x, y: pos.y, z: pos.z}
    // ];
    //
    // let time = 1000
    // for( let i = 0; i < positions.length; i++ ) {
    //   setInterval(() => {
    //     let current = `${positions[i].x} ${positions[i].y} ${positions[i].z}`
    //     let child = yo`<a-animation attribute="position" dur="1000" fill="forwards" to="${current}" repeat="0"></a-animation>`
    //     this.el.appendChild(child)
    //   }, time)
    //   time = time + 1000
    // }


    // let direction = 0;
    // setInterval(() => {
    //   const dir = getOpposite(direction, 0, 1)
    //   const newRotation = `${positions[dir].x} ${positions[dir].y} ${positions[dir].z}`
    //   console.log(newRotation)
    //   this.el.setAttribute('rotation', newRotation)
    // }, 2000)

  }
});

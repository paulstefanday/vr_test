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

const getOpposite = (input, a, b) => {
    if ( input === a ) return a
    return b
}


AFRAME.registerComponent('animate-fly', {
  init: function () {
    console.log('#######################')
    console.log('Initialised FLY')
    console.log('#######################')
    const rot = this.el.getAttribute('rotation');
    const rotations = [
    , { x: rot.x, y: rot.y + 20, z: rot.z}
    , { x: rot.x, y: rot.y - 20, z: rot.z} ];
    let direction = 0;
    setInterval(() => {
      const dir = getOpposite(direction, 0, 1)
      const newRotation = `${rotations[dir].x} ${rotations[dir].y} ${rotations[dir].z}`
      console.log(newRotation)
      this.el.setAttribute('rotation', newRotation)
    }, 2000)

  }
});

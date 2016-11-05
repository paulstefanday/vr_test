import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Text from './components/Text';
import Sky from './components/Sky';

class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.answer = this.answer.bind(this);
    this.state = {
      score: 0,
      step: 0,
      questions: [
			{
				question: "5 x 5",
				choices: [25, 76, 12, 20, 23],
				answer: 25,
			},
			{
				question: "5 x 2",
				choices: [8, 10, 12, 20, 23],
				answer: 10,
			},
			{
				question: "12 x 2",
				choices: [24, 22, 20, 30, 23],
				answer: 24,
			},
			{
				question: "6 x 8",
				choices: [40, 32, 48, 46, 62],
				answer: 48,
			},
			{
				question: "7 x 4",
				choices: [29, 16, 28, 46, 32],
				answer: 28,
			},
			{
				question: "5 x 5",
				choices: [25, 76, 12, 20, 23],
				answer: 5,
			},
			{
				question: "5 x 2",
				choices: [8, 10, 12, 20, 23],
				answer: 10,
			},
			{
				question: "12 x 2",
				choices: [24, 22, 20, 30, 23],
				answer: 24,
			},
			{
				question: "6 x 8",
				choices: [40, 32, 48, 46, 62],
				answer: 48,
			},
			{
				question: "7 x 4",
				choices: [29, 16, 28, 46, 32],
				answer: 28,
			}
		]
    };
  }

  answer(e) {
    // return () => {
      console.log(e.target)
      console.log(arguments)
      // if(this.state.questions[this.state.step][answer] === 1) {
      //   // set score +1
      //   this.setState({ score: this.state.score + 1 })
      // }
      // set step +1
      this.setState({ step: this.state.step + 1 })
    // }
  }

  render () {
    let count = -3
    return (
      <Scene>
        <Camera>
          <a-cursor
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"
>
          </a-cursor>
        </Camera>

        <Sky src="url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)"/>

        <Text
          text={this.state.questions[this.state.step].question}
          color='#DADADA'
          position='-1.75 1 -3'/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position='-1 1 0'/>
        <Entity light={{type: 'directional', intensity: 1}} position='1 1 0'/>

        { this.state.questions[this.state.step].choices.map(value => {
          count++
          return <Entity
            animation__sca={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
            geometry='primitive: box'
            material={{color: 'red', opacity: 0.6}}
            position={(count*2) + ' -0.5 -3'}
            value={value}
            onClick={this.answer}>
              <Text text={value} olor='#DADADA'></Text>
          </Entity>
        })}
      </Scene>
    );
  }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));

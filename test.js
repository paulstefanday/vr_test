class Application extends React.Component {
  constructor () {
    super();
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

  getOptions() {
    return this.state.questions[this.state.step]
  }

  answer(answer) {
    if(this.state.questions[this.state.step][answer] === 1) {
      // set score +1
      this.setState({ score: this.state.score + 1 })
    }
    // set step +1
    this.setState({ step: this.state.step + 1 })
  }

  componentDidMount () {

  }

  render() {
    let count = -3
    return <div>
      <a-scene>
        { this.state.questions[this.state.step].choices.map(value => {
          count++
          return <a-sphere on-click={e => console.log('hii')} position={(count*2) + ' 1 1' } radius="0.25" color="#EF2D5E"></a-sphere>
        }) }
        <a-plane
          rotation="-90 0 0"
          width="4"
          height="4"
          color="#7BC8A4"
        ></a-plane>
      </a-scene>
    </div>;
  }
}

/*
 * Render the above component into the div#app
 */
React.render(<Application />, document.getElementById('app'));

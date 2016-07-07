import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super()

		this.state = {increasing : false}
		this.update = this.update.bind(this)
	}

	update() {
		ReactDOM.render(
			<App val={this.props.val + 1} />,
			document.getElementById('app')
		);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({increasing: nextProps.val > this.props.val})
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.val % 3 === 0
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('prevProps =>', prevProps)
		console.log('prevState =>', prevState)
	}

	render() {
		console.log(this.state.increasing)
		return <button className="btn btn-default" onClick={this.update}>  {this.props.val} </button>
	}
}

App.defaultProps = {val: 0}

export default App
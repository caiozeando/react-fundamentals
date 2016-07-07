import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super()
		this.state = {val : 0}
		this.update = this.update.bind(this)
	}

	update() {
		this.setState({val: this.state.val + 1 })
	}

	componentWillMount() {
		this.setState({multi: 2})
	}

	render() {
		console.log('rendering!')
		return <button className="btn btn-default" onClick={this.update}>  {this.state.val * this.state.multi} </button>
	}

	componentDidMount() {
		this.interval = setInterval(this.update, 500)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}
}


class Wrapper extends React.Component {
	constructor() {
		super()
	}

	mount() {
		ReactDOM.render(<App />, document.getElementById('btn-wrapper'))
	}

	unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('btn-wrapper'))
	}

	render() {
		return (
			<div>
				<button className="btn btn-primary" onClick={this.mount.bind(this)}> Mount </button>
				<button className="btn btn-danger" onClick={this.unmount.bind(this)}> Unmount </button>

				<div id="btn-wrapper"></div>
			</div>
		)
	}
}


export default Wrapper
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.state = {increasing:false}
		this.do_update = this.update.bind(this);
	}
	update(){
		console.log("updating");
		ReactDOM.render(
			<App val={this.props.val+1} />,
			document.getElementById('app')
		);
	}
	componentWillReceiveProps(nextProps){
		console.log("Component Will Recive props");
		this.setState({increasing: (nextProps.val > this.props.val) })
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log("if true it will update");
		// return nextProps.val % 2 == 0;
		return true;
	}
	render(){
		console.log(this.state.increasing);
		return <button onClick={this.do_update}>{this.props.val}</button>
	}
}

App.defaultProps = {val:0}

ReactDOM.render(<App />,document.getElementById('app'))








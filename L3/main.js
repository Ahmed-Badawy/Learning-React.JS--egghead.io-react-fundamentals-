import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.state = {txt:''}
		this.do_update = this.update.bind(this);
	}
	update(e){
		this.setState({txt:e.target.value})
	}
	render(){
		return <div>
			<input onChange={this.do_update} />
			<h1>{this.state.txt}</h1>
		</div>
	}
}

ReactDOM.render(<App />,document.getElementById('app'))








import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.state = {val:0}

	}
	mount(){
		ReactDOM.render(<Widget1 />, document.getElementById('a') );
	}
	unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('a') )
	}
	render(){
		return <div>
				<button onClick={this.mount.bind(this)} >Mount</button>
				<button onClick={this.unmount.bind(this)} >Unmount</button>
				<div id='a'></div>
		</div>
	}
}

class Widget1 extends React.Component{
	constructor(){
		super();
		this.state = {val:1}
		this.do_update = this.update.bind(this);
	}
	update(){
		// console.log(this.state.val);
		this.setState({val:this.state.val+1});
		console.log("updated");
	}
	componentWillMount(){
		console.log("began mounting & changeing val to 100");
		this.setState({mul:2});
	}
	render(){
		console.log("Rendering !");
		return <div>
			<button id='button1' onClick={this.do_update}>{this.state.val * this.state.mul}</button>
		</div>
	}
	componentDidMount(){
		console.log("did mount");
		// console.log(ReactDOM.findDOMNode(this));
		this.inc = setInterval( this.do_update ,500);
	}	
	componentWillUnmount(){//fired upon remove
		console.log("Bye! remove it");
		clearInterval(this.inc);
	}		
}



ReactDOM.render(<App />,document.getElementById('app'))








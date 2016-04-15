import React from 'react';
import ReactDOM from 'react-dom';


let Mixin = InnerComponent => class extends React.Component{
	constructor(){
		super();
		this.state = {val:0}
		this.update = this.update.bind(this);
	}
	update(){
		console.log("updating");
		this.setState({ val:this.state.val+1 })
	}
	componentWillReceiveProps(nextProps){
		console.log("Component Will Recive props");
		this.setState({increasing: (nextProps.val > this.props.val) })
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log("if true it will update");
		return true;
	}	
	componentDidMount(){
		console.log("did mount");
	}
	render(){
		return <InnerComponent update={this.update} {...this.state} {...this.props} />
	}
}

//you can call the mixins on different components as you like:-
const Button = (props)=> <button onClick={props.update} >{props.txt} - {props.val}</button>
const H3 = (props)=> <h3 onMouseMove={props.update} >{props.txt} - {props.val}</h3>

let ButtonMixed = Mixin(Button);
let H3Mixed = Mixin(H3);


class App extends React.Component{
	render(){
		console.log("rendering");
		return(<div>
			<ButtonMixed txt="button text here"/>
			<H3Mixed txt="button text here"/>
		</div>)
	}
}


ReactDOM.render(<App />,document.getElementById('app'))








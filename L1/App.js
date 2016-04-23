import React from 'react';
import ReactDOM from 'react-dom';


class BindableCom extends React.Component{
	constructor(){
		super();
		this.state = {}
	}
	render(){ //when we use functions we should bind to update the view after changes has happened 
		return <label> <input onChange={this.do_updates.bind(this)} /> <b>{this.state.input_text}</b></label>
	}

	do_updates(e){
		console.log("do updates");
		this.setState({
			input_text:e.target.value
		})
	}

}


class App extends React.Component{
	constructor(props){
		super();
		this.state = {
			state_cat: props.cat,
			new_val: 0
		}
		console.log(props);
	}
	func2(){ return "outer function" }
	render(){
		let txt1 = this.props.txt
		let txt2 = "Hello man"
		let func1 = function(){ return "inner function" }
		let dom_list = [ <span key={1} >one - </span> ,
						 <span key={2} >two - </span> ,
						 <span key={3} >three</span> 
		];
		setTimeout(()=>{
			this.setState({
				new_val: this.state.new_val+1,
				state_cat: this.props.cat+" - "+this.state.new_val
			})
		},1000);
		console.log("rendring");

		return <h3>
			new_value: {this.state.new_val}				<br />
			state: {this.state.state_cat}				<br />
			props: {this.props.cat}					<br />
			{txt1} 												<br />
			{txt2} 												<br />
			{1+3}  												<br />
			{function(){return "from function"}()} 				<br />
			{function(){return <b>JSX from function</b>}()}		<br />
			{func1()} 											<br />
			{this.func2()} 										<br />
			{dom_list}											<br />
		</h3>
	}
}



// you can define rules & default values for the passed props:-
App.propTypes = { 
	txt1: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired //is required dectates that you must add this prop
}
App.defaultProps ={
	txt: "Default txt",
	cat: 55
}


//if you remove cat it will console.error the error
ReactDOM.render(
	<div>
		<BindableCom />
		<hr />
		<App cat={5} txt="this is Not Default Text" />
		<hr />
		<App />	
	</div>
	, 
	document.getElementById('app')
)



// export default App




import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			txt:'',
			red:0,
			green:0,
			blue:0
		}
		this.do_update = this.update.bind(this);//passes the event to the method
	}
	update(e){
		console.log("update evaluated");
		this.setState({
			txt:e.target.value,
			//you can access the dome with ReactDOM like this:- 
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,//refs are like id for react
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
		})
	}
	render(){
		return <div>
			<input onChange={this.do_update} />
			<h1>{this.state.txt}</h1>

			//you can pass children to the component like Name in here:
			<Widget txt={this.state.txt} inner_update={this.do_update} >Name</Widget>
			<Widget txt={this.state.txt} inner_update={this.do_update} >Age</Widget>
			<Widget txt={this.state.txt} inner_update={this.do_update} />

			<div className='clearfix'></div><hr/><hr/>

			<Slider ref="red" 	update={this.do_update} >Child</Slider>
			{this.state.red}
			<Slider ref="green" update={this.do_update} />
			{this.state.green}
			<Slider ref="blue" 	update={this.do_update} />
			{this.state.blue}
		</div>
	}
}


//creating inner widgets to act as project elements:
//  way 1:
const Widget = (props)=>{
	return <div>
			<label>{props.children}</label>
			<input onChange={props.inner_update} />
			<h3>{props.txt}</h3>
	</div>
}
//  way 2:
class Slider extends React.Component{
	render(){
		return <div>
			<label>{this.props.children} / Accessed the child successful</label> 
			<input ref='inp' onChange={this.props.update} type='range' min="0" max="255" />
		</div>
	}
}




ReactDOM.render(<App />,document.getElementById('app'))








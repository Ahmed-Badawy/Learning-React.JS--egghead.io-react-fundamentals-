import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.state = {txt:''}
		this.do_update = this.update.bind(this);
	}
	update(e){
		console.log("update evaluated");
		this.setState({txt:e.target.value})
	}
	render(){
		return <div>
			<input onChange={this.do_update} />
			<h1>{this.state.txt}</h1>

			<Widget txt={this.state.txt} inner_update={this.do_update} />
			<Widget txt={this.state.txt} inner_update={this.do_update} />
			<Widget txt={this.state.txt} inner_update={this.do_update} />

			<Slider update={this.do_update} />
		</div>
	}
}


//creating inner widgets to act as project elements:
//  way 1:
const Widget = (props)=>{
	return <div>
			<input onChange={props.inner_update} />
			<h1>{props.txt}</h1>
	</div>
}
//  way 2:
class Slider extends React.Component{
	render(){
		return(<input type='range' min="0" max="255" onChange={this.props.update} />)
	}
}




ReactDOM.render(<App />,document.getElementById('app'))








import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			red:0,
			green:0,
			blue:0
		}
		this.do_update = this.update.bind(this);//passes the event to the method
	}
	update(e){
		console.log("update evaluated");
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,//refs are like id for react
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
		})
	}
	render(){
		return <div>
			<NumInput ref="red" 
				min={0} 
				max={255} 
				step={1} 
				val={+this.state.red} 
				label="Red" 
				type='number'
				update={this.do_update} />	

			<NumInput ref="green" 
				min={0} 
				max={255} 
				step={1} 
				val={+this.state.green} 
				label="Red" 
				type='range'
				update={this.do_update} />

			<NumInput ref="blue" 
				min={0} 
				max={255} 
				step={1} 
				val={+this.state.blue} 
				label="Red" 
				type='range'
				update={this.do_update} />					
		</div>
	}
}


class NumInput extends React.Component{
	render(){
		let label = (this.props.label!='') ? <label className='h4'>{this.props.label} - {this.props.val}</label> : '';
		return <div>
			{label} 
			<input className='form-control' 
				type={this.props.type}
				min={this.props.min}
				max={this.props.max}
				step={this.props.step} 
				defaultValue={this.props.val}
				onChange={this.props.update}
				ref='inp'/>
		</div>
	}
}

NumInput.propTypes ={
	min: React.PropTypes.number, 					//means must be anumber
	max: React.PropTypes.number,
	step: React.PropTypes.number,
	val: React.PropTypes.number,
	label: React.PropTypes.string, 					//means must be string
	update: React.PropTypes.func.isRequired, 		//must be function & also required
	type: React.PropTypes.oneOf(['number','range']) //must be on of these options
}

NumInput.defaultProps ={
	min:0,
	max:0,
	step:1,
	val:0,
	label:'',
	type:'range'
}



ReactDOM.render(<App />,document.getElementById('app'))








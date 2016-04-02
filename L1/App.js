import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
	render(){
		let txt = this.props.txt
		return <h3>{txt}</h3>
	}
}


App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number
}
App.defaultProps ={
	txt: "this is the default txt"
}
ReactDOM.render(
	<App cat={5} txt="Ok This text is from React.JS" /> , 
	document.getElementById('app')
)


// export default App




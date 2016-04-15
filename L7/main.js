import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.state = {data:[
				{	id:1	,	name:"ahmed"	,	age:22	},
				{	id:2	,	name:"mona"		,	age:15	},
				{	id:3	,	name:"ali"		,	age:40	},
				{	id:4	,	name:"summer"	,	age:80	},
				{	id:5	,	name:"koko"		,	age:5	}
			]
		}
	}
	render(){
		let rows = this.state.data.map( person =>{
			return <PersonRow key={person.id} data={person} />
		})
		return <table className='table table-bordered table-stripped'>
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>		
		</table>
	}
}

const PersonRow = (props) => {
	return <tr>
		<td>{props.data.id}</td>
		<td>{props.data.name}</td>
		<td>{props.data.age}</td>
	</tr>
}

ReactDOM.render(<App />,document.getElementById('app'))








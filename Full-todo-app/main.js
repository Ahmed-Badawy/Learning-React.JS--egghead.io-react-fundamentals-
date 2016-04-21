import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';



const tasks = [
				{id: 1, 	c:"task one", 		checked:false,	group:"two"		},
				{id: 2, 	c:"task two", 		checked:true,	group:"hello" 	},
				{id: 3, 	c:"task three", 	checked:false,	group:"two"		},
				{id: 4, 	c:"task three", 	checked:false,	group:"one"		},
			];

class TaskCom extends React.Component{
	constructor(props){
		super();
		this.state = {
			id: props.task_data.id,
			text: props.task_data.c,
			checked: props.task_data.checked
		}	
		this.revert = this.onchange.bind(this);
	}
	onchange(){
		this.setState({
			checked: !this.state.checked
		})
		console.log(this.state);
	}
	render(){
		let checkedClassName = classNames({
			' checked': this.state.checked
		});		
		return<li> 
			<label> 
					<input type='checkbox' checked={this.state.checked} onChange={this.revert}/>
					&nbsp; <span className={checkedClassName}>{this.state.text}</span>
			</label>
		</li>
	}
}

class TasksCom extends React.Component{
	constructor(){
		super();
		this.state = {
			tasks: tasks,
			selected_group: "Empty",
			new_task_text: ""
		}		
	}		
	render(){
		let rows = this.state.tasks.map( task =>{
			return <TaskCom key={task.id} task_data={task} />
		});
		let groups = array_unique( this.state.tasks.map(task=> task.group) );
		groups.push("Empty");
		let options = groups.map( group =>{
			return <option key={group} value={group}>{group}</option>
		});		
		// console.log(groups);
		// console.log(rows);
		return <div>
			<label>Value is: {this.state.selected_group}</label>
			<select className='form-control' onChange={this.selectGroup.bind(this)}>
				{options}
			</select>
			<br />
			<ul className='list-unstyled'>
				{rows}
			</ul>

			<form onSubmit={this.add_task}>
				<div className='col-sm-6'>
					<input className='form-control' />
				</div>
				<button type='submit' className='btn btn-primary'>Save</button>
				<button type='reset' className='btn btn-default'>Empty</button>
			</form>

			</div>	
	}

	selectGroup(e){
		console.log("select new Group");
		this.setState({
			selected_group: e.target.value
		});
	}
	add_task(e){
		e.preventDefault();
		var new_task_text = this.state.new_task_text;
		console.log(new_task_text);
		
		// console.log("adding task");
		// let new_item = {
		// 	id: 55,
		// 	c: this.state.new_task_text,
		// 	checked: false,
		// 	group: "one"
		// }
		// console.log(this.state);
		// let new_tasks = this.state.tasks.concat(new_item);
		// this.setState({
		// 	tasks: new_tasks
		// })
	}
	clear_task(e){
		console.log("clearing task");
	}	
	delete_task(){
		console.log("delete task");
	}	
	update_task(){
		console.log("Update task");
	}	

}







ReactDOM.render(<TasksCom />,document.getElementById('app'))







function array_unique(array){
   var u = {}, a = [];
   for(var i = 0, l = array.length; i < l; ++i){
      if(u.hasOwnProperty(array[i])) {
         continue;
      }
      a.push(array[i]);
      u[array[i]] = 1;
   }
   return a;
}




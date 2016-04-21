import React from 	'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ReactFireMixin from 'reactfire';



const MainCom = (props)=> 	<div className='container'>
								<nav className="navbar navbar-default">
									<div className='col-sm-7 col-sm-offset-2' sytle={{marginTop:15}}>
									MENU
									</div>
								</nav>
								{props.children}
							</div>
const HomeCom = ()=> <div><h2>Search By Github Username Above</h2></div>


const UserProfileCom = (props)=> <div>
								<p>User Profile! </p>
								<p>Username: {props.username} </p>
								<p>Bio: {props.bio.name} </p>
							</div>
const ReposCom = (props)=> <div><h2>Repos {props.repos} </h2></div>
const NotesCom = (props)=> <div><h2>Notes {props.notes} </h2></div>


class ProfileCom extends React.Component {
	mixins: [ReactFireMixin],
  	constructor(props) {
	    super(props);
	    this.state = {
			notes:[1,2,3],
			bio: {
				name: "Badawika"
			},
			repos: ["one","two","three"]
	    };	
	}
	componentDidMount(){
		this.ref = new Firebase();
	}
	render() {
		console.log(this.props);
		return <div className="row">
			<div className="col-md-4">
				<UserProfileCom username={this.props.params.username}  bio={this.state.bio} />
			</div>
			<div className="col-md-4">
				<ReposCom repos={this.state.repos}/>
			</div>
			<div className="col-md-4">
				<NotesCom notes={this.state.notes}/>
			</div>
		</div> 
	}
}



render((
  <Router history={hashHistory}>
    <Route path="/" component={MainCom}>

		<IndexRoute component={HomeCom}></IndexRoute>
		<Route path="home" component={HomeCom}/>
		<Route path="profile/:username" component={ProfileCom}/>

    </Route>
  </Router>
), document.getElementById('app'))


import React from 	'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory , browserHistory, Redirect } from 'react-router'



//Links is the way we render links in our page
class Links extends React.Component {
	navigate(){ //needs some workarounds to get it to work
		console.log("navigate");
		this.props.history.replaceState(null,"/");
	}

	render(){
		return <div>
			<div className='alert alert-danger'>
				<p>what's the differnce between hashHistory & browserHistory ?<br />
				browserHistory is cleaner in url, but it can't reload the page.</p>
				<p>you can use activeClassName & activeStyle to indicate which page is currently selected.</p>
			</div>
			<Link to="/" className="btn" activeClassName="btn-primary">Home</Link> - &nbsp;
			<Link to="/about" className="btn" activeClassName="btn-primary">About</Link> - &nbsp; 
			<Link to="/contact" className="btn" activeClassName="btn-primary">Contact</Link> - &nbsp; 
			<Link to="/redirectedOldURL" className="btn">Redirect to contact</Link> - &nbsp; 
			<button className="btn btn-default btn-xs" onClick={this.navigate.bind(this)} >Function Navigate (doesn't work currently)</button> - &nbsp; 

<br />
			<Link to="/message/default-message" className="btn" activeClassName="btn-primary">withParams</Link> - &nbsp; 
			<Link to={ {pathname:'/message2/AhmedBadawy',query:{querystring:'Yo Yo Yo'}} } className="btn" activeClassName="btn-primary">With query String</Link> - &nbsp; 
			<Link to="/user/bob" activeClassName="active">User: Bob</Link>  - &nbsp; 
			<Link to={{ pathname: '/user/bob', query: { showAge: true,age:50 } }} activeClassName="active">Bob With Query Params</Link> 
<br />
{/* nested routes: */}
			<Link to="/grandfather" className="btn" activeStyle={{color:"white","backgroundColor":"#333"}}>GrandFather</Link>   - &nbsp; 
			<Link to="/grandfather/aunt/" className="btn" activeStyle={{color:"white","backgroundColor":"#333"}}>Aunt</Link>  - &nbsp; 
			<Link to="/grandfather/father/" className="btn" activeStyle={{color:"white","backgroundColor":"#333"}}>Father</Link>  - &nbsp; 
			<Link to="/grandfather/father/son/" className="btn" activeStyle={{color:"white","backgroundColor":"#333"}}>Son</Link>  - &nbsp; 
<br />
{/* Named Routes*/}
			<Link to="/container" className="btn" activeClassName="btn-primary">Container</Link>  - &nbsp; 
			<Link to="/named1" className="btn" activeClassName="btn-primary">Named 1</Link>  - &nbsp; 
			<Link to="/named2" className="btn" activeClassName="btn-primary">Named 2</Link>  - &nbsp; 
			<Link to="/named3" className="btn" activeClassName="btn-primary">Named 3</Link>  - &nbsp; 
		</div>
	}
}



const Home = ()=> <div><Links /> <h1>Home</h1></div>
const About = ()=> <div><Links /> <h1>About</h1></div>
const Contact = ()=> <div><Links /> <h1>Contact</h1></div>



//Creating Message Prams component
const Message = (props)=> <div><Links /> <h1>you can manipulate url to change message: <br />Message is: {props.params.param1 || "No Message Passed"}</h1></div>
const QueryStringCom = (props)=> <div><Links /> <h1> 
						<br />Query is: {props.location.query.querystring}
						<br />Param Username is: {props.params.username}</h1>
						</div>
						
class paramsWithQuery extends React.Component {
	/* if you want to do something before you get out of a route, here's how:-
	     1- create componentWillMount
	     2- create routerWillLeave method
	     3- add paramsWithQuery.contextTypes
	*/
	componentWillMount(){
		this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave );
	}
	routerWillLeave(nextLocation){
		return `leaving home for ${nextLocation.pathname}`; //if you return this you will get an alert message to get out of current page.
	}
	render() {
		let { userID } = this.props.params //this means get the userid from this one & setit as userid
		let { query } = this.props.location
		let age = query && query.showAge ? query.age : ''
		return <div className="User"> <Links /> <h1> User id: {userID}, Age:{age} </h1></div>
	}
}
paramsWithQuery.contextTypes = { router:React.PropTypes.object.isRequired }




//Creating Nested Components
const GrandFather = (props)=> <div className='well'><Links /> <h3>GrandFather View</h3> {props.children} </div>
const IndexRouteComponet = (props)=> <div className='well'><h1>This is comming from the indexRoute</h1></div>
const Father = (props)=> <div className='well'><h3>Father View</h3> {props.children} </div>
const Aunt = ()=> <div className='well'><h3>Aunt View</h3></div>
const Son = ()=> <div className='well'><h3>Son View</h3></div>

//Named Components:-
const Container = (props)=><div>
							<h3>This is how to embed multiple components with in one response</h3>
							<div className='header'>{props.header}</div>
							<div className='body'>{props.body}</div>
						</div>





class App extends React.Component{
	render(){ 
		//router contains routes that depends on two attributes (path & component)
		//both hashHistory & browserHistory can be used here
		return( <Router history={ hashHistory }>
					<Route path="/" component={Home}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/contact" component={Contact}></Route>
					<Redirect from="/redirectedOldURL" to='/contact'></Redirect>

{/* 	passing route params 
		(:praram1) 	with prentacies means optional
		:param1 	without prentacies means madatory
*/}					
					<Route path="/message/(:param1)" component={Message}></Route>
					<Route path="/message2/(:username)" component={QueryStringCom}></Route>
      				<Route path="user/:userID" component={paramsWithQuery} />

{/* This is How we create nested routes:- 
		-please notice how we removed the / from the start
*/}
					<Route path="grandfather" component={GrandFather}>
{/* IndexRoute is a way to set default usage component. if non other match */}
						<IndexRoute component={IndexRouteComponet}></IndexRoute>
						<Route path="father" component={Father}>
							<Route path="son" component={Son}></Route>
						</Route>
						<Route path="aunt" component={Aunt}></Route>
					</Route>
					
{/* named Components: used to enable us to embed multiple component inside one view */}
					<Route path="container" component={Container}>
						<Route path="/named1" components={ { header:Links, body:Father } }></Route>
						<Route path="/named2" components={ { header:Links, body:Son } }></Route>
						<Route path="/named3" components={ { header:Contact, body:Son } }></Route>
					</Route>

				</Router>
		);
	}
}

export default App;
import React, {Component} from 'react';
import './NavCircle.css';
import '../../fontsBasic/basic.css'

class NavCircle extends Component {
	state = {
		Over: 0,
	}

	componentDidMount() {
		this.setState({ Over: 0 });
	}

	OverHandler = (id) => {
		this.setState({ Over: id });
	}

	render() {
		let home = (<li onMouseOver = {() => this.OverHandler(1)}><i className = "icon-basic-home"></i></li>);
			if(this.state.Over === 1)
				home = (<li>Home</li>);
			let about = (<li onMouseOver = {() => this.OverHandler(2)}><i className = "icon-basic-info"></i></li>);
			if(this.state.Over === 2)
				about = (<li>About</li>);
			let projects = (<li onMouseOver = {() => this.OverHandler(3)}><i className = "icon-basic-gear"></i></li>);
			if(this.state.Over === 3)
				projects = (<li>Projects</li>);
			let challenges = (<li onMouseOver = {() => this.OverHandler(4)}><i className = "icon-basic-calculator"></i></li>);
			if(this.state.Over === 4)
				challenges = (<li>Challenges</li>);
			let contact = (<li onMouseOver = {() => this.OverHandler(5)}><i className = "icon-basic-message"></i></li>);
			if(this.state.Over === 5)
				contact = (<li>Contact</li>);

	return (
			<div>
				<input type = "checkbox" className = "nav__check" id = "menu" />
				<label for = "menu" className = "navigation">
					<div className = "navBar">
						{home} {about} {projects} {challenges} {contact}
					</div>
					<div className = "navCircle">
						<div className = "lines"></div>
					</div>
				</label>			
			</div>	
		);
	}
}

export default NavCircle;


/*
<ul className = "list"> 
<li><i className = "icon-basic-info" onMouseOver = {() => this.OverHandler(1)}></i></li>
							<li><i className = "icon-basic-gear" onMouseOver = {() => this.OverHandler(2)}></i></li>
							<li><i className = "icon-basic-calculator" onMouseOver = {() => this.OverHandler(3)}></i></li>
							<li><i className = "icon-basic-message" onMouseOver = {() => this.OverHandler(4)}></i></li>
						</ul>*/
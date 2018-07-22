import React, { Component } from 'react';
import './Header.css';
import '../../cssComponents/LArrow.css';
import '../../fonts/_arrows/_ICONFONT/arrows.css';

class Header extends Component {
	state = {
		animate: true,
	};

	render() {
			if(this.state.animate)
			{
				return (
					<div className = "showEff">
						<input type = "checkbox" className="lArrow__checkbox" id = "lArrow"/>
	            		<label for = "lArrow" className="lArrow__button">
	            			<div className = "lArrow__button--look"
	            			 onClick = {this.props.clicked}></div><div className = "lArrow__button--text">About Me</div>
	            		</label>
						<div className = "header">
							<h1 className = "heading__primary">
								<div className = "heading__primary--1">Looking For A</div>
								<div className = "heading__primary--2">Web Developer</div>
								<div className = "heading__primary--3">Look No More!</div>
								<p className = "shortDesc">
									Hello, I am Gagandeep, a freelancing Web Developer. I enjoy building everything from small sites to rich interactive web-apps. 
								</p>
							</h1>
							<a href = "#" className = "btn">Feedback &rarr;</a>
							<span className = "next">
							</span>
						</div>
					</div>);
			}
			else
				return null;
	}
}

export default Header; 

/*onClick = {this.props.clicked}*/
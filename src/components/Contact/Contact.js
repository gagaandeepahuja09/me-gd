import React, { Component } from 'react';
import Connect from './Connect/Connect';
import './Contact.css';

class Contact extends Component {

	state = {
		connect: false,
	}

	connected = () => {
		let curr = this.state.connect
		this.setState({ connect: !curr });
	}

	render() {
		let attachedClass = null;
		if(this.state.connect)
			attachedClass = <Connect />;
		return(
			<div className = "showEff">
				<div className = "gradient" />
				{ attachedClass }
				<input type = "checkbox" className="lArrow__checkbox" id = "lArrow"/>
	    		<label for = "lArrow" className="lArrow__button">
	    			<div className = "lArrow__button--look"
	    			 onClick = {this.props.clicked}></div><div className = "lArrow__button--text">Projects</div>
	    		</label>
	    		<h1 className = "heading__primary--4">Contact</h1>
	    		
	    		<div className = "btn-send green-orange" onClick = {this.connected}>Connect &rarr;</div>

	    		<div className = "contact__background">
		    		<form className = "contact">
		    			<div className = "form__group">
							<input type = "text" placeholder = "Full Name" id = "name" required />
							<label for = "name" className = "contact__label">Full Name</label>
						</div>
						<div className = "form__group">
							<input type = "e-mail" placeholder = "E-mail" id = "email" required />
							<label for = "email" className = "contact__label">E-mail</label>
						</div>
						<div className = "form__group">
							<input type = "text" placeholder = "Subject" id = "subject" required />
							<label for = "subject" className = "contact__label">Subject</label>
						</div>
						<div className = "form__group">
							<textarea placeholder="Hey, Leave Me A Message!" cols="70" rows="13"></textarea>	
						</div>
					</form>
					<div className = "btn-send green">Send &rarr;</div>
				</div>	
	    	</div>
		);
	}
}

export default Contact;
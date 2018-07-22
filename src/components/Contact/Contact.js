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
				
			<footer className = "footer">
   			<div className = "footer__logo-box">
            	GD
        	</div>
            <div className = "row--2">
                <div className = "col-1-of-22">
                    <div className = "footer__navigation">
                        <ul className = "footer__list">
                            <li className = "footer__item" onClick = {() => this.props.clicked('header')}>Home</li>
                            <li className = "footer__item" onClick = {() => this.props.clicked('aboutMe')}>About</li>
                            <li className = "footer__item" onClick = {() => this.props.clicked('projects')}>Projects</li>
                            <li className = "footer__item" onClick = {() => this.props.clicked('challenges')}>Challenges</li>
                            <li className = "footer__item" onClick = {() => this.props.clicked('contact')}>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className = "col-1-of-22">
                    <p className = "footer__copyright">
                        Built by <a href="#" class="footer__link">Gagandeep Singh Ahuja</a> as his portfolio to showcase his skills and projects
                        Copyright &copy; by Gagandeep Singh Ahuja. You are allowed to use the project ideas for both personal
                        and commercial use, but not to claim it as your own idea.
                        Some of the projects are his independent projects while others are part of udemy courses. A credit to the original author, Gagandeep, is highly appreciated!
                    </p>
                </div>
            </div>
        </footer>

	    	</div>
		);
	}
}

export default Contact;
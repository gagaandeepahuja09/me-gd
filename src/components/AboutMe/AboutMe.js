import React from 'react';
import './AboutMe.css';
import '../../cssComponents/LArrow.css';

const aboutMe = (props) => {
	return (
		<div>
			<div className = "showEff">
				<div className = "gradient" />
				<input type = "checkbox" className="lArrow__checkbox" id = "lArrow"/>
	    		<label for = "lArrow" className="lArrow__button">
        			<div className = "lArrow__button--look"
        			 onClick = {props.clicked}></div><div className = "lArrow__button--text">Projects</div>
        		</label>
	    		<div className = "about">
					<h1 className = "heading__primary--4">about</h1><div/>
					<div className = "row">
						<div className = "rem-row">
							<div className = "text-width">
								
								<ul className = "basic__desc">
									<li>Who<span>  Gagandeep Singh Ahuja</span> </li>
									<li>What<span>  Coder Developer Designer</span> </li>
									<li>Where<span>  Patiala, Punjab, India</span> </li>
									<li>When<span>  2016 - Present</span> </li>
									<li>Why<span>  Passion</span> </li>
									<li>How<span>  HTML, CSS, Javascript And Some Tools, Libraries</span> </li>
								</ul>
							</div>

							<div className = "text-width basic__desc mission">
								<h3>MISSION</h3>
								<div>I aspire to keep on getting better and finding areas of improvement. I am firm believer in writing <span className = "dashed">clean, reusable and maintainable code</span>. On the other hand, I also believe that one should not be afraid to mess things around while <span className = "dashed">experimenting</span> as they lead to new and creative ideas.</div>
							</div>

							<div className = "skills">
								<h3>Skills</h3> 
								<ul>
									<input type = "checkbox" className = "plus__checked" id = "html" />
									<label for = "html" className = "btn-plus">+</label><li>HTML</li>
									<input type = "checkbox" className = "plus__checked" id = "css" />
									<label for = "css" className = "btn-plus">+</label><li>CSS</li>
									<input type = "checkbox" className = "plus__checked" id = "css" />
									<label for = "css" className = "btn-plus">+</label><li>Javascript</li>
									<input type = "checkbox" className = "plus__checked" id = "css" />
									<label for = "css" className = "btn-plus">+</label><li>React.js</li>
									<input type = "checkbox" className = "plus__checked" id = "css" />
									<label for = "css" className = "btn-plus">+</label><li>C++</li>
									<input type = "checkbox" className = "plus__checked" id = "css" />
									<label for = "css" className = "btn-plus">+</label><li>Redux</li>
									<input type = "checkbox" className = "plus__checked" id = "css" />
									<label for = "css" className = "btn-plus">+</label><li>React Router</li>
									<input type = "checkbox" className = "plus__checked" id = "css" />
									<label for = "css" className = "btn-plus">+</label><li>Node.js</li>
									<input type = "checkbox" className = "plus__checked" id = "css" />
									<label for = "css" className = "btn-plus">+</label><li>MongoDB</li>
									<input type = "checkbox" className = "plus__checked" id = "css" />
									<label for = "css" className = "btn-plus">+</label><li>Firebase</li>
									<input type = "checkbox" className = "plus__checked" id = "css" />
									<label for = "css" className = "btn-plus">+</label><li>SASS</li>
									<input type = "checkbox" className = "plus__checked" id = "css" />
									<label for = "css" className = "btn-plus">+</label><li>jQuery</li>
									<input type = "checkbox" className = "plus__checked" id = "css" />
									<label for = "css" className = "btn-plus">+</label><li>Bootstrap</li>
								</ul>
							</div>
						</div>	


						<div className = "my__img photo-width">
							<div className = "my__img--hover"><div>Yep That's Me</div></div>
						</div>
					</div>
				</div>
			</div>	
		</div>
	);
}

export default aboutMe;

/*

			<div className = "me__text">
				<h3 className = "heading__tertiary">What Do I Actually Do?</h3>
				<p>
					I 'm a <span className = "dashed">self taught</span> developer and designer. I have strong knowledge of HTML, CSS, Javascript, and React.js. I like to use plain CSS while designing my web pages. CSS gives freedom of trying new things and designing things our own way instead of using libraries like Bootstrap and Material UI.  
					I am currently learning Node.js and MongoDB and learning to integrate React with Node. I also love to do coding challenges every once in a while. Web design and front end development allow me to seek new and creative ideas and combining unrelated things. Web development is where my interests for <span className = "dashed">creativity and logic</span> converge. 
				</p>
			</div>
*/
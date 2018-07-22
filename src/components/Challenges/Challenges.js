import React from 'react';
import './Challenges.css';

const challenges = (props) => {
	return(
		<div className = "showEff">
				<div className = "gradient" />
				<input type = "checkbox" className="lArrow__checkbox" id = "lArrow"/>
	    		<label for = "lArrow" className="lArrow__button">
        			<div className = "lArrow__button--look"
        			 onClick = {props.clicked}></div><div className = "lArrow__button--text">Contact</div>
        		</label>
			<h1 className = "heading__primary--4 heading__primary--c">Competitive Coding Challenges</h1>
			<div className = "row row--2">
				<div className = "col-1-of-2--1">
					<div className = "card">
						<div className = "card__side card__side--front">
							<div className = "card__picture">
								<div className = "card__picture--1"></div>
							</div>
							<div className = "card__details card__details--1">
								<ul>
									<li>Current Rating : <span>1753</span></li>
									<li>Current Stars : <span>3</span></li>
									<li>Highest Rating : <span>1835</span></li>
									<li>Best Stars : <span>4</span></li>
									<li>Best Global Rank in a Contest of <span>204</span></li>
									<li><span>April Challenge 2018</span></li>
								</ul>
							</div>
						</div>
						<div className = "card__side card__side--back card__side--back--1">
							<ul><li><a href = "https://codechef.com" target = "_blank">Visit</a></li><li><a href = "https://codechef.com/users/gagand33p"  target = "_blank">View Profile</a></li></ul>
						</div>
					</div>
				</div>

				<div className = "col-1-of-2--1">
					<div className = "card">
						<div className = "card__side card__side--front">
							<div className = "card__picture">
								<div className = "card__picture--2"></div>
							</div>
							<div className = "card__details card__details--2">
								<ul>
									<li>Current Rating : <span>1286</span></li>
									<li>Current Position : <span>Pupil</span></li>
									<li>Highest Rating : <span>1404</span></li>
									<li>Best Position : <span>Specialist</span></li>
								</ul>
							</div>
						</div>
						<div className = "card__side card__side--back card__side--back--2">
							<ul><li><a href = "https://codeforces.com" target = "_blank">Visit</a></li><li><a href = "https://codeforces.com/profile/Gagandeep98" target = "_blank">View Profile</a></li></ul>
						</div>
					</div>
				</div>
				<div className = "links">
					<h3 className = "heading__tertiary">Other Profiles</h3>
					<ul className = "others">
						<a href = "https://www.hackerrank.com/gagandeep2598" target = "_blank"><li className = "hr"></li></a>
						<a href = "https://www.interviewbit.com/profile/gagaandeepahuja09" target = "_blank"><li className = "ib"></li></a>
						<a href = "https://leetcode.com/garyahuja/" target = "_blank"><li className = "lc"></li></a>
						<a href = "https://www.hackerearth.com/@ahuja.gary" target = "_blank"><li className = "he"></li></a>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default challenges;
import React from 'react';
import './Challenges.css';

const challenges = (props) => {
	return(
		<div>
			<h1 className = "heading__primary--4 heading__primary--c">Competitive Coding Challenges</h1>
			<div className = "row row--2">
				<div className = "col-1-of-2--1">
					<div className = "card">
						<div className = "card__side card__side--front">
							<div className = "card__picture card__picture--1">
							&nbsp;
							</div>
							<div className = "card__details">
								<ul>
									<li>Current Rating : <span>1753</span></li>
									<li>Current Stars : <span>3</span></li>
									<li>Highest Rating : <span>1835</span></li>
									<li>Current Stars : <span>4</span></li>
									<li>Best Global Rank in a Contest of <span>204</span></li>
									<li><span>April Challenge 2018</span></li>
								</ul>
							</div>
						</div>
						<div className = "card__side card__side--back card__side--back--1">
						</div>
					</div>
				</div>

				<div className = "col-1-of-2--1">
					<div className = "card">
						<div className = "card__side card__side--front">
							<div className = "card__picture card__picture--1">
							&nbsp;
							</div>
							<div className = "card__details">
								<ul>
									<li>Current Rating : <span>1753</span></li>
									<li>Current Stars : <span>3</span></li>
									<li>Highest Rating : <span>1835</span></li>
									<li>Current Stars : <span>4</span></li>
									<li>Best Global Rank in a Contest of <span>204</span></li>
									<li><span>April Challenge 2018</span></li>
								</ul>
							</div>
						</div>
						<div className = "card__side card__side--back card__side--back--1">
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default challenges;
import React from 'react';
import './Projects.css'
import m1 from '../../img/gd-2.jpg';

const projects = (props) => {
	return (
		<div className = "images">
			<h1 className = "heading__primary--4">Projects</h1>
			<div className = "row__2">
				<div className = "col-1-of-2">
					<div className = "img-1">
							<div className = "img__text--preview">Preview</div>
							<div className = "img__text--demo">Demo</div>
							<div className = "img__text--github">Github</div>
						<div className = "banner--1">Tic-Tac-Toe</div>
					</div>
				</div>
				<div className = "col-1-of-2">
					<div className = "img-2">
							<div className = "img__text--preview">Preview</div>
							<div className = "img__text--demo">Demo</div>
							<div className = "img__text--github">Github</div>
					<div className = "banner--2">React Calculator</div>
					</div>
				</div>	
			</div>
			<div className = "row__2">
				<div className = "col-1-of-2">
					<div className = "img-1">
							<div className = "img__text--preview">Preview</div>
							<div className = "img__text--demo">Demo</div>
							<div className = "img__text--github">Github</div>
					<div className = "banner--3">Weather Forecast</div>
					</div>
				</div>
				<div className = "col-1-of-2">
					<div className = "img-1">
							<div className = "img__text--preview">Preview</div>
							<div className = "img__text--demo">Demo</div>
							<div className = "img__text--github">Github</div>
					<div className = "banner--4">Youtube Clone</div>
					</div>
				</div>
			</div>
			<div className = "row__2">
				<div className = "col-1-of-2">
					<div className = "img-1">
							<div className = "img__text--preview">Preview</div>
							<div className = "img__text--demo">Demo</div>
							<div className = "img__text--github">Github</div>
					<div className = "banner--3">Wikipedia Viewer</div>
					</div>
				</div>
				<div className = "col-1-of-2">
					<div className = "img-1">
							<div className = "img__text--preview">Preview</div>
							<div className = "img__text--demo">Demo</div>
							<div className = "img__text--github">Github</div>
					<div className = "banner--4">Youtube Clone</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default projects;
	

	/*
				<figure className = "fig col-1-of-4">
					<img src = {m1} alt ="TicTacToe" />
					<figCaption className = "caption">TicTacToe</figCaption>
				</figure>
	*/
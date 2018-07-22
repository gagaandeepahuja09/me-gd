import React,{ Component } from 'react';
import './Projects.css'

class Projects extends Component {

	state = {
		previewLoaded: false,
		selectedId: null,
	}

	loadPreview = (id) => {
		this.setState({ previewLoaded: true });
		this.setState({ selectedId: id });
	}

	closePreview = (id) => {
		this.setState({ previewLoaded: false });
		this.setState({ selectedId: null });
	}

	render() {

		let preview__body = null;
		switch(this.state.selectedId)
		{
			case 'weather-forecast':
				preview__body = (
						<div><div className = "preview--text">React</div><div className = "preview--text">Redux</div><div className = "preview--text">Redux Promise</div><div className = "preview--text">Axios</div><div className = "preview--text">Weather API</div><div className = "preview--text">CSS</div></div>
					);
			break;

			case 'youtube-on-steroids':
				preview__body = (
						<div><div className = "preview--text">React</div><div className = "preview--text">Axios</div><div className = "preview--text">Youtube API</div><div className = "preview--text">CSS</div></div>
					);
			break;

			case 'burger-builder':
				preview__body = (
						<div><div className = "preview--text">React</div><div className = "preview--text">Redux</div><div className = "preview--text">React Router</div><div className = "preview--text">Firebase</div><div className = "preview--text">Axios</div><div className = "preview--text">CSS</div></div>
					);
			break;

			case 'natours-project':
				preview__body = (
						<div><div className = "preview--text">CSS Floats</div><div className = "preview--text">CSS Animations</div><div className = "preview--text">SASS</div></div>
					);
			break;

			case 'react-calculator':
				preview__body = (
						<div><div className = "preview--text">React</div><div className = "preview--text">CSS</div></div>
					);
			break;

			case 'tic-tac-toe':
				preview__body = (
						<div><div className = "preview--text">React</div><div className = "preview--text">CSS</div></div>
					);
			break;
		} 

		let preview = null;
		if(this.state.previewLoaded) {
			preview = (
				<div className = "backdrop" onClick = {this.closePreview}>
					<div className = "preview">
						<div className = "cross" onClick = {this.closePreview}>X</div>
						{preview__body}
					</div>
				</div>
			);
		}

		return (
			<div className = "images showEff">
				<input type = "checkbox" className="lArrow__checkbox" id = "lArrow"/>
	            		<label for = "lArrow" className="lArrow__button">
	            			<div className = "lArrow__button--look"
	            			 onClick = {this.props.clicked}></div><div className = "lArrow__button--text">Challenges</div>
	            		</label>
				<h1 className = "heading__primary--4">Projects</h1>
				{preview}
				<div className = "row__2">
					<div className = "col-1-of-2">
						<div className = "img1 weather-forecast" onClick = {() => this.loadPreview('weather-forecast')}>
							<div className = "img__text--preview" onClick = {() => this.loadPreview('weather-forecast')}>Preview</div>
							<a href = "https://gagaandeepahuja09.github.io/weather-forecast" target = "_blank" className = "img__text--demo">Demo</a>
							<a href = "https://github.com/gagaandeepahuja09/weather-forecast" target = "_blank" className = "img__text--github">Github</a>
							<div className = "banner--3">Weather Forecast</div>
						</div>
					</div>
					<div className = "col-1-of-2">
						<div className = "img1 youtube-on-steroids" onClick = {() => this.loadPreview('youtube-on-steroids')}>
							<div className = "img__text--preview" onClick = {() => this.loadPreview('youtube-on-steroids')}>Preview</div>
							<a href = "https://gagaandeepahuja09.github.io/youtube-on-steroids" target = "_blank" className = "img__text--demo">Demo</a>
							<a href = "https://github.com/gagaandeepahuja09/youtube-on-steroids" target = "_blank" className = "img__text--github">Github</a>
						<div className = "banner--4">Youtube On Steroids</div>
						</div>
					</div>
				</div>
				<div className = "row__2">
					<div className = "col-1-of-2">
						<div className = "img1 burger-builder" onClick = {() => this.loadPreview('burger-builder')}>
								<div className = "img__text--preview" onClick = {() => this.loadPreview('burger-builder')}>Preview</div>
								<a href = "https://gagaandeepahuja09.github.io/burger-builder" target = "_blank" className = "img__text--demo">Demo</a>
								<a href = "https://github.com/gagaandeepahuja09/burger-builder" target = "_blank" className = "img__text--github">Github</a>
						<div className = "banner--3">Burger Builder</div>
						</div>
					</div>
					<div className = "col-1-of-2">
						<div className = "img1 natours-project" onClick = {() => this.loadPreview('natours-project')}>
								<div className = "img__text--preview" onClick = {() => this.loadPreview('natours-project')}>Preview</div>
								<a href = "https://gagaandeepahuja09.github.io/natours-project" target = "_blank" className = "img__text--demo">Demo</a>
								<a href = "https://github.com/gagaandeepahuja09/natours-project" target = "_blank" className = "img__text--github">Github</a>
							<div className = "banner--4">Natours Project</div>
						</div>
					</div>
				</div>
				<div className = "row__2">
					<div className = "col-1-of-2">
						<div className = "img1 tic-tac-toe" onClick = {() => this.loadPreview('tic-tac-toe')}>
							<div className = "img__text--preview" onClick = {() => this.loadPreview('tic-tac-toe')}>Preview</div>
							<a href = "https://gagaandeepahuja09.github.io/tic-tac-toe" target = "_blank" className = "img__text--demo">Demo</a>
							<a href = "https://github.com/gagaandeepahuja09/tic-tac-toe" target = "_blank" className = "img__text--github">Github</a>
							<div className = "banner--1">Tic-Tac-Toe</div>
						</div>
					</div>
					<div className = "col-1-of-2">
						<div className = "img1 react-calculator" onClick = {() => this.loadPreview('react-calculator')}>
							<div className = "img__text--preview" onClick = {() => this.loadPreview('react-calculator')}>Preview</div>
							<a href = "https://gagaandeepahuja09.github.io/react-calculator" target = "_blank" className = "img__text--demo">Demo</a>
							<a href = "https://github.com/gagaandeepahuja09/react-calculator" target = "_blank" className = "img__text--github">Github</a>
							<div className = "banner--2">React Calculator</div>
						</div>
					</div>	
				</div>
			</div>
		);
	}
}

export default Projects;
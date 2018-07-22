import React, { Component } from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Challenges from './components/Challenges/Challenges';
import Contact from './components/Contact/Contact';
import NavCircle from './components/NavCircle/NavCircle';
import './App.css';

class App extends Component {
  state = {
    selectedClass: "header",
  }

  changeClass = (cl) => {
    this.setState({ selectedClass: cl });
  }


  render() { 
    let selClass = null;
    if(this.state.selectedClass === "header")
      selClass =  (<Header next ="aboutMe" clicked = {() => setTimeout(() => { this.changeClass("aboutMe") }, 1600)} />);

    else if(this.state.selectedClass === "aboutMe")
      selClass =  (<AboutMe next ="projects" clicked = {() => setTimeout(() => { this.changeClass("projects") }, 1600)} />);

    else if(this.state.selectedClass === "projects")
      selClass =  (<Projects next ="skills" clicked = {() => setTimeout(() => { this.changeClass("challenges") }, 1600)} />);

    else if(this.state.selectedClass == "challenges")
      return (<Challenges next ="contact" clicked = {() => setTimeout(() => { this.changeClass("contact") }, 1600)} />);

    else if(this.state.selectedClass == "contact")
      return (<Contact next ="contact" clicked = {() => setTimeout(() => { this.changeClass("challenges") }, 1600)} />);        

    return (
      <div>
        <NavCircle />
        {selClass}
      </div>
    );    
  }
}

export default App;


  
/*
    else if(this.state.selectedClass == "projects")
      return (<Projects next ="challenges" clicked = {() => this.changeClass("challenges")} />);

    else if(this.state.selectedClass == "challenges")
      return (<Challenges next ="contact" clicked = {() => this.changeClass("contact")} />);

    else if(this.state.selectedClass == "contact")
      return (<Contact next ="header" clicked = {() => this.changeClass("header")} />); 

        <AboutMe />
        <Projects />
        <Challenges />
        <Contact />
*/
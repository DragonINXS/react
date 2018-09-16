import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
  constructor() {
    super(); // need to call super before defining constructor
    this.state = {
      projects: []
    };
  }

  // method where you get data from
  componentWillMount() {
    this.setState({
      projects: [
        {
          title: "Business Website",
          category: "Web Design"
        },
        {
          title: "Social App",
          category: "Mobile Development"
        },
        {
          title: "Ecommerce Shopping Cart",
          category: "Web Development"
        }
      ]
    });
  }
    
  render() {
    return (
      <div className="App">
        <AddProject AddProject={this} />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;

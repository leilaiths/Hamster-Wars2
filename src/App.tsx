import React from 'react';
import './App.css';
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Battle from './components/Battle';
import Gallery from './components/Gallery';

//import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';


function App() {
  return (
	  <Router> 

		<div className="App">
			<header className="App-header">
				<Home />
				<Battle />
				<Gallery />
				
			</header>
		</div>


		</Router>

  );
}

export default App;

//const Router = (props) => props.children
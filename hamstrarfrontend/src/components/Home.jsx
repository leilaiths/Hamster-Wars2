import React from 'react';
import cutehamster from './hamster-cute1.gif';
import './Home.css';

  function Home() {

	return (
		<>
		
			<div>
			<h1>Hello! This Is About My Hamstersite</h1>	
				<img className='cutehamster' src={cutehamster} alt=""/>
				<div className="text">
			<p> Welcome to HAMSTERWARS! Take a look at all the cute hamsters in <a href="/Gallery">Gallery</a><br></br> Or to get started with the hamster battle you can click on <a href="/Battle">Battle</a> to start your game, Good luck!</p>
			
			</div>
		</div>
		</>

		);
}



export default Home;

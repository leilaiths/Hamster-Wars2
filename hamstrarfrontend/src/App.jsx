import React , {useEffect, useState } from 'react';
import './App.css';
import {Switch} from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Battle from './components/Battle';
import Gallery from './components/Gallery';
import NewHamster from './components/NewHamster';
import Navbar from './components/Navbar';
import Api from './api/Api';
import RandomCard from './components/RandomCard';
import BattleStatus from './components/createNewHamster/BattleStatus';
import BattleHamster from './components/createNewHamster/BattleHamster';


// data till alla funktioner
function App() {

	const [hamstrar, Sethamstrar] = useState([])
	const [reload, setReload] = useState(true)

	const changeReload = () => {
		if (reload === false){
			setReload(true)
		}
	  }
  
useEffect(() => {
	const fetchhamstrar=async()=> {
		const response= await Api.get('/')
		Sethamstrar(response.data);
		setReload(false)
	}
	if(reload) { console.log('hämtahamstrar')
	fetchhamstrar()	
	}
	
	
}, [reload])

console.log(hamstrar)

  return (
	  <React.Fragment>
    <div className="App">
		
    <Router>
		<div>
			<Navbar />
		</div>
		<div className='body'>
		<Switch>
				
			<Route path='/' exact>
			<Home />
			</Route>

			<Route path='/Battle' exact>
			<Battle hamstrar={hamstrar} changeReload={changeReload} />
			</Route>

			<Route path='/Gallery' exact>
			<Gallery  hamstrar={hamstrar} changeReload={changeReload}/>
			</Route>


			<Route path='/NewHamster' exact>
			<NewHamster hamstrar={hamstrar} changeReload={changeReload}/>	
			</Route>

			<Route path='/RandomCard' exact>
			<RandomCard hamstrar={hamstrar} changeReload={changeReload}/>	
			</Route>

			<Route path='/BattleStatus' exact>
			<BattleStatus hamstrar={hamstrar} changeReload={changeReload}/>	
			</Route>

			<Route path='/BattleHamster' exact>
			<BattleHamster hamstrar={hamstrar} changeReload={changeReload}/>	
			</Route>

	</Switch>
	</div>
	
	</Router>

    </div>

</React.Fragment>

  );
}

export default App;

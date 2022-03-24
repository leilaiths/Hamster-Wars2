import React from 'react';
import { useEffect, useState } from "react";
import './Battle.css'
import Api from '../api/Api';
import RandomCard from './RandomCard';

function Battle () {

	const [firstrandomhamstrar, setfirstrandomhamstrar] = useState([])
	const [secondrandomhamstrar, setsecondrandomhamstrar] = useState([])
	useEffect(() => {
		const fetchfirst= async() => {
			const response = await Api.get('/random')
			setfirstrandomhamstrar (response.data) 
		}
		fetchfirst ()
	}, [])
	console.log(firstrandomhamstrar)
	useEffect(() => {
		const fetchsecond= async() => {
			const response = await Api.get('/random')
			setsecondrandomhamstrar (response.data) 
		}
		fetchsecond ()
	}, [])
	
	return (
	
			<div className='Battllebox'>
				
				<RandomCard firstrandomhamstrar={firstrandomhamstrar}  secondrandomhamstrar={secondrandomhamstrar}  />
			
			</div>
			
		)
}

export default Battle;
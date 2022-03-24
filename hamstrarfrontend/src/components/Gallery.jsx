import React from 'react'
import { useEffect, useState} from "react";
import HamsterCard from './HamsterCard';
import './Gallery.css';
import Api from '../api/Api';
import { Link } from "react-router-dom";

const Gallery= (props) => {

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
		
		<div className="box" key={Gallery}>
			{props.message}
				{hamstrar.map((hamster) => (
					<HamsterCard hamster={hamster} changeReload={changeReload}/>
				
					)
)}
		<Link to="NewHamster" className="btn btn-primary">
		Add New Hamster</Link>
			</div>
		
			);

}



export default Gallery;
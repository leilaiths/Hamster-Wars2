
import React from 'react';
import Api from '../api/Api';

function HamsterCard({hamster, changeReload}) {
	const deletehamster = (id) => {
		Api.delete("/" + hamster.id).then((res)=>{
			if (res.status===200) {
				changeReload()
			}
		});
	};

	

	return (
		<div>
			
			
			
			<img src={`http://localhost:1378/img/${hamster.imgName}`} alt="description"/>
			<p>{hamster.name}</p>
			<button onClick={deletehamster}>Delete</button>
			
			

			
		</div>
	)
}

export default HamsterCard

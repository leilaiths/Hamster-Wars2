import React, { useState } from 'react'
import './NewHamster.css'


const NewHamster = (props) => {
  const [inputName, setInputName] = useState('')
  const [inputAge, setInputAge] = useState('')
  const [inputFavFood, setInputFavFood] = useState('')
  const [inputLoves, setInputLoves] = useState('')
  const [inputImgName, setInputImgName] = useState('')
//   const [wins] = useState(0)
//   const [defeats] = useState(0)
//   const [games, setGames] = useState(0)

  const submitHandler = e => {
	console.log('hejhej')  
    e.preventDefault()
    let formData = {
      name: inputName,
      age: inputAge,
      favFood: inputFavFood,
      loves: inputLoves,
      imgName: inputImgName,
      wins: 0,
      defeats: 0,
      games: 0
    }
    async function post () {
      const response = await fetch('http://localhost:1378/hamsters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }) 
    //   const data = await response.json()
    }
    post()
    setInputName('')
    setInputAge('')
    setInputFavFood('')
    setInputLoves('')
    setInputImgName('')
  }

  return (
	<section className="add-hamster-form">
			<label>Name:<br/> 
					<input type="text" 
						onChange={ event => {setInputName(event.target.value)}} 
						value={inputName} 

					/>
				</label>
				<label >Age:<br/>
					<input type="number" 
						onChange={ event => {setInputAge(event.target.value)}} 
						value={inputAge} 
					/>
				</label>
				<label >Favorite Food:<br/>
					<input type="text" 
						onChange={ event => {setInputFavFood(event.target.value)}} 
						value={inputFavFood} 
					/>
				</label>
				<label >Loves:<br/>
					<input type="text" 
						onChange={ event => {setInputLoves(event.target.value)}} 
						value={inputLoves} 
					/>
				</label>
				<label >Upload Image:<br/>
					<div className="upload-container">
						<input type="url" 
							onChange={ event => {setInputImgName(event.target.value)}} 
							value={inputImgName} 
							/>
					</div>    
				</label>
				<label>
					<input type="submit" 
					value="READY FOR BATTLE" 
					className="submit-button" 
					onClick={e => submitHandler(e)}/>
				</label>
				

				
    </section>
  )
}

export default NewHamster

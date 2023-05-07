import React, { useState } from "react";
import './../style/poste.scss'
import Cookies from "js-cookie";

const Poste = () => {

	const [poste, setPoste] = useState("");

	const getPoste = (event) => {setPoste(event.target.value)}

	const handlePoste = () => {
		if(poste !== ''){
			const userPoste = {
				user : Cookies.get('name'),
				poste: poste
			}
			const storedPoste = JSON.parse(localStorage.getItem('posteData'));
			if(storedPoste != undefined)
			{
				const usersPoste = Object.values(storedPoste);
				usersPoste.push(userPoste);
				localStorage.setItem('posteData', JSON.stringify(usersPoste));
			}
			else
			localStorage.setItem('posteData', JSON.stringify([userPoste]));
			setPoste("");
		}
	}

	return(
		<div className="poste">
			<form>
				<textarea rows="4" cols="50" type="text" onChange={getPoste} value={poste}/><br />
				<label>Quoi de neuf ?</label>
				<button onClick={handlePoste} type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Poste;
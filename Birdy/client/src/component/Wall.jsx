import React, { useState } from "react";
import Feed from "./Feed";
import Profil from "./Profil";
import './../style/wall.scss'
import Cookies from "js-cookie";
import { Box } from "@mui/material";
import Navbar from "./Navbar";

const Wall = (props) => {
	

	const [newPseudo, setNewPseudo] = useState("");
	const [bio, setBio] = useState("");
	const [file, setFile] = useState("");


	const getPseudo = (evt) => {setNewPseudo(evt.target.value)}
	const getBio = (evt) => {setBio(evt.target.value)}
	const getFile = (evt) => {setFile(evt.target.value)}


	const handleNewProfil = (e) => {
		const storedUsers = JSON.parse(localStorage.getItem('data'));
		const match = storedUsers.find(user => user.login === Cookies.get('name'));
		if(newPseudo !== '')
			match.pseudo = newPseudo;
		if(bio !== '')
			match.bio = bio;
		if(file !== '')
			match.file = file;
		localStorage.setItem('data', JSON.stringify(storedUsers));
	}


	return(
		<Box>
			<Navbar />
		</Box>
	);
}

export default Wall;
/*			<div className="wall">
				<Profil logout={props.logout}/>
				<Feed />
			</div>
			<div className="overlay">
				<form onSubmit={handleNewProfil}>
					<input type="texte" className="new-pseudo" onChange={getPseudo}/>
					<input type="texte" className="bio" onChange={getBio}/>
					<input type="file" className="new-img" onChange={getFile}/>
					<button type="submit" className="sub-bt">Submit</button>
				</form>
			</div>*/
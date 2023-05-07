import React from "react";
import './../style/feed.scss'
import Poste from './Poste'
import Publication from "./Publication";

const Feed = (props) => {

	const storedPoste = JSON.parse(localStorage.getItem('posteData'));
	return(
		<div className="feed">
			<div className="acceuil">
				<h1>Tertwee</h1>
			</div>
			<Poste />
			{
				storedPoste ?
					storedPoste.map(poste => <Publication poste={poste}/>) : 
					<div></div>
			}
		</div>
	);
}

export default Feed;
import React from "react";
import './../style/publication.scss';

const Publication = (props) => {
	return(
		<div className="publication">
			<div className="bando">
				<img src="default.jpg" alt="prof" className="prof"/>
				<h1>{props.poste.user}</h1>
			</div>
			<div className="contenu">
				<p>{props.poste.poste}</p><br />
			</div>
		</div>
	);
}

export default Publication;
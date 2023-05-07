import React from "react";
import Logout from "./LogoutButton";
import './../style/profil.scss'
import Cookies from "js-cookie";


const Profil = (props) => {

	return(
		<div className="profil">
			<Logout logout={props.logout}/>
			<img src="default.jpg" alt="profil" className="profil-picture" />
			<div>
			</div>
		</div>
	);
}

export default Profil;
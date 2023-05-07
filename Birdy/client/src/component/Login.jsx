import { useState } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import {
	Box,
	TextField,
	useMediaQuery,
	Typography,
  } from "@mui/material";
import { setLogin } from "../state";

const Login = (props) => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	const getLogin = (evt) => {setLogin(evt.target.value)}
	const getPassword = (evt) => {setPassword(evt.target.value)}
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const dispatch = useDispatch();
	
	function submitForm(data) {
		return {
		  type: 'SUBMIT_FORM',
		  payload: data
		};
	  }
	const handleLogin = (event) => {
		event.preventDefault();
		const loginError = document.querySelector(".error");
		axios({
				method : "post",
				url: "http://localhost:5000/auth/login",
				withCredentials: true,
				data: {
					login,
					password,
				},
			})
			.then((res) => {
				props.login();
				})
			.catch((err) => {
				loginError.innerHTML = "Nom d'utilisateur ou mot de passe incorrect.";
				console.log(err)
			})
	}

	return (

		<div className="form-around">
				<div className="form_form">
					<form>
						<Box
							marginTop="5rem"
							display="grid"
							gap="30px"
							gridTemplateColumns="repeat(4, minmax(0, 1fr)"
							sx={{
								"& > div": { gridColumn: isNonMobile ? undefined : "span 4"},
							}}
							>
							<TextField
								label="Login"
								name="login"
								onChange={getLogin}
								sx={{ gridColumn: "span 4" }}
							/>
							<TextField
								label="Password"
								type="password"
								name="password"
								onChange={getPassword} 
								sx={{ gridColumn: "span 4" }}
							/>
							<Typography className="error" color="#c00808b9"></Typography>
						</Box>
						<Box
							marginBottom="5rem"
							type="submit"
							sx={{
							m: "1rem 0",
							p: "1rem",}}
							borderRadius="4rem"
							gridTemplateColumns="repeat(4, minmax(0, 1fr)"
						>
							<button type="submit" onClick={handleLogin} className="login_bt">
								Log In
							</button>
							<br />
							<div>
								<br />
								<Typography>Don't have account ? <button className="signin_bt" onClick={props.form}>Sign in</button></Typography>
							</div>
						</Box>
					</form>
					</div>
		</div>
	);
}

 export default Login;
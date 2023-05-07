import { useState } from 'react';
import axios from "axios";
import {
	Box,
	TextField,
	useMediaQuery,
	Typography,
	useTheme,
  } from "@mui/material";

const Signin = (props) => {

const [email, setMail] = useState("");
const [login, setLogin] = useState("");
const [password, setPass1] = useState("");
const [pass2, setPass2] = useState("");

const getMail = (evt) => {setMail(evt.target.value)};
const getPass1 = (evt) => {setPass1(evt.target.value)};
const getPass2 = (evt) => {setPass2(evt.target.value)};
const getLogin = (evt) => {setLogin(evt.target.value)};
const isNonMobile = useMediaQuery("(min-width:600px)");
const { palette } = useTheme();


const submissionHandler = (evt) => {
	if (password === pass2)
		{
			axios({
				method : "post",
				url: "http://localhost:5000/auth/register",
				data: {
					email,
					login,
					password,
				}
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err)
			})
		}
}


 return (

	<div className='form-around'>
				<div className='form_form'>
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
								label="Email"
								name="email"
								onChange={getMail}
								sx={{ gridColumn: "span 4" }}
							/>
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
								onChange={getPass1} 
								sx={{ gridColumn: "span 4" }}
							/>
							<TextField
								label="Confirm password"
								type="password"
								name="confpassword"
								onChange={getPass2} 
								sx={{ gridColumn: "span 4" }}
							/>
							<Typography className="error"></Typography>
						</Box>
						<Box
							marginBottom="5rem"
							type="submit"
							sx={{
							m: "2rem 0",
							p: "1rem",}}
							borderRadius="4rem"
							gridTemplateColumns="repeat(4, minmax(0, 1fr)"
						>
							<br />
							<button onClick={submissionHandler} className="login_bt">
								Sign In
							</button>
							<br />
							<div>
								<br />
								<Typography>Already an account ? <button onClick={props.form} className="signin_bt">Login</button></Typography>
							</div>
						</Box>
					</form>
				</div>
		</div>

	);
}


export default Signin;
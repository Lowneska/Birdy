import React, { useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Login from "./Login";
import Signin from "./Signin";
import './../style/welcome.scss'
import './../style/signin.scss'

const WelcomePage = (props) => {
	const theme = useTheme();
	const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
	const [form, setForm] = useState(1);

	const toSignin = () => {
		setForm(0);
	}

	const toLogin = () => {
		setForm(1);
	}


	return(
		<div>
			<Box>
      			<Box
       				width="100%"
        			backgroundColor={theme.palette.background.alt}
        			textAlign="center"
      			>
        			<Typography fontWeight="bold" fontSize="32px" color="#b7f4ff">
						Sminoukys
        			</Typography>
      			</Box>
				  <Box
					width={isNonMobileScreens ? "50%" : "93%"}
					m="2rem auto"
					borderRadius="1.5rem"
					backgroundColor={theme.palette.background.alt}
					>
					{form ?  
						(<Login login={props.login} form={toSignin}/> ) :
						(<Signin form={toLogin}/>)
					}
				</Box>
			</Box>
		</div>
	);
}

export default WelcomePage;
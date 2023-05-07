import { useEffect, useState } from 'react';
import Wall from './Wall';
import WelcomePage from './WelcomePage';
import Cookies from 'js-cookie';
import { UidContext } from './pages/AppContext';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../theme";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { getUser } from "../action/user.action"

const MainPage = (props) => {
	const mode = useSelector((state) => state.mode);
	const dispatch = useDispatch();
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	const [connected, setConnected] = useState(1);
	const [uid, setUid] = useState(null);


	useEffect(() => {
		axios({
			method: "get",
			url: "http://localhost:5000/auth/jwt",
			withCredentials: true,
		  })
			.then((res) => {
			  setUid(res.data);
			  setConnected(0);
			})
			.catch((err) => {
				console.log("No token");
			})
			if (uid) 
				dispatch(getUser(uid));
	}, [uid, dispatch]);
	
	const getConnected = (user) =>{
			setConnected(0);
	}

	const setLogout = () => {
		Cookies.remove("name", { path: '/', domain: 'localhost' });
		console.log(Cookies.get('name'));
		setConnected(1);
	}

	return (
		<UidContext.Provider value={uid}>
			< ThemeProvider theme={theme}>
				{connected ? <WelcomePage login={getConnected}/> : <Wall logout={setLogout}/>}
			</ThemeProvider>
		</UidContext.Provider>
	);
}

export default MainPage;
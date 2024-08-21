import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import axios from "axios"
import Home from './Components/Home/home'
import DummyHome from './Components/Home/dummyHome'
import Login from './Components/Logins/login'
import Register from './Components/Logins/register'
import _404 from './Components/404/404'
import Fitness from './Components/NavComponents/Fitness/Fitness'
import Calculators from './Components/NavComponents/Calculators/Calculators'
import Nutrition from './Components/NavComponents/Nutrition/Nutrition'

function App() {
	const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("loggedIn")) | false);
	const [user, setUser] = useState(localStorage.getItem("User") | "")
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const response = await axios.get("http://localhost:5000/home");
	// 			setData(response.data);
	// 			console.log(response.data);
	// 		} catch (err) {
	// 			console.log(err)
	// 		}
	// 	}
	// 	fetchData();
	// 	return () => {
	// 		setData(null);
	// 	}
	// }, [])

	useEffect(() => {
		setUser(localStorage.getItem("User"))
	}, [user])

	const handleLogin = (username) => {
		localStorage.setItem("loggedIn", true);
		localStorage.setItem("User", username)
		setLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
		setUser(localStorage.getItem("User"));
	};

	// Function to handle logout
	const handleLogout = () => {
		localStorage.setItem("loggedIn", false);
		localStorage.setItem("User", "");
		setLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
		setUser(localStorage.getItem("User"));
	};

	console.log(user)

	return (
		<>
			<Routes>
				<Route path="/" element={loggedIn ? <Home onLogout={handleLogout} user={user} /> : <DummyHome />} />

				<Route path="login" element={<Login onlogin={handleLogin} />} />
				<Route path="register" element={<Register onlogin={handleLogin} />} />

				<Route path="/nutrition" element={loggedIn ? <Nutrition onLogout={handleLogout} user={user} /> : <_404 />} />
				<Route path="/fitness" element={loggedIn ? <Fitness onLogout={handleLogout} user={user} /> : <_404 />} />
				<Route path="/calculators" element={loggedIn ? <Calculators onLogout={handleLogout} user={user} /> : <_404 />} />

			</Routes>
		</>
	)
}

export default App

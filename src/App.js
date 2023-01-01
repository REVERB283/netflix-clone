import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import Login from "./pages/Login";

function App() {
	const user = null;

	return (
		<div className="app">
			<BrowserRouter>
				{!user ? (
					<Login />
				) : (
					<Routes>
						<Route path="/" element={<HomeScreen />} />
					</Routes>
				)}
			</BrowserRouter>
		</div>
	);
}

export default App;

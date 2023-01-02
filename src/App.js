import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import LandingPage from "./pages/LandingPage";

function App() {
	const user = null;

	return (
		<div className="app">
			<BrowserRouter>
				{!user ? (
					<LandingPage />
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

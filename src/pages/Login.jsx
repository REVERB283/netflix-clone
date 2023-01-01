import React from "react";
import "./Login.css";

function Login() {
	return (
		<div className="login">
			<div className="login__background">
				<img className="login__logo" src={process.env.PUBLIC_URL + "/netflix-logo.png"} alt="logo" />
				<button className="login__button">Sing In</button>
			</div>
		</div>
	);
}

export default Login;

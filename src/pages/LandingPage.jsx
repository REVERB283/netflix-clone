import React, { useState } from "react";
import "./LandingPage.css";
import Login from "./Login";

function LandingPage() {
	const [signIn, setSignIn] = useState(false);

	return (
		<div className="landingPage">
			<div className="landingPage__background">
				<img className="landingPage__logo" src={process.env.PUBLIC_URL + "/netflix-logo.png"} alt="logo" />
				<button className="landingPage__button" onClick={() => setSignIn(true)}>
					Sing In
				</button>
				<div className="landingPage__background--fade"></div>
			</div>
			<div className="landingPage__body">
				{signIn ? (
					<Login />
				) : (
					<>
						<h1>Unlimited films, TV programmes and more.</h1>
						<h2>Watch anywhere. Cancel at any time.</h2>
						<h3>Ready to watch? Enter your email to create or restart your membership.</h3>
						<div className="landingPage__input">
							<form>
								<input type="email" placeholder="Email Address" />
								<button className="landingPage__getStarted" onClick={() => setSignIn(true)}>
									GET STARTED
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default LandingPage;

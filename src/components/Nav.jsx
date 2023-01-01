import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	const transitionNavBar = () => {
		setShow(window.scrollY > 100 ? true : false);
	};

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<div className="nav__contents">
				<img className="nav__logo" src={process.env.PUBLIC_URL + "/netflix-logo.png"} alt="netflix" />
				<img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
			</div>
		</div>
	);
}

export default Nav;

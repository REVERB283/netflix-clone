import "./Login.css";

function Login() {
	return (
		<div className="login">
			<form>
				<h1>Sign In</h1>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button type="submit">Sign In</button>
				<h4>
					<span className="login__gray">New to Netflix? </span>
					<span className="login__link">Sign Up now.</span>
				</h4>
			</form>
		</div>
	);
}

export default Login;

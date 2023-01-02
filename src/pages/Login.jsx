import "./Login.css";

function Login() {
	return (
		<div className="login">
			<form>
				<h1>Sign In</h1>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button type="submit">Sign In</button>
			</form>
		</div>
	);
}

export default Login;

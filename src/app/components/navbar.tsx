export default function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid my-3">
					<ul className="flex">
						<li className="mx-3">
							<a href="/">Home</a>
						</li>
						<li className="mx-3">
							<a href="/notice">Notice</a>
						</li>
						<li className="mx-3">
							<a href="/login">Login</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}
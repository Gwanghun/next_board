export default function Login() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-between p-24">

			<div>
				<h1 className="text-4xl font-bold">Login</h1>
				<div>
					<form>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
							<div id="emailHelp" className="form-text"> never share your email with anyone else.</div>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
							<input type="password" className="form-control" id="exampleInputPassword1"/>
						</div>
					</form>
				</div>
			</div>

		</div>
	)
}
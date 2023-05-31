import React, { useState } from 'react'
import { Link } from "react-router-dom";
function SignUp() {
	const [credentials, setcredentials] = useState("");
	const signuprequest = async (name, Email, password) => {
		const url = 'https://inb.vercel.app/api/auth/Create_User';
		const response = await fetch(url, {
			method: 'post',
			mode: 'cors',
			headers: {
				'content-Type': 'application/json'
			},
			body: JSON.stringify({ name: name, email: Email, password: password })
		})
		console.log(response);
		if(response.ok){
			alert("user Created Kindy sign in using defined creds jwt feature still pending");
		}
	}
	
	const onchangehandler1 = (e) => {
		setcredentials({ ...credentials, [e.target.name]: [e.target.value] })
	}
	return (
		<div>
			<p className='ml-5 text-5xl font-bold'>Sign Up</p>
			<div className='m-7'>
				<div class="mb-3 row">
					<label for="name" class="col-sm-2 col-form-label">Name</label>
					<div class="col-sm-10">
						<input type="emaiil" name="name" class="form-control-plaintext" value={credentials.name} onChange={onchangehandler1} placeholder='Your Name' />
					</div>
				</div>
				<div class="mb-3 row">
					<label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
					<div class="col-sm-10">
						<input type="text" readonly class="form-control-plaintext" name="Email" id="staticEmail" onChange={onchangehandler1} value={credentials.Email} placeholder="email@example.com" />
					</div>
				</div>
				<div class="mb-3 row">
					<label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
					<div class="col-sm-10">
						<input type="password" name="password" onChange={onchangehandler1} value={credentials.password} placeholder='Your Passwoord' class="form-control" id="inputPassword" />
					</div>
				</div>
				<button className="btn btn-outline-success float-right mx-11" type="submit" onClick={() => {
					if (typeof (credentials.name) == "string") { signuprequest(credentials.name, credentials.email, credentials.password) }
					else {
						signuprequest(credentials.name[0], credentials.Email[0], credentials.password[0])
					}
				}
				}>Login</button>
				<p>Existing user <Link to="/login"> Login to Continue </Link></p>
			</div>
		</div>)
}

export default SignUp
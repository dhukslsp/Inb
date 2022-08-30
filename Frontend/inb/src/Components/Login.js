import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
function Login() {
	var myredirect = useNavigate();
	const [mystate, changestate] = useState("");
	const loginrequest = async (Email, password) => {
		const url = 'http://localhost:3012/api/auth/Login';
		const response = await fetch(url, {
			method: 'post',
			mode: 'cors',
			headers: {
				'content-Type': 'application/json'
			},
			body: JSON.stringify({ email: Email, password: password })
		})
		if (response.ok) {
			const newjson = await response.json();
			localStorage.setItem("tocken",newjson.jwtData);// Settinbg jwt data
			myredirect("/");
		}
		else {
			alert("Invalid Credential")
		}
	}
	const onchange1 = (e) => {
		changestate({ ...mystate, [e.target.name]: [e.target.value] })
	}
	return (
		<div className='m-7'>
			<p className='mb-6 text-5xl font-bold'>Login</p>
			<div class="mb-3 row">
				<label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
				<div class="col-sm-10">
					<input name="email" value={mystate.email} onChange={onchange1} type="text" readonly class="form-control-plaintext" id="staticEmail" />
				</div>
			</div>
			<div class="mb-3 row">
				<label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
				<div class="col-sm-10">
					<input name="password" value={mystate.password} onChange={onchange1} type="password" class="form-control" id="inputPassword" />
				</div>
			</div>
			<div>
				<button className="btn btn-outline-success float-right mx-11" type="submit" onClick={() => {
					if (typeof (mystate.name) == "string") { loginrequest(mystate.email, mystate.password) }
					else {
						loginrequest(mystate.email[0], mystate.password[0])
					}
				}
				}>Login</button>
			</div>
		</div>
	)
}

export default Login
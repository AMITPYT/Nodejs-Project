import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Login(props) {
    let history = useHistory()
    const [credinationl, setCredinational] = useState({email: "", password: ""})
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
      
            headers: {
              'Content-Type': 'application/json',
             
      
            },
            body: JSON.stringify({email: credinationl.email, password: credinationl.password})
          });
          const json = await response.json()
          console.log(json)
          if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history.push('/');
            props.showAlert("Login Successfully", "success");
            
          }
          else{
            props.showAlert("Invalid User", "danger");
          }
    }
    const onChange = (e) => {
        setCredinational({ ...credinationl, [e.target.name]: e.target.value })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">                   
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" value={credinationl.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
                    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credinationl.password} onChange={onChange} id="password" name='password'/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login

import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

function Signup(props) {
    let history = useHistory()
    const [credinationl, setCredinational] = useState({name: "", email: "", password: "", cpassword: ""})
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {name, email, password} = credinationl;
        const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
            method: 'POST',
      
            headers: {
              'Content-Type': 'application/json',
             
      
            },
            body: JSON.stringify({name, email, password})
          });
          const json = await response.json()
          console.log(json)
          if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history.push('/');
            props.showAlert("Account Created Successfully", "success")
          }
          else{
            props.showAlert("Invalid id", "danger")
          }
    }
    const onChange = (e) => {
        setCredinational({ ...credinationl, [e.target.name]: e.target.value })
    }


    return (
        <div className='col-md-6 col-10 mx-auto mt-5'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control"  onChange={onChange} id="name" name='name' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control"  onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
                    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control"  onChange={onChange} id="password" name='password' minLength={7} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"  onChange={onChange} id="cpassword" name='cpassword'  minLength={7} required/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Signup

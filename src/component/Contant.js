import React,{useState} from 'react'

function Contant() {

    // let history = useHistory()
    const [user, setUser] = useState({name: "", phone: "", email: "", message: ""})

    let name, value
    const onChange = (e) =>{
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]: value});
    }
    return (
        <>
            <h2 className='head'> Contact Us</h2>
            <div className='form'>
                <div className=" mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={user.name} onChange={onChange} id="exampleFormControlInput1" placeholder="Enter your name" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone No</label>
                    <input type="number" className="form-control" name='phone'value={user.phone} onChange={onChange}  id="exampleFormControlInput1" placeholder="Enter phone no" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" name='email' value={user.email} onChange={onChange}  id="exampleFormControlInput1" placeholder="Enter your email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" name='message' value={user.message} onChange={onChange}  id="exampleFormControlTextarea1" rows="3" minLength={15} required></textarea>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        
        </>
    )
}

export default Contant

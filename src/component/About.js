import React from 'react'
import { Link } from 'react-router-dom';
// import MoreDetails from './MoreDetails';



const About = () => {
    // const handleDetails = () => {
    //     return MoreDetails();
    // }

    return (
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className='row'>
                    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-contant-center flex-column mt-5' >
                        <div className='text'>
                            <div className='text1'>
                            <h1> Welcome To About Section Of <strong className='brand-name'>Notes</strong></h1>
                            </div>
                            <p className='my-2'> I am the talented developer making this website </p>
                            <div className='mt-3'>
                                <Link to='/' className='btn-get-started'> Get Started </Link>
                                <Link to='/MoreDetails' className='btn-get-started mx-2'  > More Details </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 order-1 order-lg-2 header-img'>
                        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/contract-sign-4550512-3773860.png" className='image' alt="hello" />
                    </div>
                </div>
            </section>
            <footer className='Footer'>
                <p> © 2022 TodoBook. All Right Reserved | Terms and Condition </p>
            </footer>
        </>
        
    )
}
export default About
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routeContext } from '../contextAPI/RouteGaurd';


function Pnf() {
      const {role,setRole,authorisedUser,setAuthorisedUser} = useContext(routeContext)
      const navigate = useNavigate()

      const backToHome =()=>{
        if(role=="user"){
          navigate("/")
        }else{
          navigate('/admin')
        }
      }

  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img className='w-100' src="https://miro.medium.com/v2/resize:fit:1400/0*GUYQoLJ08bNdTigR.gif" alt="Page not Found" />
      <p>Oh No!</p>
      <h3 className='text-2xl font-medium'>Look Like You're Lost</h3>
      <p>The page you are looking for is not Available</p>
      {
        authorisedUser ?
        <button onClick={backToHome} className='bg-black mt-5 px-3 py-2 text-white'> Home</button>
        :
        <Link to={'/'} className='bg-black mt-5 px-3 py-2 text-white'>Back to Home</Link>
      }
    </div>
  )
}

export default Pnf
import React, { useState } from 'react'
import Header from '../components/Header'
import { FaCheckCircle } from 'react-icons/fa'
import Edit from '../components/Edit'
import UploadBook from '../components/UploadBook'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'

function Profile() {
  const [currentTab,setCurrentTab] = useState(1)
  return (
    <>
      <Header/>
      <div style={{height:'200px'}} className='bg-black'></div>
      <div style={{width:'230px',height:'230px',borderRadius:'50%', marginTop:"-130px", marginLeft:'70px'}} className='bg-white p-3'>
        <img style={{width:'200px', height:'200px', borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/thumbnails/048/334/475/small/a-person-icon-on-a-transparent-background-png.png" alt= "user" />
      </div>
      <div className='md:flex justify-between px-5'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-black md:text-3xl'>UserName</h1>
          <FaCheckCircle className='text-blue-700 ms-3' />
        </div>
        <div>
          <Edit/>
        </div>
      </div>
      <p className='text-xl font-bold px-20 mt-5'> Bio</p>
      <p className='text-justify md:px-20 px-5 my-5'>user profile management dashboard is a centralized digital interface that lets administrators or individual users view, edit, and control account details, security settings, and role permissions in one place.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quam a consequuntur ullam eveniet saepe amet fugiat rerum eaque ipsam, reiciendis excepturi minima corrupti eos exercitationem, nemo praesentium aut tempore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quam a consequuntur ullam eveniet saepe amet fugiat rerum eaque ipsam, reiciendis excepturi minima corrupti eos exercitationem, nemo praesentium aut tempore?</p>
      <div className='md:px-40'>
        {/* tabs */}
        <div className='flex justify-center items-center my-8 font-medium text-lg'>
          <p onClick={()=>setCurrentTab(1)} className={currentTab==1 ? 'p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer' : 'p-4 border-gray-400 border-b  rounded cursor-pointer'}>Upload Book</p>
          <p onClick={()=>setCurrentTab(2)} className={currentTab==2 ? 'p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer' : 'p-4 border-gray-400 border-b  rounded cursor-pointer'}>Upload Book Status</p>
          <p onClick={()=>setCurrentTab(3)} className={currentTab==3 ? 'p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer' : 'p-4 border-gray-400 border-b  rounded cursor-pointer'}>Purchase History</p>
        </div>
        {/* tab content */}
        {
          currentTab==1 &&
            <div><UploadBook/></div>
        }
        {
          currentTab==2 &&
            <div><BookStatus/></div>
        }
        {
          currentTab==3 &&
            <div><Purchase/></div>
        }
      </div>
    </>
  )
}

export default Profile
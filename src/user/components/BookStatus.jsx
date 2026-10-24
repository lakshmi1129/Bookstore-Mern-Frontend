import React from 'react'
import { useState } from 'react'
import { deleteUserBookAPI, getUserBooksAPI } from '../../services/allAPI';
import { useEffect } from 'react';

function BookStatus() {

    const [uploadBooks, setUploadBooks] = useState([])
    console.log(uploadBooks);

    useEffect(()=>{
        getUploadBooks()
    },[])

    const getUploadBooks = async()=>{
        const result = await getUserBooksAPI()
        setUploadBooks(result.data)
    }

    const deleteBook = async (id)=>{
        const result = await deleteUserBookAPI(id)
        getUploadBooks()
    }
    
  return (
    <div className='p-10 my-15 shadow rounded'>
        {/* duliplicate book  */}
       {
        uploadBooks?.length>0 ?
        uploadBooks?.map(book=>(
             <div className='p-5 rounded mt-4 bg-blue-100'>
                <div className='md:grid grid-cols-[3fr_1fr]'>
                    <div className='px-4'>
                        <h1 className='text-2xl'>{book?.title}</h1>
                        <h2 className='text-xl'>{book?.author}</h2>
                        <h3 className='text-lg text-blue-700'>₹ {book?.discountPrice}</h3>
                        <p className='text-justify'>{book?.abstract}</p>
                        {/* status image */}
                        <div className='flex my-3'>
                            {
                                book?.status=="pending" ?
                                <img width={'120px'} height={'120px'} src="https://t4.ftcdn.net/jpg/15/42/78/73/360_F_1542787314_EJF9wn3UH9Nd8BvShQ6VSKKYgaSQByuS.png" alt=" Pending" />
                                :
                                book?.status=="approved"?
                                  <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/024/382/871/non_2x/approved-sign-symbol-icon-label-stamp-green-round-design-transparent-background-free-png.png" alt=" Approved" />
                                :
                                 <img width={'120px'} height={'120px'} src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt=" Sold" />
                            }
                        </div>
                    </div>
                    <div className='px-4 mt-4 md:mt-0'>
                        <img className='w-full' src={book?.imageURL} alt=" Book" />
                        <div className='mt-4 flex justify-end'>
                            <button onClick={()=>deleteBook(book?._id)} className='bg-red-700 text-white p-2 rounded'>DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
           ))
        :
        <div className='text-center font-bold my-5'>Book Not Found!!!</div>
      
       }
    </div>
  )
}

export default BookStatus
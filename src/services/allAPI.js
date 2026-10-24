import apiService from "../api/apiService";

// register : auth component when click register button
export const registerAPI = async (userData)=>{
    return await apiService("POST","/register",userData)
}

// login : auth component when click login button
export const loginAPI = async (userData)=>{
    return await apiService("POST","/login",userData)
}

// google-login api : auth component when clicking on google login button
export const googleLoginAPI = async (userData)=>{
    return await apiService("POST","/google-login",userData)
}

// edit user api : edit component when clicking on edit button
export const userUpdateAPI = async (userId,userData)=>{
    return await apiService("PUT",`/user/${userId}`,userData)
}

// add Book api : uploadBook component when clicking on add button
export const addBookAPI = async (bookDetails)=>{
    return await apiService("POST",`/book`,bookDetails)
}

// get home Book api : home component  when page loads
export const getHomeBooksAPI = async ()=>{
    return await apiService("GET",`/home-books`,{})
}

// get all Book api : book component  when page loads
export const getAllBooksAPI = async (searchKey)=>{
    return await apiService("GET",`/all-books?search=${searchKey}`,{})
}

// get User Book api : BookStatus component  when it opens
export const getUserBooksAPI = async ()=>{
    return await apiService("GET",`/user-books`,{})
}

// get user brought Book api : book component  when it opens
export const getUserBroughtBooksAPI = async ()=>{
    return await apiService("GET",`/brought-books`,{})
}

// dele user uploaded Book api : bookStatus component  when click on delete button
export const deleteUserBookAPI = async (bookId)=>{
    return await apiService("DELETE",`/book/${bookId}`,{})
}


// /view-book/:id
export const viewBookAPI = async (id)=>{
    return await apiService("GET",`/view-book/${id}`,{})
}
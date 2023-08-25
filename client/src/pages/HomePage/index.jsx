import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import SideMenu from '../../Components/SideMenu'
import SearchBar from '../../Components/SearchBar'

const HomePage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const token = localStorage.getItem("token")
  const headers = {
    Authorization : `Bearer ${token}`
  }
  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/user/search?query=${query}`,{headers});
      setSearchResults(response.data);
      console.log(searchResults)
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  return (
    <>
     <SideMenu/>
    <SearchBar onSearch={handleSearch}/>
     
    </>
   
    
  )
}

export default HomePage
import "../SideMenu/style.css"
import logo from "../../assets/logo.png"
import home from "../../assets/feed.svg" 
import search from "../../assets/search.svg" 
import exit from "../../assets/logout.svg" 
import recipe from "../../assets/recipe_book.svg" 
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"


const SideMenu = () =>{
  const token = localStorage.getItem("token")
  const navigater = useNavigate()
  const logout = () => navigater('/')
  const moveToHome = () => navigater('/home')
  const moveToForm = () => navigater('/recipe')
  const moveToSearch = () => navigater('/search')

  const handleLogout = async ()=>{

    const headers = {
        Authorization : `Bearer ${token}`
    }
    const response = await axios.post(
        "http://localhost:8000/api/user/logout",{},
        { headers }
        )
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("name")
        window.localStorage.removeItem("id")
        logout()
    }
    

    return(
        <>
        <div className="side-menu">
             <div className="logo-container">
               <img src={logo} alt="" className="logo" />
            </div>
            
            <div className="side-menu-subtitle" onClick={moveToHome}>
                <img src={home} alt="home" />
                <span>Home</span>
            </div>
            <div className="side-menu-subtitle" onClick={moveToSearch}>
                <img src={search} alt="search" />
                <span>Search</span>
            </div>
            <div className="side-menu-subtitle" onClick={moveToForm}>
                <img src={recipe} alt="create" />
                <span>Create Recipe </span>
            </div>
            <div className="side-menu-subtitle"  onClick={handleLogout}>
                <img src={exit} alt="profile"/>
                <span>logout</span>
            </div>
            

        </div>
        </>
    )

}
export default SideMenu
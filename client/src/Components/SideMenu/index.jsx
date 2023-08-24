import "../SideMenu/style.css"
import logo from "../../assets/logo.png"
import home from "../../assets/feed.svg" 
import search from "../../assets/search.svg" 
import profile from "../../assets/profile.svg" 
import recipe from "../../assets/recipe_book.svg" 
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const SideMenu = () =>{
  const navigater = useNavigate()
  const moveToProfile = () => navigater('/profile')
  const moveToHome = () => navigater('/home')
  const moveToForm = () => navigater('/recipe')
  const moveToSearch = () => navigater('/search')

    

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
            <div className="side-menu-subtitle"  onClick={moveToProfile}>
                <img src={profile} alt="profile"/>
                <span>Profile</span>
            </div>
            

        </div>
        </>
    )

}
export default SideMenu
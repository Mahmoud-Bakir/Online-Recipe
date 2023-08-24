import { useState } from "react";
import LoginForm from "../../Components/LoginForm"
import RegisterForm from "../../Components/RegisterForm";

const Authentication = () => {
    const [showLogin,SetShowLogin] = useState(true)
    
    const handleToggleHide = () => {
        SetShowLogin(false)
    }
    const handleToggleShow = () => {
        SetShowLogin(true)
    }
    
    return (
        <>
        {showLogin ? <LoginForm handleToggle = {handleToggleHide} /> : <RegisterForm handleToggle={handleToggleShow}/>}
       </>
    );
}
export default Authentication;
import Partition from "../Partition";
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.png"

const RegisterForm = ({handleToggle}) => {

  const navigater = useNavigate();
  const moveToHome = () => navigater("/home");

  const defaultState = {
    name:"",
    email: "",
    password: "",
  };
  const [data, setData] = useState(defaultState);
  const [message, setMessage] = useState("");

  const handleDataChange = (e) => {
    setMessage("")
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleRegister = async () => {
    if(data.name=="" || data.email=="" || data.password==""){
      setMessage("All fields are required")
      return
    }
    const response = await axios.post(
      "http://localhost:8000/api/guest/register",
      data
    );
    if (response.status === 401 && response.data.message === "Unauthorized") {
      setMessage("Wrong Credentials");
      return;
    }else{
      window.localStorage.setItem("token", response.data.token);
      moveToHome()
      console.log(response.data.token);
    }
  
  };
  return (
    <>
      <div className="login-form-container">
        <div className="logo-container-form">
          <img src={logo} alt="" />
        </div>
        <div className="part">
          <Partition
            Name={"name"}
            Itype={"text"}
            holder={"please enter your user name"}
            lab={"User name"}
            value={data.name}
            onChange={handleDataChange}
          />
        </div>
        <div className="part">
          <Partition
            Name={"email"}
            Itype={"email"}
            holder={"please enter your Email"}
            lab={"Email"}
            value={data.email}
            onChange={handleDataChange}
          />
        </div>
        <div className="part">
          <Partition
            Name={"password"}
            Itype={"password"}
            holder={"Please enter your Password here"}
            lab={"Password"}
            value={data.password}
            onChange={handleDataChange}
          />
        </div>
        <Button className="button-register black" name={"Register"} onSubmit={handleRegister} />
        <p className="error">{message}</p>
        <p  className="footer-text"> 
          Already have an account?
          <span className="switch" onClick={handleToggle}> Sign In</span>
        </p>
     </div> 
    </>
  );
};
export default RegisterForm;

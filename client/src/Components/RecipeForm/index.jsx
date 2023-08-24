import Partition from "../Partition";
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css"
import recipe from "../../assets/recipe_prepare.svg"
import Select from "../Select";


const RecipeForm = () => {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');

  const navigater = useNavigate();
  const moveToHome = () => navigater('/home');

  const defaultState = {
    name: "",
    author: "",
    image_url: "", 
    description: "",
    likes: 0,
    user_id: id,
  };
  const [data, setData] = useState(defaultState);

  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setData({ ...data, image_url: reader.result.split(',')[1] });
      };
    }
  };

  const handleAddBook = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/users/add_book',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data)
      moveToHome();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="form-logo-container">
          <img src={recipe} alt="" />
         </div> 

        <div className="title">
          <span>What is your recipe?</span>
        </div>
        <div className="part">
          <Partition
            Name={"name"}
            Itype={"text"}
            holder={"please enter the name of Recipe"}
            lab={"Name"}
            value={data.name}
            onChange={handleDataChange}
          />
        </div>
        <div className="part">
          <Select/>
        </div>
        <div className="part">
          <Partition
            Name={"description"}
            Itype={"text"}
            holder={"Please enter a description"}
            lab={"Description"}
            value={data.description}
            onChange={handleDataChange}
          />
        </div>
        <div className="part">
          <Partition
            Name={"image_url"}
            Itype={"file"}
            holder={"choose a file"}
            lab={"Image"}
            value={data.description}
            onChange={handleImageChange}
          />
        </div>
        <Button className="button-register black" name={"Add"} onSubmit={handleAddBook} />
     </div> 
    </>
  );
};
export default RecipeForm;

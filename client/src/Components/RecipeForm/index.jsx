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
  const navigater = useNavigate();
  const moveToHome = () => navigater('/home');

  const defaultState = {
    name: "",
    cuisine_id: "",
    image_url: "", 
    ingredients: "",
  };
  const [data, setData] = useState(defaultState);

  const handleChange = (selectedValue) => {
  setData({ ...data, cuisine_id: selectedValue });
  }
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

  const handleAddRecipe = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/user/add_recipe',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`
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
          <Select onSelectChange={handleChange}/>
        </div>
        <div className="part">
          <Partition
            Name={"ingredients"}
            Itype={"text"}
            holder={"Please enter the ingredients"}
            lab={"Ingredients"}
            value={data.ingredients}
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
        <Button className="button-register black" name={"Add Recipe"} onSubmit={handleAddRecipe} />
     </div> 
    </>
  );
};
export default RecipeForm;

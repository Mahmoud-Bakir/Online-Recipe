import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"

const Select = ({onSelectChange}) => {
  const [cuisines, setCuisines] = useState([]);

  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    onSelectChange(selectedValue); 
  };

  useEffect(() => {
    const getCuisines = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(
          "http://localhost:8000/api/user/cuisines",
          { headers }
        );
        console.log(response.data.data)
        setCuisines(response.data.data)
      } catch (error) {
        console.error("Error fetching cuisines:", error);
      }
    };

    getCuisines();
  }, []);

  return (
    <div className="part-selector">
      <label htmlFor="">Cuisine</label>
      <select className="selector" onChange={handleSelect}>
        {cuisines.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

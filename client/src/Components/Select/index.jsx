import React, { useState, useEffect } from "react";
import axios from "axios";

const Select = () => {
  const [cuisines, setCuisines] = useState([]);


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
      <select className="selector" name="">
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

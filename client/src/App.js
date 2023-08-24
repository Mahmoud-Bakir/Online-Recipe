import { Routes, Route } from "react-router-dom"
import Authentication from "./pages/Authentication";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";

// import HomePage from "./Pages/HomePage";
// import AddPost from "./Pages/AddPost";
// import ProfilePage from "./Pages/ProfilePage";
// import SearchPage from "./Pages/SearchPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Authentication/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/recipe" element={<RecipePage/>}/>

    </Routes> 
  );
}

export default App;

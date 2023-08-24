import { Routes, Route } from "react-router-dom"
import Authentication from "./pages/Authentication";
import HomePage from "./pages/HomePage";

// import HomePage from "./Pages/HomePage";
// import AddPost from "./Pages/AddPost";
// import ProfilePage from "./Pages/ProfilePage";
// import SearchPage from "./Pages/SearchPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Authentication/>}/>
      <Route path="/home" element={<HomePage/>}/>

    </Routes> 
  );
}

export default App;

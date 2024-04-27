import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homes from "./pages/Homes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
    
    <AuthContextProvider>
    <NavBar />
    <Routes>
    <Route path="/" element={<Homes />} /> 
    <Route path="/login" element={<Login />} /> 
    <Route path="/signup" element={<Signup />} /> 
    
    <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} /> 
    

    </Routes>


    </AuthContextProvider>
 
    
  
    </>
  );
}

export default App;

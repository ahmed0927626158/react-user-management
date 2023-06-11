import {Routes,Route} from "react-router-dom"
import Layout from "./components/Layout/Layout";
// pages and commponents
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css"
function App() {
  return (
    <Layout />
    // <div className="App">
    //   <Navbar></Navbar>
      
    //  <div className="pages">
    //   <Routes>
    //         <Route
    //        path="/"
    //         element={<Home/>}
    //         />
    //   </Routes>
    //  </div>
      
    // </div>
  );
}

export default App;

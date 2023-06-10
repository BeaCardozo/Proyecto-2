import {Route, Routes,BrowserRouter} from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import LandingPage from "./pages/LandingPage/LandingPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import Footer from "./components/Footer/Footer"
import MovieDetails from "./pages/MovieDetails/MovieDetails"
import ReservePage from "./pages/ReservePage/ReservePage"



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/loginpage" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/moviedetails" element={<MovieDetails/>} />
        <Route path="/reserve" element={<ReservePage/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

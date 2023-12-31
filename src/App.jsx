import {Route, Routes} from "react-router-dom"
import axios from 'axios';
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import LandingPage from "./pages/LandingPage/LandingPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import Profile from "./pages/ProfilePage/ProfilePage";  
import Footer from "./components/Footer/Footer"
import MovieDetails from "./pages/MovieDetails/MovieDetails"
import MovieDetails2 from "./pages/MovieDetails/MovieDetails2"
import ReservePage from "./pages/ReservePage/ReservePage"
import AdminPage from "./pages/AdminPage/AdminPage";
import { useEffect, useState } from "react"
import { AuthProvider } from "./AuthContext";




function App() {
  const  API_URL_Now_Playing = 'https://api.themoviedb.org/3/'
  const  API_URL_Upcoming= 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
  const API_KEY = '33eff93df4270cb083333e09276c2a28'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  

  const [movies_Now_Playing, setMovies_Now_Playing] = useState([])
  const [movies_Upcoming, setMovies_Upcoming] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [movie, setMovie] = useState({title: "Loading Movies"});

  const fetchNowMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const { data: { results } } = await axios.get(`${API_URL_Now_Playing}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      }
    });
    setMovies_Now_Playing(results);
    setMovie(results[0]);
  }
  
  const fetchUpcomingMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const { data: { results } } = await axios.get(`${API_URL_Upcoming}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey
      }
    });
    setMovies_Upcoming(results);
    setMovie(results[0]);
  }

  //Busqueda de películas
  const movieFinder =(e)=>{
    e.preventDefault();
    console.log(searchKey)
    fetchNowMovies(searchKey);
  }

  useEffect(() => {
    fetchNowMovies();
    fetchUpcomingMovies();
    
  },[])
  
  return (
    <>
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage Now_playing={movies_Now_Playing}  Upcoming={movies_Upcoming} searchKey={setSearchKey} finder={movieFinder}/>} />
        <Route path="/loginpage" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        <Route path="/moviedetails2/:id" element={<MovieDetails2 />} />
        <Route path="/reserve/:id" element={<ReservePage/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/admin" element={<AdminPage/>} />
      </Routes>
      <Footer/>
      </AuthProvider>
    </>
  )
}

export default App


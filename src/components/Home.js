import React,{useEffect, useState}from 'react';
import "./Home.scss";
import axios from 'axios'; 
import Row from "./Row.js";
import {Link} from "react-router-dom"; 
 
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original"; 
const apiKey= "04f375f6dde8f47c68e88fa841d8d9de";
const nowPlaying = "now_playing"; 
const popular = "popular";
const topRated = "top_rated";

const Home = () => {

    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
     
      const fetchNowPlaying = async () => {
          const {
              data: { results },
          } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
          setNowPlayingMovies(results);
      }; 
      const fetchPopular = async () => {
          const {
              data: { results },
          } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
          setPopularMovies(results);
      };
      const fetchTopRated = async () => {
          const {
              data: { results },
          } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
          setTopRatedMovies(results);
      };
      
      const getAllGenre = async () => {
        const {
            data: { genres },
        } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
        setGenre(genres);
        console.log(genres);
    };

    fetchNowPlaying();
      fetchPopular();
      fetchTopRated();
    getAllGenre();
  }, []);

  
 
  return (
    <section className='home'>  
      <div className="front" style={{
          backgroundImage: popularMovies[0]? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`: "none"
      }}>
        {popularMovies[0] && (<h2>{popularMovies[0].original_title}</h2>)}
        {popularMovies[0] && (<p>{popularMovies[0].overview}</p>)}
      </div>
     
           
            <Row title={"Top Series"} arr={nowPlayingMovies} imgUrl={imgUrl}  />
            <Row title={"Movies"} arr={popularMovies} imgUrl={imgUrl} />
            <Row title={"Serials"} arr={topRatedMovies} imgUrl={imgUrl} />
  
            <div className="box">
                {genre.map((item) => (
                    <Link key={item.id} to={`/genre/${item.id}`}>
                        {item.name}
                    </Link>
                ))}
            </div>

    </section>
  ); 
};

export default Home; 
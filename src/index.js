import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/navBar/navBar';
import SearchBar from './components/searchBar/sarchBar';
import reportWebVitals from './reportWebVitals';
import CarouselHome from './components/carousel/carouselHome';
import SliderHome from './components/sliderHome/sliderHome';
import { Slider } from '@material-tailwind/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchBar/>
    <NavBar/>
    <CarouselHome/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

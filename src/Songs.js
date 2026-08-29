
import React,{useState} from 'react';
import Song1 from "./Songs/Choir.mp3";
import Song2 from "./Songs/Echos.wav";
import Song3 from "./Songs/Ticking.wav";
import Song4 from "./Songs/Woods.mp3";
import Song5 from "./Songs/Climbing.mp3";
function Songs(){

    var onMouseEnter='radial-gradient(circle at 50% 0%, #2a5788 0%, #081727 35%, #050b14 75%, #02060c 100%)';
    var onMouseLeave='radial-gradient(circle at 50% 0%, #103b68 0%, #081727 35%, #050b14 75%, #02060c 100%)';
    return(
        <div className='audio'>
            <div onMouseEnter={() =>{document.documentElement.style.setProperty('--background',onMouseEnter)}} onMouseLeave={() =>{document.documentElement.style.setProperty('--background',onMouseLeave)}} className='Songs'>
                <h1 className='title'>Choir</h1>
                <audio src= {Song1} controls />
            </div>
            
            <div onMouseEnter={() =>{document.documentElement.style.setProperty('--background',onMouseEnter)}} onMouseLeave={() =>{document.documentElement.style.setProperty('--background',onMouseLeave)}} className='Songs'>
                <h1 className='title'>Echoes</h1>
                <audio src= {Song2} controls />
            </div>

            <div onMouseEnter={() =>{document.documentElement.style.setProperty('--background',onMouseEnter)}} onMouseLeave={() =>{document.documentElement.style.setProperty('--background',onMouseLeave)}} className='Songs'>
                <h1 className='title'>Ticking</h1>
                <audio src= {Song3} controls />
            </div>
            <div onMouseEnter={() =>{document.documentElement.style.setProperty('--background',onMouseEnter)}} onMouseLeave={() =>{document.documentElement.style.setProperty('--background',onMouseLeave)}} className='Songs'>
                <h1 className='title'>Woods</h1>
                <audio src= {Song4} controls />
            </div>
            <div onMouseEnter={() =>{document.documentElement.style.setProperty('--background',onMouseEnter)}} onMouseLeave={() =>{document.documentElement.style.setProperty('--background',onMouseLeave)}} className='Songs'>
                <h1 className='title'>Climbing</h1>
                <audio src= {Song5} controls />
            </div>
            
        </div>
        

    
    );
}

export default Songs;
// eslint-disable-next-line 
import React from "react";
import films from "../films.json";

function Home(){
    return(
        <>
       {films.map((film)=>{
        return(
            <div>
                <img src={film.image} alt={film.title}/>
                <h1>{film.title}</h1>

             </div>
             )})}
       </>
    )}
export default Home;
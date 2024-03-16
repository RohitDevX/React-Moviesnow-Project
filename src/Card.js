import React from "react";
import "./style.css"
import {Link} from 'react-router-dom';
function Card({title,poster,releasedate,media_type,id,score,name,air_date,detailid}){
    const imagelink="https://image.tmdb.org/t/p/w500";
    const encodedtitle=name||title.replace(/\s/g, "");
    return(
            <Link  className="card-link" to={`/details/${encodedtitle}`}>
                <div className="card" onClick={()=>{detailid(id)}}>
                    <span className="rating">{Math.ceil(score)}</span>
                    <div className="poster">
                        
                        <img src={`${imagelink}${poster}`} className="poster-img"/>
                    </div>
                    <div className="title">
                        <span id="movie-title"><h4>{name || title}</h4></span>
                        <span className="movie-type">{media_type}</span>
                        <span className="movie-date">{releasedate || air_date}</span>
                    </div>
                </div>
            </Link>
            
    )
}
export default Card;
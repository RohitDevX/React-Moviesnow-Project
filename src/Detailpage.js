import React from "react";
import "./style.css";
function Detailpage({trailer,overview,poster,tagline,title,details}) {
    const imagelink="https://image.tmdb.org/t/p/w500";
    return (
        <div className="detail-page">
            <div className="detail-page-box">
                <div className="detail-page-left">
                    <span className="detail-page-poster"><img src={`${imagelink}${poster}`} /></span>
                </div>
                <div className="detail-page-right">
                    <span className="detail-page-title" ><h1>{title}</h1></span>
                    <span className="detail-page-tagline"><h4>{tagline}</h4></span>
                    <div className="detail-page-desc">
                        <p>{overview}</p>
                    </div>
                    <span className="detail-page-cast">
                        <ul className="image-list">
                        {
                        Array.isArray(details) ? details.map((item)=>{  
                            return(
                                item.profile_path ?
                                <li >
                                    <div className="image-wrapper">
                                <figure>
                                    <img  className="profile-pic" src={`${imagelink}${item.profile_path}`} title={item.name}/>
                                    <figcaption>{item.name}</figcaption>
                                    
                                </figure>
                                </div>
                            </li> : ""
                            )
                        }) : <p>no data available</p>
                        }

                        </ul>
                    </span>
                    <span className="detail-page-trailer">
                        <a href={trailer} target="#"><p>{trailer ? "Watch Youtube Trailer" : "No Trailer Available"}</p></a>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Detailpage;
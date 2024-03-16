import React from "react";
import { ReactDOM,useState } from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import "./style.css";
import Card from "./Card";
function Maindata({result, error,ctg_list,genre,display,detailid}){
    if(!result|| result.length===0){
        console.log("no data");
     }
     else{
      // console.log(result);
      // console.log(ctg_list);
     }
    return(
        <div>
        <div className="ctg">
            {Array.isArray(ctg_list) ? (
                ctg_list.map((item) => (
                    <button className="ctg-button" onClick={() => { genre(item.id); display("") }} id={item.id}>{item.name}</button>
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
        <h4>{error}</h4>
    
        <div className="card-container">
    
    
            {Array.isArray(result) ? (
                result.map((item) => (
    
                    <Card
                        title={item.title}
                        poster={item.poster_path}
                        releasedate={item.release_date}
                        media_type={item.media_type}
                        id={item.id}
                        score={item.vote_average}
                        name={item.name}
                        air_date={item.first_air_date}
                        detailid={detailid}
                    />
                ))
            ) : (
                <p>No data available</p>
            )}
    
        </div>
    </div>
    )
}
export default Maindata;

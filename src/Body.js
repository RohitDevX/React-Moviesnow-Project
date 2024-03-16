import React from "react";
import { ReactDOM, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css";
import Card from "./Card";
import Maindata from "./Maindata";
import Detailpage from "./Detailpage";
function Body({ result, error, ctg_list, genre, display,
    searchmovie, detailid, responsevid, responsedetail, fetchdetail }) {
    let trailerlink = "";
    if (responsevid && responsedetail && fetchdetail) {
        //  console.log("this is crew detail",responsedetail,"this is vid",responsevid,"this is detail of movie",fetchdetail);
        const containsTrailer = responsevid.some(item => {
            return item.name.includes("trailer") || item.name.includes("teaser") || item.name.includes("Official Trailer")
        });

        if (containsTrailer) {
            const officialtrailer = responsevid.find(item => item.name === "Official Trailer");
            trailerlink = officialtrailer ? `https://www.youtube.com/watch?v=${officialtrailer.key}` : '';
        } else {
            trailerlink = '';
        }

    }
    else {
        // console.log("no data ");
    }
    const imagelink = "https://image.tmdb.org/t/p/w500";
    return (
        <div className="main-container">
            <div className="main-container-inner">
                <div className="main-container-left">
                    <h2>Movies</h2>
                </div>
                <div className="main-container-right">
                    <input type="text" onChange={(e) => { searchmovie(e.target.value) }} className="search-box" />
                </div>
            </div>
            <Routes>
                <Route path="/"
                    element={<Maindata
                        result={result}
                        error={error}
                        ctg_list={ctg_list}
                        genre={genre}
                        display={display}
                        detailid={detailid}
                    />}>
                </Route>
                <Route path="/details/:title" element={
                    <Detailpage
                        trailer={responsevid ? trailerlink : ''}
                        poster={fetchdetail ? fetchdetail.poster_path : ''}
                        overview={fetchdetail ? fetchdetail.overview : ''}
                        title={fetchdetail ? fetchdetail.original_title : ''}
                        tagline={fetchdetail ? fetchdetail.tagline : ''}
                        details={responsedetail}
                    />}>

                </Route>
                <Route path="/Trending" element={<Maindata
                    result={result}
                    error={error}
                    ctg_list={ctg_list}
                    genre={genre}
                    display={display}
                    detailid={detailid}
                />} />
                <Route path="/Popular" element={<Maindata
                    result={result}
                    error={error}
                    ctg_list={ctg_list}
                    genre={genre}
                    display={display}
                    detailid={detailid}
                />} />
            </Routes>

        </div>
    )
}
export default Body;
import React from "react";
import axios from "axios";
import { ReactDOM } from "react";
import { useState, useEffect } from "react";
import "./style.css"
import fox from "./img/fox.png";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import giphy from "./img/giphy.gif";
import Card from "./Card";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function Homepage() {
    const [result, Setresult] = useState([]);
    const [error, seterror] = useState("");
    const [ctg, Setctg] = useState("");
    const [genre_id, Setgenre_id] = useState("");
    const [display, Setdisplay] = useState("");
    const [fetchdetail,Setfetchdetail]=useState("");
    const [responsevid,Setresponsevid]=useState("");
    const [responsedetail,Setresponsedetail]=useState("");
    const [movieid,Setmovieid]=useState("");
    const [page,Setcurrentpages]=useState(1);
    const [totalpages,Settotalpages]=useState(1);
    const itemsperpage="15";
    const access_key = "d3c22ab1dc183726075e125408421263";
    const base_url = `https://api.themoviedb.org/3/discover/movie?sort_by=${display}.desc&api_key=${access_key}&with_genres=${genre_id}&page=${page}`;
    async function getrequest() 
    {
        try {
            if (display == "trending") 
            {
                const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${access_key}&page=${page}`);
                Setresult(response.data.results);
               // console.log("trending is called");
            }
            else if (display == "popular")
            {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${access_key}&page=${page}`);
                Setresult(response.data.results);
             //   console.log("popular is called");
            }
            else
            {
                const response = await axios.get(`${base_url}`);
                //console.log(base_url);
              //  console.log("genreid is called");
                const ctg_list = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${access_key}&page=${page}`);
                console.log()
                Setresult(response.data.results);
                Settotalpages(response.data.total_pages)
                Setctg(ctg_list.data.genres);
            }
        }
        catch (error1) {
            seterror("error is:", error1);
        }

    }
    async function findmoviedetails(id)
    {
        try
        {
            const fetchDetail=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${access_key}`)
            const responseVid= await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${access_key}`);
            const responseDetail=await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${access_key}`);
            Setfetchdetail(fetchDetail.data);
            Setresponsevid(responseVid.data.results);
            Setresponsedetail(responseDetail.data.cast);
        }
        catch(error)
        {
            console.log(error);
        }
    }
    async function searchmovie(value)
    {
        try{
          // Search for movies
          const movieResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${access_key}&query=${value}`);
        
          // Search for TV shows
          const tvResponse = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${access_key}&query=${value}`);
          
          // Combine movie and TV show results
          const combinedResults = [...movieResponse.data.results, ...tvResponse.data.results];
          
          // Update the state with combined results
          Setresult(combinedResults);
        }
        catch(error)
        {
            console.log(error);
        }
    }
    function getdetails(id)
    {
        localStorage.setItem("genre_id",id);
        Setmovieid(id);
    }
    const genre = (genre_id) => {
        Setgenre_id(genre_id);
    }
    const displaypage = (displaydata) => {
        Setdisplay(displaydata);
    }
    useEffect(() => {
        getrequest();
        const id=localStorage.getItem("genre_id");
        findmoviedetails(id);  
        document.title = "Fox-Movies";
        window.scrollTo(0,0);
    }, [genre_id, display,movieid,page])
    const handlePageChange = (action) => {
        if (action === "prev") {
            Setcurrentpages(page-1);
            console.log(page);
        } else if (action === "next") {
            Setcurrentpages(page+1);
            console.log(page);
        }
    };
    return (
        <div>
            <Router>
            {/*header starts here*/}
            <Header image1={fox} image2={giphy} />
            {/*headers ends here*/}
         
            {/*main container starts here*/}
            <Body result={result}
                genre={genre}
                ctg_list={ctg}
                display={displaypage}
                error={error}
                detailid={getdetails} 
                fetchdetail={fetchdetail}
                responsedetail={responsedetail}
                responsevid={responsevid}
                searchmovie={searchmovie}
                />

            {/*main container ends here*/}
                 <div className="pagination-block">
                    <div className="pagination">
                    <button onClick={() =>{ handlePageChange("prev")}} disabled={page === 1} >
                        Previous Page
                    </button>
                    <button onClick={() => handlePageChange("next")} disabled={page === totalpages}>
                        Next Page
                    </button>
                    </div>
                 </div>
            {/*footer starts here*/}
            <Footer displaypage={displaypage} />
            {/*footer ends here*/}
            </Router>
        </div>
    )
}
export default Homepage;
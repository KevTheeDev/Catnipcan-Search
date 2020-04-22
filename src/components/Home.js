import React, { useEffect } from 'react';
import './Home.css'
// import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

function Home(){

    //useEffect func came with vscode or some sort of extension
    //({}) <- means it only runs when the components mount
    useEffect(() => {
        //return statement ()
        fetchCats ();
    }, [])

    const fetchCats = async () => {
        const data = await fetch ('https://thecatapi.com/v1/images?api_key=aaa32b32-301f-40ad-8c62-a9054e33d188')
        console.log(data);
    }

    return(
        <div className="hmpg" >
            <h1> Home Page  </h1>
            <div>
                <p> All Your Furry Cuddly Needs </p>
                {/* insert the  api here /> */}
                
            </div>
        </div>
    )
}
 
export default Home;
 
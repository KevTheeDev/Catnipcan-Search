import React from 'react';
import './Home.css'
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

function Home(){
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
 
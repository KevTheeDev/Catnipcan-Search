import React from 'react';
import './Home.css'
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

function SearchPg(){
    return(
        <div className="hmpg" >
            <h1> Search Page  </h1>
            <form>
                <label> Search </label>
                <input />
            </form>
            <div>
                {/* insert the  api here /> */}

            </div>
        </div>
    )
}
  
export default SearchPg;
 
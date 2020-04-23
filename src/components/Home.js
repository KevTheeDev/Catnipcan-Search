import React, { useEffect } from 'react';
import '../components/styles/Home.css'
import axios from 'axios'
// import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

function Home(){

    // const categorieOp1 is to append on the baselink
    // const baseLink = 'https://thecatapi.com/v1/images?api_key='
    // const catKEY = '4c63a8cd-ecf5-453c-b3c0-55c64aefd09e'
    const breeds = 'breeds'

    //useEffect func came with vscode or some sort of extension
    //({}) in useEffect <- means it only runs when the components mount
        // calls the fetchCat function
            // fetchCAts calls the api and cl's the data to test
    useEffect(() => {
        //return statement ()
        fetchCats ();
    }, [])

    const fetchCats = async () => {
        const data = await axios.get(`https://api.thecatapi.com/v1/` + `${breeds}`)

        console.log(data);
    }

    
    return(
        <div className="hmpg" >
            <h1> Home Page  </h1>
                <div>
                    <h4> All Your Furry Cuddly Needs </h4>
                    <p> Instructions: Click in the search bar at the top or middle of the page <br/>
                        to find a specific cat or click on any of the above links in top menu, just for fun.
                    </p>
                    <br/>
                    <br/>
                    <p> please click the dropdown menu to the left and search for a cat! </p>


                    {/* insert the  api here /> */}
                    
            </div>
        </div>
    )
}

export default Home;

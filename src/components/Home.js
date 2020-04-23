import React, { useEffect, useState } from 'react';
import '../components/styles/Home.css'
import axios from 'axios'
// import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

class Home extends React.Component{
     state = { 
        data: [],
        catNames: []
      }

    // const baseLink = 'https://thecatapi.com/v1/images?api_key='
    // const catKEY = '4c63a8cd-ecf5-453c-b3c0-55c64aefd09e'
    // const breeds is to append on the baselink
    
    //useEffect func came with vscode or some sort of extension
    //({}) in useEffect <- means it only runs when the components mount
    // calls the fetchCat function
    // fetchCAts calls the api, concatonates breeds on to it, and cl's the data to test
    // a variable called catnames to name the things that appear in the console
    
    // const fetchCats = async () => {
        
        //     console.log(data);
        // }
        componentDidMount () {
        const breeds = 'breeds'

        const data = axios.get(`https://api.thecatapi.com/v1/` + `${breeds}`)
        // callback function
        // res or response
        // res goes inside the object (data object) and gets the results (.results) that we need
        // CLog the data
        // setstate mutates the empty array of 'data' above with the current data from the api
        // '.catch'es any errors
        .then(res => {
        const name = res.data;
        console.log('recipe ----> ', name)

        this.setState({ data: name })
        })
        .catch(error => {
        console.log('there is an error', error)
        })
    }
    
    render (){
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
    )}
}

export default Home;

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
        console.log('catNames ----> ', name)

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
                        <br/>
                        <br/>
                        <h3> Instructions please click the dropdown menu below to the left and search for a cat! </h3>
    <h4> {this.state.data.map((catNames, id) => <li key={id} > {catNames.name} </li>)} </h4>

                        {/* insert the  api here /> */}
                    
            </div>
        </div>
    )}
}
 
export default Home;

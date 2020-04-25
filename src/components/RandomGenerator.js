import React, { useState, useEffect } from 'react';
import '../styles/Home.css'
import axios from 'axios'

// 1. React Router Tutorial
    // match keyword singles out a specific result, from a call, from a specific API 
    class RandomGenerator extends React.Component{
        constructor(props){
            super(props)
        
        this.state = { 
           catImage: '',
         }
        }
        //  const catKEY = '4c63a8cd-ecf5-453c-b3c0-55c64aefd09e'
       // const baseLink = 'https://thecatapi.com/v1/images?api_key='
       // const breeds is to append on the baselink
       
       async componentDidMount () {
           const images = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=`)

           //https://api.thecatapi.com/v1/images/search?breed_ids=srex
   
           
           // callback function
           // res or response
           // res goes inside the object (data object) and gets the results (.results) that we need
           // CLog the data
           // setstate mutates the empty array of 'data' above with the current data from the api
           // '.catch'es any errors
           .then(res => {
           const image = res.data[0].url;
           console.log('catNames ----> ', image)
   
           this.setState({ catImage: image })
           })
           .catch(error => {
           console.log('there is an error', error)
           })
       }
       
       // {/* id is used to get rid of the errors on the console to make a specific key for each unique variable */}
       // {/* map ( => <li> To Return The List Item (in this case, for the catNames) <li>) */}
       // {/* ul is neede around <li> in order for a list to be created */}
   
       render (){
       return(
           <div className="hmpg" >
               <h1> Search Page  </h1>
                   <div>
                       <h4> All Your Furry Cuddly Needs </h4>
                           <br/>
                           <br/>
                           <img src={this.state.catImage}/>
                           <p>  
                           </p>
                                               
               </div>
           </div>
       )}
   }
   
   export default RandomGenerator;
   




// {/* make a modo create search pg with guidelines - landing */}
// {/* STATE AND FUNCTINAL COMPONENTS - api call 1 compm - 1nd search  bar needs state - all inside the README */}
// {/* insert the  api here /> */}
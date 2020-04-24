import React, { useState, useEffect } from 'react';
import '../styles/Home.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

// 1. React Router Tutorial
function SearchPg ({ match }){
     useEffect(() => {
             getAxiosImage();
             console.log( match )
     }, [])

     // this seems to be another version of state / this.state 
     const [ data, catImages ] = useState({});

    // const baseLink = 'https://thecatapi.com/v1/images?api_key='
    // const catKEY = '4c63a8cd-ecf5-453c-b3c0-55c64aefd09e'
    // const breeds is to append on the baselink

    const getAxiosImage = async () => {
        const images = 'images/search';
        const data = await axios.get(`https://api.thecatapi.com/v1/${images}`)
    }
    
    // {/* id is used to get rid of the errors on the console to make a specific key for each unique variable */}
    // {/* map ( => <li> To Return The List Item (in this case, for the catNames) <li>) */}
    // {/* ul is neede around <li> in order for a list to be created */}
    return(
        <div className="hmpg" >
            <h1> Search Results  </h1>
                <div>
                    <h4> 
                        <p> </p>
                    </h4>                        
            </div>
        </div>
    )
}
 
export default SearchPg;




// {/* make a modo create search pg with guidelines - landing */}
// {/* STATE AND FUNCTINAL COMPONENTS - api call 1 compm - 1nd search  bar needs state - all inside the README */}
// {/* insert the  api here /> */}
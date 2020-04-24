import React from 'react';
import '../styles/Home.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

class SearchPg extends React.Component{
     state = { 
        data: [],
        catNames: []
      }

    // const baseLink = 'https://thecatapi.com/v1/images?api_key='
    // const catKEY = '4c63a8cd-ecf5-453c-b3c0-55c64aefd09e'
    // const breeds is to append on the baselink

    getAxiosImage () {
        const images = 'images/search'
        const data = axios.get(`https://api.thecatapi.com/v1/` + `${images}`)

        // callback function
        // res or response
        // res goes inside the object (data object) and gets the results (.results) that we need
        // CLog the data
        // setstate mutates the empty array of 'data' above with the current data from the api
        // '.catch'es any errors
        .then(res => {
        const searchName = res.data;
        console.log('catsearchNames ----> ', searchName)

        this.setState({ data: searchName })
        })
        .catch(error => {
        console.log('there is an error', error)
        })
    }
    
    render (){
    return(
        <div className="hmpg" >
            <h1> Search Results  </h1>
                <div>
                    {/* id is used to get rid of the errors on the console to make a specific key for each unique variable */}
                    {/* map ( => <li> To Return The List Item (in this case, for the catNames) <li>) */}
                    {/* ul is neede around <li> in order for a list to be created */}
                    <h4> 
                        <p> </p>
                    </h4>                        
            </div>
        </div>
    )}
}
 
export default SearchPg;




{/* make a modo create search pg with guidelines - landing */}
{/* STATE AND FUNCTINAL COMPONENTS - api call 1 compm - 1nd search  bar needs state - all inside the README */}
{/* insert the  api here /> */}
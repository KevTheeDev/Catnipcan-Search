import React from 'react';
import '../styles/Home.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

class Home extends React.Component{
     state = { 
        data: [],
        catNames: []
      }

    // const baseLink = 'https://thecatapi.com/v1/images?api_key='
    // const catKEY = '4c63a8cd-ecf5-453c-b3c0-55c64aefd09e'
    // const breeds is to append on the baselink

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
                        {/* id is used to get rid of the errors on the console to make a specific key for each unique variable */}
                        {/* map ( => <li> To Return The List Item (in this case, for the catNames) <li>) */}
                        {/* ul is neede around <li> in order for a list to be created */}
                        <h3> Instructions please click the dropdown menu below or in the upper left corner of the page and search for a cat! </h3>
                        <h4> 
                            {this.state.data.map((catNames, id) => <ul key={id}> <li key={id} > <Link to={`/SearchPg/${id}`}> {catNames.name} </Link> </li> </ul> )} 
                        </h4>
                                            
            </div>
        </div>
    )}
}
 
export default Home;

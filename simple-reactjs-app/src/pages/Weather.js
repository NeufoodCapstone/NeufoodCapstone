import React, { Component } from 'react';


export default class weather extends Component {
constructor(){
    super();
    this.state = {
        weather:"Not yet gotten"
    };
}

/*componentDidMount = ()=>{//simple http request to our backend.
     fetch(
       "http://localhost:5000/weather")
                   .then((res) => res.json())
                  .then((json) => {
                       this.setState({
                           weather: json.temp_F,
                        });
                     })
 }

 */

render() {
    return (
        <div>
            <button>Get weather ny</button>
            <h1>the weather is {this.state.weather}</h1>
        </div>
    )
}


}
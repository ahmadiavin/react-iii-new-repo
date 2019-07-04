import React, { Component } from "react";
import "./App.css";
import data from "./components/data";
import Databody from "./components/Databody"
import Buttons from "./components/Buttons";


class App extends Component {
  constructor() {
    super()
    this.state = {
     userNum: 0,
     users: data
    };
  }
  
  handleIndexIncrease = () =>{
    let indexAdd = this.state.userNum;
    if (indexAdd === this.state.users.length - 1) {
      indexAdd = 0
    } else {
      indexAdd++;
    }
    this.setState({userNum: indexAdd});
  };

  handleIndexDecrease = () =>{
    let indexDecrease = this.state.userNum;
    if (indexDecrease === 0) {
      indexDecrease = this.state.users.length - 1
    } else {
      indexDecrease--
    }
    this.setState({userNum: indexDecrease});
  }


  render() {
    const {users, userNum} = this.state; 
  
    let movieList = users[userNum].favoriteMovies.map((val,i) => {
      return <li key={i}>{val}</li>
    })

    return (
      <div className="App">
       <header className="header">
         <h2 className="headertext">Home</h2>
       </header>
       <div className="mainData">
        <Databody 
          userNum={userNum}
          users={users}
          firstName={users[userNum].name.first}
          lastName={users[userNum].name.last}
          fromCity={users[userNum].city}
          theCountry={users[userNum].country}
          jobTitle={users[userNum].title}
          employer={users[userNum].employer}
          movieList={movieList}
         

          />
          <Buttons
          userNum={userNum}
          users={users}
          userNumAdd={this.handleIndexIncrease}
          userNumDecrease={this.handleIndexDecrease}

         
          
          />
       </div>
      </div>
    );
    }

}

export default App;

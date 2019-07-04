import React, { Component } from "react";

class Databody extends Component {
    render(){
        const {firstName} = this.props;
        const {lastName} = this.props;
        const {fromCity} = this.props;
        const {theCountry} = this.props;
        const {jobTitle} = this.props;
        const {employer} = this.props;
        const {movieList} = this.props;
        const {userNum} = this.props;
        const {users} = this.props;
        

        return(
            <div className="users">
                <h2 className="index"> {userNum + 1} / {users.length}</h2>
               <div className="names"> 
               <div className="firstlast">
                <h1>{firstName} {lastName}</h1>
                </div>
                <div className="userinfo">
                  <h3>From: </h3>
                  <p> {fromCity}, {theCountry}</p>
                  <p></p>
                  
                </div>
                <div className="userinfo">
                    <h3>Job Title:</h3>
                    <p>{jobTitle}</p>
                </div>
                <div className="userinfo">
                    <h3>Employer:</h3>
                    <p>{employer}</p>
                </div>

                   <div>
                       <h3>Favorite Movies:</h3>
                       <ol>{movieList}</ol>

                  </div>
                
                
                </div>





            </div>
            
        )
    }
}

export default Databody;
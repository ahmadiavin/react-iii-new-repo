import React, { Component } from "react";

class Buttons extends Component {
    render () {
        return (
            <div className="mainbuttons">
               <div  className="prevnext"> <button   onClick={() => this.props.userNumDecrease()}>{"< Previous"}</button>
               </div>
            <div className="stupidbuttons">
                <button>{"Edit"}</button>
                <button>{"Delete"}</button>
                <button>{"New"}</button>
           </div>
            
            
              <div className="prevnext">
           <button  onClick={() => this.props.userNumAdd()}>{"Next >"}</button>
           </div>
            </div>
        )
    }
}

export default Buttons;
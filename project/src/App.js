import React, { Component } from 'react'
import './App.css'
import Profile from './Profile'
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
     this.state={
       person:{
       fullName: "Kit Harington",
       bio: "Christopher Catesby Harington (born 26 December 1986), known professionally as Kit Harington, is an English actor and producer.",
       imgSrc: "/kit-harington.jpg",
       profession: "Harington developed, produced and starred in the BBC drama series Gunpowder (2017) based around the leading role of his ancestor Robert Catesby in the Gunpowder plot.",
     },
     show: "true",
     count:0,
     }
     console.log("Profile is Initialised!");
    }
   toggleShow=()=>{
  this.setState({
    show: !this.state.show,
  });
   };
   componentDidMount() {
     setInterval(() => {
       if (!this.state.show){
         this.setState({count: this.state.count+1});
       }else{
         this.setState({count:0});
       }
     }, 1000);
     console.log("Profile is Mounted!");
     }
     componentDidUpdate() {
      console.log("Profile is Updated!");
    }
  render() {
    console.log("runder")
    return (
      <div className="main">
        {/* <h1>{this.state.person.fullName}</h1> */}
        <button  onClick={this.toggleShow} style={{ marginTop: "5px", marginBottom: "5px", backgroundColor:"teal", color:"blanchedalmond", height:"25px", width:"60px"}}
          variant="info">toggle</button>
          <span style={{color: "blanchedalmond" }}>
            {this.state.count}
          </span>
        {this.state.show && <Profile person={this.state.person}/>}
        
      </div>
    )
  }
}
export default App
/**
 * React's class component
 * Square is a JS class which extends the behavior of React.Component class
 * This component has render method which returns the JSX elements
 */
import React, { Component } from "react";
import "../index.css";
class Square extends Component{
    //built-in method which is responsible for render the html elements 
    //Using props we will get the data passed from Parent component here parent is Board
    render(){
        return (
            <button className="square"onClick={
                function(){
                    console.log('click');
                }
            }>
            
            {this.props.value}
            
            </button>
        );
    }
}
//we are exporting Square component as a JS module so that it will be accessible outside this file
export default Square;
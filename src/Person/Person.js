import React from 'react';
import classes from './Person.css';
import Radium from 'radium';
const Person = (props) =>{
    // return <p> Test Tjuy{Math.floor(Math.random()*30)}</p>
    const style = {
        '@media (min-width: 500px)' : {
            width : "450px"
        }
    };
    return(
        <div className={classes.Person} style = {style}>
            <p onClick={props.click}>Nama {props.name} , Umur : {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

        )


    // render(){
    //     return{
    //
    //     }
    // }

};
export default Radium(Person);
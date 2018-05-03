import React from 'react';
import classes from './Person.css';
import Radium from 'radium';
const Person = (props) =>{
    // return <p> Test Tjuy{Math.floor(Math.random()*30)}</p>
    const rnd = Math.random();
    if(rnd > 0.9){
        throw new Error('Error euy');
    }

    return(
        <div className={classes.Person} >
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
export default Person;
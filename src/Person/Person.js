import React from 'react';
import './Person.css';
const Person = (props) =>{
    // return <p> Test Tjuy{Math.floor(Math.random()*30)}</p>
    return(
        <div className="Person">
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
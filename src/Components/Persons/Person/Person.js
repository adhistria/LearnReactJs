import React , {Component} from 'react';
import classes from './Person.css';

class Person extends Component{
    render(){
        return(
            <div className={classes.Person} >
                <p onClick={this.props.click}>Nama {this.props.name} , Umur : {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}
// const Person = (props) =>{
//     // return <p> Test Tjuy{Math.floor(Math.random()*30)}</p>
//     // const rnd = Math.random();
//     // if(rnd > 0.9){
//     //     throw new Error('Error euy');
//     // }
//     //ga pake error boundary lagi
//
//     return(
//
//
//         )
//
//
//     // render(){
//     //     return{
//     //
//     //     }
//     // }
//
// };
export default Person;
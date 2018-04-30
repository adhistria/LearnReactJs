import React, { Component } from 'react';
// import logo from './logo.svg';
// import Radium from 'radium';
import classes from './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';
class App extends Component {
    state = {
        persons:[
            {id : "1", name: "Adhi", age:"22"},
            {id : "2", name: "Coba", age:"28"},
            {id : "3", name: "Mirah", age:"21"}
        ],
        showPersons : false
    };

    switchNameHandler = () => {
        this.setState({
            persons:[
                {name: "Tes", age:"22"},
                {name: "Mirah", age:"21"}
            ]}
        );
    };
    nameChangedHandler = (event,id) =>{
        const personIndex = this.state.persons.findIndex(p =>
            p.id ===  id
        );
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons : persons
        });
        // this.state.persons[personIndex] = person;
        // this.setState({
        //     persons:[
        //         {name: event.target.value, age:"22"},
        //         {name: "Mirah", age:"21"}
        //     ]}
        // );
    };
    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons : !doesShow
        });
    };
    deletePersonHandler = (personIndex) =>{
        // const persons = this.state.persons.splice();
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({
            persons : persons
        });
    };
  render() {
    const style = {
        backgroundColor :'green',
        color : 'white',
        font : 'inherit',
        border : '2px solid #aaa',
        padding : '8px',
        ':hover' : {
            backgroundColor : 'lightgreen',
            color : 'black'
        }
    };
    let persons = null;
    if(this.state.showPersons){
        persons = (
            <div>
                {this.state.persons.map((person,index)=>{
                    return <Person
                        click={() =>this.deletePersonHandler(index)}
                        name = {person.name}
                        age = {person.age}
                        key = {person.id}
                        changed = {(event) => this.nameChangedHandler(event,person.id)}
                    />

                    // </Person>
                })}
                {/*<Person*/}
                    {/*name={this.state.persons[0].name}*/}
                    {/*age={this.state.persons[0].age}*/}
                    {/*changed = {this.nameChangedHandler}*/}
                {/*>Coba euy*/}
                {/*</Person>*/}
                {/*<Person*/}
                    {/*name={this.state.persons[1].name}*/}
                    {/*age={this.state.persons[1].age}*/}
                    {/*changed = {this.nameChangedHandler}*/}
                {/*>*/}
                    {/*Coba euy*/}
                {/*</Person>*/}
            </div>
        );
        style.backgroundColor = 'red'
        style[':hover'] = {
            backgroundColor : "salmon",
            color : "black"
        }
    }
    const assignedClasses = [];
    if(this.state.persons.length <=2){
        assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=1){
        assignedClasses.push(classes.bold);
    }
    // let classess = ['red' , 'bold'].join(' ');
    return (
        <StyleRoot>
          <div className={classes.App}>
              <h1>Halo</h1>
              <p className={assignedClasses.join(' ')}>Cobain aja euy</p>
              {/*<button onClick={this.switchNameHandler.bind(this,'Adhi euy')}>Switch Name</button>*/}
              {/*gunain bind dibandingkan fungsi di dalam onClick*/}

              {/*<button style =  {style} onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>*/}
              <button style =  {style} onClick={this.togglePersonHandler}>Toggle Persons</button>
              {persons}
              {/*{this.state.showPersons ?*/}
                  {/*<div>*/}
                  {/*<Person*/}
                      {/*name={this.state.persons[0].name}*/}
                      {/*age={this.state.persons[0].age}*/}
                      {/*changed = {this.nameChangedHandler}*/}
                  {/*>Coba euy*/}
                  {/*</Person>*/}
                  {/*<Person*/}
                      {/*name={this.state.persons[1].name}*/}
                      {/*age={this.state.persons[1].age}*/}
                      {/*changed = {this.nameChangedHandler}*/}
                  {/*>*/}
                      {/*Coba euy*/}
                  {/*</Person>*/}
                  {/*</div>*/}
                  {/*: null*/}
              {/*}*/}
              {/*<Person*/}
                  {/*changed = {this.nameChangedHandler}*/}
                  {/*name={this.state.persons[0].name}*/}
                  {/*age={this.state.persons[0].age}*/}
                  {/*click={this.switchNameHandler.bind(this,'COBA')}*/}
              {/*/>*/}
              {/*<Person*/}
                  {/*changed = {this.nameChangedHandler}*/}
                  {/*name={this.state.persons[1].name}*/}
                  {/*age={this.state.persons[1].age}*/}
                  {/*click={this.switchNameHandler.bind(this,'COBA')}*/}
              {/*/>*/}
              {/*<Person name = "Tes" age="17" changed = {this.nameChangedHandler}/>*/}
              {/*<Person/>*/}
          </div>
        </StyleRoot>
    );
    //   return(
    //       React.createElement("div", {className:"App"},React.createElement("h1",null,"halo"))
    //   );

  }
}

export default Radium(App);

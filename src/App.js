import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
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
    let persons = null;
    let btnClass = '';
    if(this.state.showPersons){
        persons = (
            <div>
                {this.state.persons.map((person,index)=>{
                    return <ErrorBoundary key = {person.id}>
                    <Person
                        click={() =>this.deletePersonHandler(index)}
                        name = {person.name}
                        age = {person.age}
                        changed = {(event) => this.nameChangedHandler(event,person.id)}
                    />
                    </ErrorBoundary>
                })}
            </div>
        );
        btnClass = classes.Red;
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
          <div className={classes.App}>
              <h1>Halo</h1>
              <p className={assignedClasses.join(' ')}>Cobain aja euy</p>
              <button className={btnClass} onClick={this.togglePersonHandler}>Toggle Persons</button>
              {persons}
          </div>
    );

  }
}

export default App;

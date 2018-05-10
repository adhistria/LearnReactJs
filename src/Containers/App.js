import React, { Component } from 'react';
// import logo from './logo.svg';
import Cockpit from '../Components/Cockpit/Cockpit';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
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
    if(this.state.showPersons){
        persons = (
                <Persons
                persons = {this.state.persons}
                changed = {this.nameChangedHandler}
                clicked = {this.deletePersonHandler}
            />
        );

        {/*ga pake error bounday lagi*/}
                {/**/}
                {/*{this.state.persons.map((person,index)=>{*/}
                    {/*return <ErrorBoundary key = {person.id}>*/}
                    {/*<Person*/}
                        {/*click={() =>this.deletePersonHandler(index)}*/}
                        {/*name = {person.name}*/}
                        {/*age = {person.age}*/}
                        {/*changed = {(event) => this.nameChangedHandler(event,person.id)}*/}
                    {/*/>*/}
                    {/*</ErrorBoundary>*/}
                {/*})}*/}
    }

    // let classess = ['red' , 'bold'].join(' ');
    return (
          <div className={classes.App}>
              <Cockpit
                  appTitle = {this.props.title}
                  showPersons = {this.state.showPersons}
                  persons = {this.state.persons}
                  clicked = {this.togglePersonHandler}
              />
              {persons}
          </div>
    );

  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
    state = {
        persons:[
            {id : "1", name: "Adhi", age:"22"},
            {id : "2", name: "Mirah", age:"21"}
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
    nameChangedHandler = (event) =>{
        this.setState({
            persons:[
                {name: event.target.value, age:"22"},
                {name: "Mirah", age:"21"}
            ]}
        );
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
        backgroudColor :'white',
        font : 'inherit',
        border : '2px solid #aaa',
        padding : '8px'
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


    }
    return (
      <div className="App">
          <h1>Halo</h1>
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
    );
    //   return(
    //       React.createElement("div", {className:"App"},React.createElement("h1",null,"halo"))
    //   );

  }
}

export default App;

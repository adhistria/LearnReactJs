import React from 'react' ;
import Person from './Person/Person';
const persons  = (props) =>
        props.persons.map((person,index)=>{
        return <Person
                click={() =>props.clicked(index)}
                name = {person.name}
                age = {person.age}
                key = {person.id}
                changed = {(event) => props.changed(event,person.id)}
            />
      });
//gausah pake buka kurung setelah bikin method karena ini javascript biasa
export default persons;
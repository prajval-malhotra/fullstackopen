import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = ({ persons }) => {

  const [plist, setPlist] = useState({});
  const [ search, setSearch ] = useState(''); 

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }

  const handleSearchClick = (e) => {
    e.preventDefault();
    persons.filter(person => {
      if(person.name.toLowerCase().includes(search)) {
        setPlist({
          "name": `${person.name}`, 
          "number": `${person.number}`,
          "id": `${person.id}`
        })
        // console.log('id = ', plist.id)
      }
    })
  }

  return ( 
    <div>
      <form onSubmit={handleSearchClick}>
        <div>
          search: <input 
            value={search}
            onChange={handleSearch}
          />
        </div>
        <br />
        <div>
          <button type="submit"
          >search</button>
        </div>
      </form>

    <h2>Search results</h2>
      <ul>
        {
            <div>
              {/* {console.log(plist)} */}
              {plist.length !== '' ? <li>{plist.name}: {plist.number}</li> 
                                   : <div></div>}
            </div>
        }
      </ul>
    </div>
      
   );
};

const App = () => {
  const [ persons, setPersons ] = useState([]); 
  const [ newName, setNewName ] = useState('');
  const [ number, setNumber ] = useState('');
  const [ result, setResult ] = useState('');
  const [ aid, setAid ] = useState();

  useEffect(() => {
    axios
    .get('http://localhost:3002/persons')
    .then(response => {
      console.log('promise fin')
      setPersons(response.data);
      setAid(persons.length);
      console.log(aid);
    })
    // console.log('person =',  persons);
    console.log('effect almost over')
  }, []);


  const handleInput = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    // if((persons.includes(newName))) {
    //   alert('fdinfien')
    // }
    persons.map(person => {
      const temp = aid + 1;
      setAid(temp);
      if(person.name === newName) {
        alert(`${newName} is already in the phonebook`);
      }
      else {
        const newperson = { 
          name: newName,
          key: aid
        }
        
        // console.log(temp);
        console.log('id = ', newperson.key)
        setPersons(persons.concat(newperson));
        setNewName('');
      }
    })
  }

  const handleDelete = id => {
    const temp = persons.filter(person => person.id !== id)
    setPersons(temp);
    console.log(persons);
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <br />

      <form onSubmit={handleClick}>
        <div>
          name: <input 
            value={newName}
            onChange={handleInput}
          />
        </div>
        <div>
          <button type="submit"
          >add</button>
        </div>
      </form>
      <hr />
      <h2>Numbers</h2>
        <ul>
        {
          persons.map(person => 
            <div>
              <li>ID = {person.key}</li>
              <li>{person.name}: {person.number}</li>
              <button
                onClick={() => handleDelete(person.id)}>
                delete
              </button>
              <br />
              <br />
            </div>
          )
        }
        </ul>

        <hr /><br />


        <h2>Search results</h2>
          <Search
            persons= {persons}
          />
    </div>
  )
}

export default App;
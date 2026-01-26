import { useState,useEffect } from 'react'
import NameList from './components/NameList'
import PersonForm from './components/PersonForm'
import Search from './components/Search'
import axios from 'axios' 

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState("")

  const handleSearchChange= (event) => {
    setSearch(event.target.value)
  }

  
  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
      event.preventDefault()
      const newNameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      };

      const areThereDuplicates = persons.some(person => person.name === newName);

      if (newName == "" || newNumber == ""){
        alert("missing fields!")
        return
      }
      if (areThereDuplicates){
        alert(`${newName} is already added to phonebook`)
        return
      };
      
      setPersons(persons.concat(newNameObject));
      setNewName("")
      setNewNumber("")
  }

  const initialFetch = () => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => setPersons(response.data))
  }

  useEffect(initialFetch, [])

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Search 
      search = {search} handleSearchChange = {handleSearchChange}
      />
      <h1>add a new</h1>
      <PersonForm 
      newName={newName} handleNameChange = {handleNameChange}
      newNumber={newNumber} handleNumberChange = {handleNumberChange}
      addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <NameList persons={personsToShow}/>
    </div>
  )
}

export default App
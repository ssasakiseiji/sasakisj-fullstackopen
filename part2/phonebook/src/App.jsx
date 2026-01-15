import { useState } from 'react'
import NameList from './components/NameList'
import PersonForm from './components/PersonForm'
import Search from './components/Search'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',  number:'0999699699', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]) 
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
import { useState,useEffect } from 'react'
import NameList from './components/NameList'
import PersonForm from './components/PersonForm'
import Search from './components/Search'
import personsService from './services/personsService' 
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState("")

  //typing events handlers
  const handleSearchChange= (event) => {
    setSearch(event.target.value)
  }
  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  //add a person using createPerson service
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
      if (areThereDuplicates && newNumber == ""){
        alert(`${newName} is already added to phonebook`)
        return
      }
      else if (areThereDuplicates && newNumber !== ""){
        const existingPerson = persons.find(person => person.name == newName)
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          personsService.updatePersonNumber(existingPerson.id,newNameObject)
          .then(updatePersonResponse => {
            setPersons(persons.map(person => person.id === existingPerson.id? updatePersonResponse : person))
            }
          )
        }
        return
      };
      
      personsService.createPerson(newNameObject)
      .then(
        addPersonResponse => {
          setPersons(persons.concat(addPersonResponse));
          setNewName("");
          setNewNumber("");
        }
      )
    }

  //initial fetch
  const initialFetch = () => {
    personsService.getAllPersons()
    .then(
      getAllPersonsResponse => setPersons(getAllPersonsResponse)
    )
  }

  //When a user clicks a delete person button
  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
        personsService.deletePerson(id)
        .then( () => {
        setPersons(persons.filter((person)=> person.id !== id)
           )
         }
        )
      }
  }
  
  //execute on the first render ([] on the second argument)
  useEffect(initialFetch, [])

  //persons filter/search by name  
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
      <NameList 
      persons={personsToShow}
      action={handleDelete}
      />
    </div>
  )
}

export default App
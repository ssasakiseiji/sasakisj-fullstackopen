import axios from 'axios' 

//adds a new person
  const createPerson = (newNameObject) => {
    return(
      axios
        .post('http://localhost:3001/persons', newNameObject)        
        .then(newNameResponse => newNameResponse.data)
    )}

//fetches all persons
    const getAllPersons = () => {
      return(
        axios
            .get("http://localhost:3001/persons")
            .then(response => response.data)
    )}

//deletes a person
    const deletePerson = (id) => {
      return(
        axios
          .delete(`http://localhost:3001/persons/${id}`)
      )
    }

//updates a persons number
    const updatePersonNumber = (id, newNameObject) => {
      return(
        axios
          .put(`http://localhost:3001/persons/${id}`, newNameObject)
          .then(response => response.data)
      )
    }


export default { createPerson, getAllPersons, deletePerson, updatePersonNumber };
const NameList = ({persons,action}) => {
  return (
    <div>
      <ul>
        {persons.map((person) => {
          return(
              <li key={person.id}> {person.name} {person.number} <button onClick={() => action(person.id, person.name)}>delete</button></li>
          )
            }
              )
                }
      </ul>
    </div>
  )
}

export default NameList
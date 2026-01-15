const NameList = ({persons}) => {
  return (
    <div>
      <ul>
        {persons.map((person) => {
          return(<li key={person.id}> {person.name} {person.number} </li>
          )})}
      </ul>
    </div>
  )
}

export default NameList
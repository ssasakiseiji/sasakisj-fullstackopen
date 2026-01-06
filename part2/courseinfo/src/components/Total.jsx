const Total = ({parts}) => {
    const sumbyreduce = parts.reduce((accumulator, currectValue) => accumulator + currectValue.exercises, 0)

  return(
  <h2>
    Total of exercises {sumbyreduce}
  </h2>
  )
}

export default Total;
import { useState } from 'react'

const Button = ({text, action}) => {
  return (
    <button onClick={action}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const maxVotes = Math.max(...votes)
  const maxIndex = votes.indexOf(maxVotes)
  const topAnecdote = (maxVotes != 0) ? anecdotes[maxIndex] : "No hay votos"

  return (
    <>
      <h1>Anecdote of the day</h1>
      <h2>{anecdotes[selected]}</h2>  
      <h3>has {votes[selected]} votes</h3>
      <Button text="next anecdote" action= {handleNextAnecdote} />
      <Button text="vote" action={handleVote} />
      <h1>Anecdote with the most votes</h1>
      <h2>{topAnecdote}</h2>
    </>
  )
}

export default App
import { useState } from 'react'
import './App.css'

const Button = (props) => (
  <button className="button" onClick = {props.handleClick}>{props.text}</button>
)

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td> 
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  
  if (total === 0) {
    return(
      <div className="stats">No feedback given</div>
    )}
  else {
    const avg = (props.good - props.bad) / total
    const positive = (props.good / total) * 100
    return(
    <table>
      <tbody className="stats">
        <StatisticLine text="good:" value={props.good} />
        <StatisticLine text="neutral:" value={props.neutral} />
        <StatisticLine text="bad:" value={props.bad} />
        <StatisticLine text="all:" value={total} />
        <StatisticLine text="average:" value={avg.toFixed(2)} />
        <StatisticLine text="positive:" value= {positive.toFixed(2) + " %"} />
      </tbody>
    </table>
    )
  }
} 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1 className="title">give feedback</h1>
        <Button handleClick = {() => setGood(good + 1)} text= "good" />
        <Button handleClick = {() => setNeutral(neutral + 1)} text= "neutral" />
        <Button handleClick = {() => setBad(bad + 1)} text= "bad" />
      <h2 className="title">statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>

  )
}

export default App
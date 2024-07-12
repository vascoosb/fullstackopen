import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>

const Button = (props) => (
  <button onClick= {props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = ((good * 1) + (bad * -1)) / all
  const posPercentage = good/all * 100

  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text = "good" value = {good}/>
          <StatisticLine text = "neutral" value = {neutral}/>
          <StatisticLine text = "bad" value = {bad}/>
          <StatisticLine text = "all" value = {all}/>
          <StatisticLine text = "average" value = {average}/>
          <StatisticLine text = "positive" value = {posPercentage}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <Header title = 'give feedback'/>
      <Button handleClick = {handleGood} text = "good"/>
      <Button handleClick = {handleNeutral} text = "neutral"/>
      <Button handleClick = {handleBad} text = "bad"/>
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    </div>
  )
}

export default App

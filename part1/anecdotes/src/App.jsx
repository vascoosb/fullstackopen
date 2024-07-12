import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
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
   
  const [selected, setSelected] = useState(0)

  const handleRandom = () => {
    const randomNum = getRandomInt(anecdotes.length);
    setSelected(randomNum)
  }

  const initialPoints = new Array(anecdotes.length).fill(0)
  const [points, setPoints] = useState(initialPoints)

  const handleVote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }

  const mostVoted = points.indexOf(Math.max(...points))

  const MostVotedAnec = () => {
    if (mostVoted > 0) {
      return (
        <div>
          <h2>Anecdote with most votes</h2>
          <p>{anecdotes[mostVoted]}</p>
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <Button handleClick = {handleRandom} text='next anecdote'/>
      <Button handleClick = {handleVote} text='vote'/>
      <p>{points}</p>
      <MostVotedAnec/>
    </div>
  )
}

export default App

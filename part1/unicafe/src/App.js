import React, { useState } from 'react'

const Statistics = ({good, bad, neutral}) => {
  var total = good + bad + neutral;
  var positive = (good/total * 100)
  if(total === 0) {
    return <p>No feedback given</p>;
  }
  else {
    return (
      <table>
        <tr>
          <th>good</th>
          <th>{good}</th>
        </tr>
        <tr>
          <th>neutral</th>
          <th>{neutral}</th>
        </tr>
        <tr>
          <th>bad</th>
          <th>{bad}</th>
        </tr>
        <tr>
          <th>all</th>
          <th>{total}</th>
        </tr>
        <tr>
          <th>positive</th>
          <th>{Math.round(positive) + ' %'}</th>
        </tr>
      </table>
    );
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
      
      <h2>statistics</h2>
      
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>

  )
}

export default App;
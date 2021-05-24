import React, { useState } from 'react'

const App = () => {

  const [maxIndex, setMaxIndex] = useState(0);

  const getMax = () => {
    var max = votes[0];
    var maxi = 0;

    for (var i = 0; i < 6; i++) {
        if (votes[i] >= max) {
            maxi = i;
            max = votes[i];
        }
    }
    setMaxIndex(maxi);
  };


  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];

  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);
   
  const [selected, setSelected] = useState(0);

  const handleClick = () => {
    if(selected === anecdotes.length - 1) {
      setSelected(0);
    }
    else {
      setSelected(selected+1);
    }
  };

  const voteHandler = () => {
    const copy = {...votes};
    copy[selected] += 1;
    setVotes(copy);
    getMax();
  };

  return (
    <div>
      <h2>{anecdotes[selected]}</h2>
      <p>has {votes[selected]} votes</p>
      <button onClick={voteHandler}>vote</button>
      <button onClick={handleClick}>next anecdote</button>

      <h2>{anecdotes[maxIndex]}</h2>
      <p>has {votes[maxIndex]} votes</p>

    </div>

  )
}

export default App;
import React from 'react'

const Result = () => {
 const score = localStorage.getItem("score");
 const totalQuestions = localStorage.getItem("Total-Questions ")
 
 
    return (
    <div>
      <h1>Quiz Results</h1>
      <p>You answered {score} out of {totalQuestions} correctly</p>

    </div>
  )
}

export default Result

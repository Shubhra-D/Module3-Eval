import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [showAnswers, setShowAnswers] = useState({});
  const navigate = useNavigate();

  //api call from backend
  useEffect(() => {
    axios({
      url: `https://carbonated-cautious-coast.glitch.me/api/questions`,
      method: "GET",
    })
      .then((res) => {
        setQuestions(res.data.questions);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  //handle the cases

  const handleAnswer = (questionid, answer) => {
    setAnswers((prev) => ({ ...prev, [questionid]: answer }));
  };
  const handleShowAnswer = (questionid) => {
    setShowAnswers((prev) => ({ ...prev, [questionid]: !prev[questionid] }));
  };

  const handleSubmitQuiz = () => {
    axios
      .post("https://carbonated-cautious-coast.glitch.me/api/submit", {
        answers,
      })
      .then((res) => {
        console.log(res.data);
        const score = calculateScore(answers)
        localStorage.setItem('score',score)
        localStorage.setItem("Total-Questions",
            questions.length
        )
        navigate("/result");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Take the Quiz..</h1>
      {questions.map((question) => {
        return (
          <div key={question.id}>
            <h4>
              Q.no:{question.id} {question.question}
            </h4>

            {question.options.length>0 &&
              question.options.map((option) => {
                <div key={option}>
                  <input
                    type="radio"
                    name={question.id}
                    value={question.options}
                    onChange={(e) => {
                      handleAnswer(question.id, e.target.value);
                      
                    }}
                  />
                 
                </div>;
              })}
              <button onClick={() => handleShowAnswer(question.id)}>
                    {showAnswers[question.id] ? "Hide Answer" : "Show Answer"}
                  </button>
                  {showAnswers[question.id] && (
                    <div>
                    
                        <span>
                            <span>
                                {question.answer}
                            </span>
                      {answers[question.id] === question.answer
                        ? "Correct"
                        : " Incorrect"}
                    </span>

                    </div>
                  )}
          </div>
        );
      })}
      {Object.keys(answers).length === questions.length && (
        <button onClick={handleSubmitQuiz}>Submit</button>
      )}
    </div>
  );
};

export default Quiz;

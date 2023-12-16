import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import '../../pages/Questions/Questions'

import QuestionList from './QuestionList'


const HomeMainbar = () => {

  const location = useLocation()
  const user = null;
  const navigate = useNavigate()

  var questionList = [{
    _id: 1,
    upVotes: 3,
    downVotes:2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["Java", "node js", "react js", "mongo db", "express js"],
    userPosted: "Mohsin",
    userId:1,
    askedOn: "Jan 1",
    answer:[{
      answerBody : "Answer",
      userAnswered: "Ansari",
      answeredOn: "jan 2",
      userId: 2 
    }]
  },{
    _id: 2,
    upVotes: 3,
    downVotes:2,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["JavaScript", "R", "Python"],
    userPosted: "Mohsin",
    userId:1,
    askedOn: "Jan 1",
    answer:[{
      answerBody : "Answer",
      userAnswered: "Ansari",
      answeredOn: "jan 2",
      userId: 2 
    }]
  },{
    _id: 3,
    upVotes: 3,
    downVotes:2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["JavaScript", "R", "Python"],
    userPosted: "Mohsin",
    userId:1,
    askedOn: "Jan 1",
    answer:[{
      answerBody : "Answer",
      userAnswered: "Ansari",
      answeredOn: "jan 2",
      userId: 2 
    }]
  }]

  const checkAuth = () => {
    if(user === null){
      alert ("Login or Sign Up to ask a question") 
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }
  

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Questions</button>
      </div>
      <div>
        {
          questionList === null ? <h1>Loading...</h1> : 
          <>
            <p>{questionList.length} questions</p>
            <QuestionList questionList={questionList}/>
          </>
        }
      </div>

    </div>
  )
}

export default HomeMainbar
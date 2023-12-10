import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './HomeMainbar.css'
import '../../pages/Questions/Questions'

import QuestionList from './QuestionList'


const HomeMainbar = () => {

  var questionList = [{
    id: 1,
    votes: 3,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["Java", "node js", "react js", "mongo db", "express js"],
    userPosted: "Mohsin",
    askedOn: "Jan 1"
  },{
    id: 2,
    votes: 0,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["JavaScript", "R", "Python"],
    userPosted: "Mohsin",
    askedOn: "Jan 1"
  },{
    id: 3,
    votes: 1,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["JavaScript", "R", "Python"],
    userPosted: "Mohsin",
    askedOn: "Jan 1"
  }]

  const location = useLocation()

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <Link to='/AskQuestions' className='ask-btn'>Ask Questions</Link>
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
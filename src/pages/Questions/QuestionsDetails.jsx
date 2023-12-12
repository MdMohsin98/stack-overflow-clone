import React from 'react'
import { useParams, Link } from 'react-router-dom'
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'

const QuestionsDetails = () => {

    const { id } = useParams()
    console.log(id)

    var questionList = [{
        _id: '1',
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
        _id: '2',
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
        _id: '3',
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
      }]

  return (
    <div className='question-details-page'>
        {
            questionList === null ?
            <h1>Loading...</h1> : 
            <>
                {
                    questionList.filter(question => question._id === id).map(question => (
                        <div key={question._id}>
                            {console.log(question)}
                            <section className='question-details-container'>
                                <h1>{question.questionTitle}</h1>
                                <div className='question-details-container-2'>
                                    <div className='question-votes'>
                                        <img src={upvote} alt="" width='18' />
                                        <p>{question.upVotes - question.downVotes}</p>
                                        <img src={downvote} alt="" width='18' />
                                    </div>
                                    <div style={{width:"100%"}}>
                                      <p className='question-body'>{question.questionBody}</p>
                                      <div className="question-details-tags">
                                        {
                                          question.questionTags.map((tag) =>(
                                            <p key={tag}>{tag}</p>
                                          ))
                                        }
                                      </div>
                                      <div className="question-action-user">
                                        <div>
                                          <button type='button'>Share</button>
                                          <button type='button'>Delete</button>
                                        </div>
                                        <div>
                                          <p>Asked {question.askedOn}</p>
                                          <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                            <Avatar />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    ))
                }
            </>
        }
    </div>
  )
}

export default QuestionsDetails
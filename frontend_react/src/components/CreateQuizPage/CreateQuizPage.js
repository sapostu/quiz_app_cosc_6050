import { React, useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';
import { createQuiz } from '../../api/helper/QuizApi';


let _key = 0

const CreateQuizPage = ({

}) => {

    const [questions, setQuestions] = useState([{
        "id": _key,
        "question": "",
        "A": "",
        "B": "",
        "C": "",
        "D": "",
        "correct_answer": ""
    }])

    const [quizName, setQuizName] = useState("")
    const [description, setDescription] = useState("")
    const [numQuestions, setNumQuestions] = useState(1)


    // const [key, setKey] = useState(1)


    const addQuestion = () => {


        _key += 1;
        let temp = questions
        temp.push({
            "id": _key,
            "question": "",
            "A": "",
            "B": "",
            "C": "",
            "D": "",
            "correct_answer": ""
        })

        alert(`Added new question below`)

        setNumQuestions( numQuestions + 1 )


        return temp



    }

    const updateQuizQuestion = (_id, _type, _value) => {

        switch (_type) {

            case "question":
                // code block
                questions[_id].question = _value
                break;

            case "A":
                // code block
                questions[_id].A = _value
                break;

            case "B":
                // code block
                questions[_id].B = _value
                break;

            case "C":
                // code block
                questions[_id].C = _value
                break;

            case "D":
                // code block
                questions[_id].D = _value
                break;

            case "correct_answer":
                // code block
                questions[_id].correct_answer = _value
                break;

            default:
                // code block
                // console.log("updated question = ", questions[_id])

        }
        // console.log("updated question = ", questions[_id])

        return

    };

    return (
        <div>
            <Button variant="primary" onClick={(e) => { window.location.replace(`http://localhost:3000/quizzes`) }} >Home</Button>
            <h1>Create Quiz!! Add questions below, press 'Submit' when done</h1>
            <Button onClick={ (e) => { let temp = addQuestion(); setQuestions(temp.slice(0)); }}>Add Question</Button>
            <Button onClick={ (e) => { createQuiz( quizName, description, numQuestions, questions ) } }>Create Quiz</Button>

            <span>Quiz Name</span>
            <input type="text" defaultValue="" onChange={ (e) => { setQuizName(e.target.value) } }/>
            <br/>
            <span>Description</span>
            <br/>
            <textarea type="text" defaultValue="" onChange={ (e) => { setDescription(e.target.value) } }>

            </textarea>


            <br/>
            <span>Number of Questions: {numQuestions}</span>

            {questions.map(question => (
                <Card key={question.id} className="quizzes-page-card">

                    <Card.Title>New Question {question.id + 1}</Card.Title>
                    <Card.Body>

                        <Card.Text>Question</Card.Text>
                        <input type="text" defaultValue={question.question} onChange={(e) => { updateQuizQuestion(question.id, "question", e.target.value) }} />
                        <Card.Text>Option A:</Card.Text>
                        <input type="text" defaultValue={question.A} onChange={(e) => { updateQuizQuestion(question.id, "A", e.target.value) }} />
                        <Card.Text>Option B:</Card.Text>
                        <input type="text" defaultValue={question.B} onChange={(e) => { updateQuizQuestion(question.id, "B", e.target.value) }} />
                        <Card.Text>Option C:</Card.Text>
                        <input type="text" defaultValue={question.C} onChange={(e) => { updateQuizQuestion(question.id, "C", e.target.value) }} />
                        <Card.Text>Option D:</Card.Text>
                        <input type="text" defaultValue={question.D} onChange={(e) => { updateQuizQuestion(question.id, "D", e.target.value) }} />
                        <Card.Text>CORRECT ANSWER ( A, B, C, D )</Card.Text>
                        <input type="text" defaultValue={question.correct_answer} onChange={(e) => { updateQuizQuestion(question.id, "correct_answer", e.target.value) }} />

                    </Card.Body>
                </Card>
            ))}


        </div>
    );

};

export default CreateQuizPage;
import {React, useEffect, useState} from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { getAllQuizzes } from '../../api/helper/QuizApi';
import './QuizzesPage.css'; // Import your CSS file



const QuizzesPage = ({



}) => {

    const [quizzes, setQuizzes] = useState([])

    let _quizzes;


    useEffect(() => {

        const fetchData = async () => {

            const response = await getAllQuizzes()
            setQuizzes(response);
    
        }    
        
        fetchData()


    }, [])



    console.log("quizzes = ", quizzes)


    return(
        <>
            <h1>test route</h1>
            <h1 className="mt-4 mb-4">List of Cards</h1>

            { quizzes.length !== 0 ? 


                <Row>
                    {quizzes.map(quiz => (
                        <Col key={quiz.id} md={4} className="mb-4">
                            <Card key={quiz.id} className="quizzes-page-card">                            

                                <Card.Title>{quiz.data.quiz_name}</Card.Title>
                                <Card.Body>

                                    <Card.Text>{quiz.data.num_questions}</Card.Text>
                                    <Button variant="primary">TAKE THIS QUIZ</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            
            :
            <h1>NOTHING</h1>

            }
            

        </>
    );

};

export default QuizzesPage;

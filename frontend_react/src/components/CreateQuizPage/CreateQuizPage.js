import {React, useEffect, useState} from 'react';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';


const CreateQuizPage = ({

}) => {

    return(
        <div>
            <Button variant="primary" onClick={ (e) => { window.location.replace(`http://localhost:3000/quizzes`) } } >Home</Button>
            <h1>Register Here!!</h1>


<Card className="quizzes-page-card">                            

<Card.Title>New Question</Card.Title>
<Card.Body>

    <Card.Text>Question</Card.Text>
    <input type="text"/>
    <Card.Text>Option A:</Card.Text>
    <input type="text"/>
    <Card.Text>Option B:</Card.Text>
    <input type="text"/>
    <Card.Text>Option C:</Card.Text>
    <input type="text"/>
    <Card.Text>Option D:</Card.Text>
    <input type="text"/>
    <Card.Text>CORRECT ANSWER ( A, B, C, D )</Card.Text>
    <input type="text"/>

</Card.Body>
</Card>

        </div>
    );

};

export default CreateQuizPage;
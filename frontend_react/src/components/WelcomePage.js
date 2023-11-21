import { React, useState } from 'react';
import { getAllQuizzes } from '../api/helper/QuizApi';

const WelcomePage = ({


}) => {    
    
    let [quizArray, setQuizArray] = useState("LOLOLOL");

    return(
        <>
         <h1>Welcome to our COSC 6050 Quiz application</h1>
         <h2>By Sil Apostu, and others</h2>
         <button onClick={ (e) => { getAllQuizzes() } }>yoyo</button>
        </>
    );

};

export default WelcomePage;
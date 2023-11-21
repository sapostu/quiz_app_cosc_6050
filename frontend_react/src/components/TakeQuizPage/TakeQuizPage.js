import {React, useEffect, useState} from 'react';
import { getQuizQuestions } from '../../api/helper/QuizApi';


const TakeQuizPage = ({

}) => {

    useEffect(() => {

        // const fetchData = async () => {

        //     const response = await getAllQuizzes()
        //     setQuizzes(response);
    
        // }   

        const fetchDataFromParams = () => {

            const url = window.location.search
            console.log("URL = ", url)

            const params = new URLSearchParams(url);

            const _id = params.get('id');
            const _quiz_name = params.get('quiz_name');
            const _num_questions = params.get('num_questions');

            return {
                "id": _id,
                "quiz_name": _quiz_name,
                "num_questions": _num_questions
            }


        }

        const fetchQuizQuestions = async ( request_body ) => {

            let to_return = await getQuizQuestions( request_body );

            return to_return

        }
        
        let request_body = fetchDataFromParams()

        let _return = fetchQuizQuestions( request_body )

    }, [])

    return(
        <>
            <h1>header header header header</h1>
        </>
    );

};


export default TakeQuizPage;
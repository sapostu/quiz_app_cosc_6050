import {React, useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';



const Leaderboard = ({


}) => {

    return(
        <>
        
            <h1>Leaderboard table of all Quiz attempts</h1>
            <Button onClick={(e) => { window.location.replace(`http://localhost:3000/quizzes`) }}>Back to Quizzes</Button>
        
        </>
    );


};

export default Leaderboard;
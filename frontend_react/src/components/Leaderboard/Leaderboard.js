import { React, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getLeaderboard } from '../../api/helper/QuizApi';

import { Table } from 'react-bootstrap';



const Leaderboard = ({




}) => {

    const [leaderboard, setLeaderboardArray] = useState([])

    useEffect(() => {

        // const sortArrayByTime( passed_array ) {

        // }

        const fetchData = async () => {

            let leaderboard_array = await getLeaderboard();


            leaderboard_array.sort((a, b) => (a.sort_by > b.sort_by) ? -1 : 1)

            console.log("LEADERBOARD ARRAY = ", leaderboard_array)

            setLeaderboardArray(leaderboard_array)

        }

        fetchData()


    }, [])

    return (
        <>

            <h1>Leaderboard table of all Quiz attempts</h1>
            <Button onClick={(e) => { window.location.replace(`http://localhost:3000/quizzes`) }}>Back to Quizzes</Button>
            <br />
            <br />
            <Button onClick={(e) => { getLeaderboard() }}>Get Leaderboard</Button>


            <Table table-striped bordered hover>
                <thead>
                    <tr>
                        <th>Quiz Name</th>
                        <th>Attempt Percentage</th>
                        <th>Time Stamp</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>john@example.com</td>
                        <td>Admin</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jane Doe</td>
                        <td>jane@example.com</td>
                        <td>User</td>
                    </tr> */}
                    {/* Add more rows as needed */}
                    {leaderboard.map(entry => (
                        <tr>
                            <td>{entry.quiz_name}</td>
                            <td>{ (100 * entry.num_correct) / entry.num_total }%</td>
                            <td>{entry.time}</td>
                        </tr>
 
                    ))}
                </tbody>
            </Table>



        </>
    );


};

export default Leaderboard;
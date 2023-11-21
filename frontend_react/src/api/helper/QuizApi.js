

export function getAllQuizzes() {
    const url = "http://localhost:8000/test"
    let _body = {
        'name': 'hello',
        'number': 1110
    }
    console.log("BODY I AM SENDING IS = ", JSON.stringify(_body))

    return fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(_body)
    }).then( (response) => {
        console.log("response = ", response.body)
    } );
}
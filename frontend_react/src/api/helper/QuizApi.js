

export async function getAllQuizzes() {
    const url = "http://localhost:8000/getQuizzesWithoutQuestions"
    let _body = {
        'name': 'hello',
        'number': 1110
    }
    // console.log("BODY I AM SENDING IS = ", JSON.stringify(_body))

    let obj;

    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(_body)
    });

    obj = await res.json();


    // console.log("arr arr = ", obj)

    return obj



}

export async function getQuizQuestions ( request_body ) {

    const url = "http://localhost:8000/getQuizQuestions"

    console.log("BODY BODY = ", request_body)


    let obj;

    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(request_body)
    });

    obj = await res.json();


    console.log("arr arr = ", obj)

    return obj

}
from flask import Flask

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from google.cloud.firestore_v1.base_query import FieldFilter

cred = credentials.Certificate("../serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()


app = Flask("__name__")

@app.route("/")
def index():

    # db.collection('colors').add({'name':'purple', 'value':'#screw'})

    # get_quiz = db.collection('quizzes').document('9jHt9mH1PHI9R2r0dVBc').get()
    # if get_quiz.exists:
    #     print(f"Document data: {get_quiz.to_dict()}")

    docs = db.collection("quizzes").where(filter=FieldFilter("quiz_name", "==", "addition")).get()
    

    for doc in docs:
        print(f"{doc.id} => {doc.to_dict()}")

    print("\ntest the end point\n")
    return ""

if __name__ == "__main__":
    app.run(port=8000, debug=True)

# FIREBASE EXAMPLE QUERIES

# TO ADD TO THE DATA BASE
    # db.collection('colors').add({'name':'purple', 'value':'#screw'})

# TO GET SPECIFIC DOCUMENT ITSELF
    # get_quiz = db.collection('quizzes').document('9jHt9mH1PHI9R2r0dVBc').get()
    # if get_quiz.exists:
    #     print(f"Document data: {get_quiz.to_dict()}")


# TO CONDITIONALLY GET A DOCUMENT
    # docs = db.collection("quizzes").where(filter=FieldFilter("quiz_name", "==", "addition")).get()
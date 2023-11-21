from flask import Flask
from flask import jsonify
from flask import request, flash
from flask import Response
from flask_cors import CORS
import json
import os

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from google.cloud.firestore_v1.base_query import FieldFilter

cred = credentials.Certificate("../serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()


app = Flask("__name__")
cors = CORS(app)

@app.route("/", methods=['GET', 'POST'])
def index():
    return {"type_return": "howdy"}

@app.route("/test", methods=['POST'])
def test():
    _data = request.get_json()
    print(f"REQUST = {_data}")


    return {"we": 10, "test": 3}

if __name__ == "__main__":
    app.run(port=8000, debug=True)



        # print(f"request = {request.json}")

    # quiz_doc = db.collection('quizzes').document('9jHt9mH1PHI9R2r0dVBc').get()

    # if quiz_doc.exists:
    #     resp.quiz_name = str(quiz_doc.to_dict()['quiz_name'])
    #     resp.num_questions = str(quiz_doc.to_dict()['num_questions'])
    # else:
    #     resp.quiz_name = "does not exist"
    #     resp.num_questions = "does not exist"

    # print(f"response we sending = {resp}")

# FIREBASE EXAMPLE QUERIES

# TO ADD TO THE DATA BASE
    # db.collection('colors').add({'name':'purple', 'value':'#screw'})

# TO GET DOCUMENT BASED ON ITS ID
    # get_quiz = db.collection('quizzes').document('9jHt9mH1PHI9R2r0dVBc').get()
    # if get_quiz.exists:
    #     print(f"Document data: {get_quiz.to_dict()}")


# TO GET A DOCUMENT BASED UPON ITS FIELDS
    # docs = db.collection("quizzes").where(filter=FieldFilter("quiz_name", "==", "addition")).get()
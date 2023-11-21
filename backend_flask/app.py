from flask import Flask

app = Flask("__name__")

@app.route("/")
def index():
    print("\ntest the end point\n")
    return ""

if __name__ == "__main__":
    app.run(port=8000, debug=True)
from flask import Flask
from flask import url_for , redirect , request
app = Flask(__name__,static_folder="static")

@app.route("/")
def hello_world():
    return "<p>Helo World</p>"
# passing comments in URLS
@app.route("/user/<username>")
def showProfile(username):
    return f"User {username}"

@app.route("/projects/",methods=["GET", "POST"])
def Project():
    if request.method == "GET":
        return "get Method"
    elif request.method == "POST":
        return "post Method"
@app.route("/StaticFiles")
def dfstatic():
     return app.send_static_file('Style.css')
if __name__ == "__main__":
    # Using URL for as an example
    app.run(debug = True,threaded= True,port = 8080)
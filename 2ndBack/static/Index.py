from flask import Flask , request
from Encrypt import decrypt_message,Encrypting_Meage
import mysql.connector
from NestedNote import run
app = Flask(__name__)
# making the function to

@app.route("/api/auth/Fetch_User",methods=["GET"])
def fetchuser():
    json = request.json
    email = json["email"]
    mycursor.execute(f'select Email from myUsers where Email = "{email}"')
    a = mycursor.fetchall()[0][0]
    if a == json["email"]:
        return a
    else:
        return "Email Not Found"


@app.route('/api/auth/Create_User', methods=['POST'])
def route():
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        json = request.json
        #sending the cursor to the table
        #chiecking the databse availiility
        mycursor.execute("select email from myUsers")
        if (json["email"],) in mycursor.fetchall():
            return "User Already"
        else:
            name = json['name']
            email = json['email']
            password = Encrypting_Meage(json['password'])
            sql = f'INSERT INTO myUsers (name, Email,password) VALUES ("{name}","{email}","{password}")'
            mycursor.execute(sql)
            mydb.commit()
            return "User Details Stored"
    else:
        return "Invalid Request Kindly Check"


if __name__ == '__main__':
    # connecting the sql  and creating the database
    mydb = mysql.connector.connect(
        host = 'localhost',
        user = 'root',
        password = 'root1234'
    )
    mycursor = mydb.cursor()
    mycursor.execute("show databases")
    if ('currentdatabase',) in mycursor.fetchall():
        mycursor.execute("use currentdatabase")
        pass
    else:
        mycursor.execute("CREATE DATABASE currentdatabase")
        mycursor.execute("use currentdatabase")
        mycursor.execute("")
    app.run(debug=True,threaded=True,port = 2001)
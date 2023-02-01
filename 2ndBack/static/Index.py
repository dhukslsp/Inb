from flask import Flask , request
from cryptography.fernet import Fernet
import mysql.connector
from rotu import *
app = Flask(__name__)
# making the function to
key = b'PCHl_MjGyEyBxLYha3S-cWg_SDDmjT4YYaKYh4Z7Yug='
@app.route("/api/auth/Fetch_User",methods=["GET"])
def fetchuser():
    mydb.commit()
    json = request.json
    email = json["email"]
    mycursor.execute(f'select Email from myUsers where Email = "{email}"')
    c = mycursor.fetchall()
    if c == []: return "Not Found"
    a = c[0][0]
    if a == json["email"]:
        mycursor.execute(f'select password from myUsers where Email = "{a}"')
        b = mycursor.fetchall()[0][0]
        f = Fernet(key)
        if json["password"] ==  f.decrypt(b).decode("utf8"):
            return "True"
        else:
            return "False"
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
            if len(json["password"])>12:
                return "Password length can't be grater than 12 characters"  
            else:  
                f = Fernet(key)
                encrypted_Message = f.encrypt(json['password'].encode())
                password = encrypted_Message.decode()
                sql = f'INSERT INTO myUsers (name, Email,password) VALUES ("{name}","{email}","{password}")'
                mycursor.execute(sql)
                mydb.commit()
                return "User Details Stored", 200
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
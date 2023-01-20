from flask import Flask
import mysql.connector
app = Flask(__name__)

@app.route('/')
def route():
    return "Hello World"




if __name__ == '__main__':
    mydb = mysql.connector.connect(
        host = 'localhost',
        user = 'root',
        password = 'root1234'
    )
    mycursor = mydb.cursor()
    mycursor.execute("SHOW DATABASES")
    print(mycursor.fetchall()[0][0])
    for x in mycursor:
        print(x)
    app.run(debug=True,threaded=True,port = 2001)
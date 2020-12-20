import os
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
import random
import string

'''
cur.execute("CREATE TABLE BreathData (username VARCHAR(20), breath smallint)")
cur.execute("CREATE TABLE TempData (username VARCHAR(20), temperature smallint)")
cur.execute("CREATE TABLE user_USERNAME (dateAndtime VARCHAR(20), sensor text)")

cur.execute("CREATE TABLE login (HardWareID VARCHAR(10), username VARCHAR(20), hash VARCHAR(50), email VARCHAR(50))")
cur.execute("CREATE TABLE Emergency (username VARCHAR(20), email text)")
cur.execute("CREATE TABLE Token (username VARCHAR(20), token VARCHAR(10))")
'''

app = Flask(__name__)

app.config['MYSQL_HOST'] = '35.236.222.221'
app.config['MYSQL_USER'] = 'BackEnd'
app.config['MYSQL_PASSWORD'] = 'HealthBelt!!'
app.config['MYSQL_DB'] = 'user_info'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)


@app.route('/')
def mainRoute():
    cur = mysql.connection.cursor()
    cur.close()
    return "Health Belt backend is working."



'''
{
    "HID": "",
    "heart": [],
    "breath": num,
    "temp": num
}
'''
@app.route('/upload', methods=['POST'])
def upload():
    data = request.get_json()
    hid = data["HID"]
    cur = mysql.connection.cursor()
    cur.execute("SELECT HardWareID, username FROM login WHERE HardWareID = '"+hid+"'")
    rv = cur.fetchall()
    if len(rv) == 0:
        return "Hardware not connected"
    else:
        cur.execute('INSERT INTO user_'+rv[0]["username"]+" (sensor) VALUES ('"+data["heart"]+"')")
        cur.execute("UPDATE BreathData SET breath="+data['breath']+" WHERE username='"+rv[0]["username"]+"'")
        cur.execute("UPDATE TempData SET temperature="+data['temp']+" WHERE username='"+rv[0]["username"]+"'")
        mysql.connection.commit()
    cur.close()
    return "Done!"

'''
{
    "HID": "",
    "reason": "", covid/heart-attack
}
'''
@app.route('/emergency', methods=['POST'])
def emergency():
    data = request.get_json()
    hid = data["HID"]
    cur = mysql.connection.cursor()
    cur.execute("SELECT username FROM login WHERE HardWareID='"+hid+"'")
    rv = cur.fetchall()
    if len(rv) == 0:
        return "Hardware not connected"
    else:
        username = rv[0]["username"]
        cur.execute("SELECT email FROM emergency WHERE username = '"+username+"'")
        rv = cur.fetchall()
        if len(rv) == 0:
            return "No Emergency Contacts"
        emails = rv[0]["email"].split()
        
        #TODO
        for i in range emails

'''
{
    "HID":"",
    "username":"",
    "email": "",
    "hash": ""
}
'''
@app.route('/register', methods=['GET'])
def register():
    data = request.get_json()
    username = data["username"]
    cur = mysql.connection.cursor()
    cur.execute('SELECT username FROM login WHERE username = "'+username+'"')
    rv = cur.fetchall()
    if len(rv) != 0:
        return jsonify(error=True,token="")
    else:
        cur.execute("INSERT INTO login VALUES ('"+data["HID"]+"','"+username+"','"+data["hash"]+"','"+data["email"]+"')")
        cur.execute("CREATE TABLE user_"+username+" (dateAndtime TIMESTAMP DEFAULT CURRENT_TIMESTAMP, sensor TEXT)")
        cur.execute("INSERT INTO BreathData VALUES ('"+username+"',1)")
        cur.execute("INSERT INTO TempData VALUES ('"+username+"',32)")
        letters = string.ascii_letters
        _token = ''.join(random.choice(letters) for i in range(10))
        cur.execute("INSERT INTO Token VALUES ('"+username+"','"+token+"')")
        mysql.connection.commit()
    cur.close()
    return jsonify(error=False,token=_token)

'''
{
    "username" : ""
}
'''
@app.route('/login', methods=['GET'])
def login():
    data = request.get_json()
    username = data["username"]
    cur = mysql.connection.cursor()
    cur.execute("SELECT hash FROM login WHERE username='"+username+"'")
    rv = cur.fetchall()
    if len(rv) == 0:
        return jsonify(error=True,hash="")
    _hash = rv[0]["hash"]
    cur.close()
    return jsonify(hash=_hash)

'''
{
    "username" : ""
}
'''
@app.route('/getToken', methods=['GET'])
def login():
    data = request.get_json()
    username = data["username"]
    cur = mysql.connection.cursor()
    cur.execute("SELECT hash FROM login WHERE username='"+username+"'")
    rv = cur.fetchall()
    if len(rv) == 0:
        return jsonify(error=True,token="")
    cur.execute("SELECT token FROM Token WHERE username='"+username+"'")
    rv = cur.fetchall()
    _token = rv[0]["token"]
    cur.close()
    return jsonify(token=_token)

'''
{
    "username":"",
    "token":"",
    "contact":"",
}
'''
@app.route('/newContact', method=['POST'])
def newContact():
    data = request.get_json()
    username = data["username"]
    cur = mysql.connection.cursor()
    cur.execute("SELECT token FROM Token WHERE username='"+username+"'")
    rv=cur.fetchall()
    if len(rv) == 0:
        return "Username not registered"
    if rv[0]["token"] != data["token"]:
        return "Unsuccessful"
    cur.execute("UPDATE emergency SET email='"+data["contact"]+"'")
    mysql.connection.commit()
    cur.close()
    return "Successful!"


'''
{
    "username":"",
    "token":"",
    "email":""
}
'''
@app.route('/changeEmail', method=['POST'])
def newEmail():
    data = request.get_json()
    username = data["username"]
    cur = mysql.connection.cursor()
    cur.execute("SELECT token FROM Token WHERE username='"+username+"'")
    rv=cur.fetchall()
    if len(rv) == 0:
        return "Username not registered"
    if rv[0]["token"] != data["token"]:
        return "Unsuccessful"
    cur.execute("UPDATE login SET email='"+data["email"]+"' WHERE username='"+username+"'")
    mysql.connection.commit()
    cur.close()
    return "Successful!"

'''
{
    
    "username":"", 
    "token":"" , 
}
'''
@app.route('/getData'method=['GET'])
def getData():
    data = request.get_json()
    username = data["username"]
    cur = mysql.connection.cursor()
    cur.execute("SELECT token FROM Token WHERE username='"+username+"'")
    rv=cur.fetchall()
    if len(rv) == 0:
        return "Username not registered"
    if rv[0]["token"] != data["token"]:
        return "Unsuccessful"
    cur.execute("SELECT * FROM user_"+username+ "ORDER BY dateAndtime DESC LIMIT 10")
    rv = curr.fetchall() 
    _heart = rv 
    curr.execute("SELECT temperature FROM TempData WHERE username = '"+username+"'")
    rv = curr.fetchall() 
    _temp = rv 
    curr.execute("SELECT breath FROM BreathData WHERE username ='"+username+"'")
    rv = curr.fetchall()
    _breath = rv 
    return jsonify(heart=_heart, temp=_temp, breath = _breath)
    
if __name__ == "__main__":
    app.run(debug=True)

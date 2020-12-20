import os 
from flask import Flask 
from flask_mysqldb import MySQL


app = Flask(__name__)

app.config['MYSQL_HOST'] = '35.236.222.221'
app.config['MYSQL_USER'] = 'BackEnd'
app.config['MYSQL_PASSWORD'] = 'HealthBelt!!'
app.config['MYSQL_DB'] = 'user_info'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)


@app.route('/')
def index():
    cur = mysql.connection.cursor()
    #cur.execute("CREATE TABLE BreathData (username VARCHAR(20), breath smallint)")
    cur.execute("CREATE TABLE TempData (username VARCHAR(20), temperature smallint)")
    cur.execute("CREATE TABLE Sensor (dateAndtime VARCHAR(20), sensor text)")

    cur.execute("CREATE TABLE login (HardWareID VARCHAR(10), username VARCHAR(20), hash VARCHAR(50), email VARCHAR(50))")
    cur.execute("CREATE TABLE Emergency (username VARCHAR(20), email text)")
    cur.execute("CREATE TABLE Token (username VARCHAR(20), token VARCHAR(10))")
    mysql.connection.commit()
    cur.close()
    return 'Done!'

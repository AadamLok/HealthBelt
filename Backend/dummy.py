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

    mysql.connection.commit()
    cur.close()
    return 'Done!'

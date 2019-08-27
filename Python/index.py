#!/usr/bin/env python
# coding: utf-8

from flask import Flask
#from flask_restful import Resource, Api
from flask_cors import CORS
import requests
 
app = Flask(__name__)
CORS(app) ## To allow direct AJAX calls
 
@app.route('/', methods=['GET'])
def home():
    session = requests.session()
    url = 'https://users.premierleague.com/accounts/login/'
    payload = {
            'password': 'my_1st_FPL_password',
            'login': 'dsmdavid@gmail.com',
            'redirect_uri': 'https://fantasy.premierleague.com/a/login',
            'app': 'plfpl-web'
    }
    session.post(url, data=payload)
#    r = requests.get('http://dummy.restapiexample.com/api/v1/employees', headers={"User-Agent": "XY"})
    r = session.get("https://fantasy.premierleague.com/api/leagues-classic/76993/standings/", headers={"User-Agent": "XY"})

    return r.text

if __name__ == "__main__":
    app.run()
#!/usr/bin/env python
# coding: utf-8

from flask import Flask, request
#from flask_restful import Resource, Api
from flask_cors import CORS
import requests, json
 
app = Flask(__name__)
CORS(app) ## To allow direct AJAX calls

@app.route('/', methods=['POST'])
def personalized_league():
    session = requests.session()
    data_raw = request.get_data()
    data = json.loads(data_raw)

    url = 'https://users.premierleague.com/accounts/login/'
    payload = {
            'password': data['password'], 
            'login': data['username'],
            'redirect_uri': 'https://fantasy.premierleague.com/a/login',
            'app': 'plfpl-web'
    }
    session.post(url, data=payload)
    r = session.get("https://fantasy.premierleague.com/api/leagues-classic/{}/standings/".format(data['league']), headers={"User-Agent": "XY"})
    return r.text




if __name__ == "__main__":
    app.run()
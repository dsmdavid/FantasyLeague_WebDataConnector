# -*- coding: utf-8 -*-
"""
Created on Tue Aug 27 20:25:36 2019

@author: DavidSM
"""

from flask import Flask, jsonify
import requests

r = requests.get("http://dummy.restapiexample.com/api/v1/employees")

r

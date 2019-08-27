{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 15,
   "metadata": {},
   "outputs": [],
   "source": [
    "from flask import Flask, Response\n",
    "import requests\n",
    "\n",
    "app = Flask(__name__)\n",
    "\n",
    "@app.route('/', defaults={'path': ''})\n",
    "@app.route('/<path:path>')\n",
    "def catch_all():\n",
    "    r = requests.get(\"https://fantasy.premierleague.com/api/leagues-classic/76993/standings/?page_new_entries=1&page_standings=1&phase=1\")\n",
    "    return r.json()"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.7.0"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 2
}
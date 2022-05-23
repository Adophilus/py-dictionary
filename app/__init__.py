#!/usr/bin/python3

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

import config

import os

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = config.SQLALCHEMY_DATABASE_URI
db = SQLAlchemy(app)

from app import models
from app import views
from app import controllers

app.register_blueprint(views.mainBlueprint, url_prefix = views.mainUrlPrefix)
app.register_blueprint(views.dictionaryBlueprint, url_prefix = views.dictionaryUrlPrefix)
app.register_blueprint(views.thesaurusBlueprint, url_prefix = views.thesaurusUrlPrefix)

app.register_blueprint(views.api.definitionsBlueprint, url_prefix = controllers.api.formatUrlPrefix(views.api.definitionsUrlPrefix))

def run ():
	app.run(debug = True, host = config.server.hostname, port = config.server.port)

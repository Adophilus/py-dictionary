from flask import Blueprint
from flask import render_template
from flask import url_for

from app import config

mainBlueprint = Blueprint("main", __name__)
mainUrlPrefix = "/"

@mainBlueprint.route("")
@mainBlueprint.route("/")
def renderHomeView ():
	return render_template("main/home.html", config = config, url_for = url_for)

from flask import Blueprint
from flask import render_template
from flask import url_for

from app import config

thesaurusBlueprint = Blueprint("thesaurus", __name__)
thesaurusUrlPrefix = "/thesaurus"

@thesaurusBlueprint.route("")
@thesaurusBlueprint.route("/")
def renderHomeView ():
	return render_template("thesaurus/home.html", config = config, url_for = url_for)

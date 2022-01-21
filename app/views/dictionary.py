from flask import abort
from flask import Blueprint
from flask import render_template
from flask import request
from flask import url_for

from app import config
from app import models

dictionaryBlueprint = Blueprint("dictionary", __name__)
dictionaryUrlPrefix = "/dictionary"

@dictionaryBlueprint.route("")
@dictionaryBlueprint.route("/")
def renderHomeView ():
	return render_template("dictionary/home.html", config = config, url_for = url_for)

@dictionaryBlueprint.route("/<word_id>")
def renderWordView (word_id):
	word = models.Word.getById(word_id)
	if (not word):
		return abort(404)
	return render_template("dictionary/word.html", config = config, url_for = url_for, word = word, definitions = word.getDefinitions())

@dictionaryBlueprint.route("/definition")
def renderWordsView ():
	searchQuery = request.args.get("search")
	if (not searchQuery):
		searchQuery = ""
	words = models.Word.getByMatch(searchQuery)
	return render_template("dictionary/words.html", config = config, url_for = url_for, words = words)

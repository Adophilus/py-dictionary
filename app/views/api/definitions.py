from flask import Blueprint

from app import models

definitionsBlueprint = Blueprint("definitions", __name__)
definitionsUrlPrefix = "/definitions"

@definitionsBlueprint.route("/<word>")
def getWordDefinitions (word):
	word_record = models.Word(WORD = word)
	if (word_record):
		return word_record.DEFINITIONS
	return ""

from flask import globals

from app import db

class Definition (db.Model):
	ID = db.Column(db.Text, primary_key = True)
	DEFINITION = db.Column(db.Text)
	SOUND = db.Column(db.Text)
	PART_OF_SPEECH = db.Column(db.Text)
	THESAURUS = db.Column(db.Text)

	def __str__ (self):
		return self.DEFINITION

from flask import globals

from app import db

class Thesaurus (db.Model):
	ID = db.Column(db.Text, primary_key = True)
	ANTONYMS = db.Column(db.Text)
	SYNONYMS = db.Column(db.Text)
	HOMOPHONES = db.Column(db.Text)

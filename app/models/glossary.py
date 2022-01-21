from flask import globals

from app import db

class Glossary (db.Model):
	ID = db.Column(db.Text, primary_key = True)
	DEFINITION = db.Column(db.Text)

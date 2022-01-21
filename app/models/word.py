from flask import globals

from app import db

class Word (db.Model):
	ID = db.Column(db.String(50), primary_key = True)
	WORD = db.Column(db.Text)
	DEFINITIONS = db.Column(db.Text)

	def __str__ (self):
		return self.WORD

	def getDefinitions (self):
		definitions = []
		for definition_id in globals.controller.methods.unjsonize(self.DEFINITIONS):
			definition = globals.model.Definition.query.filter_by(ID = definition_id).first()
			if (definition):
				definitions.append(definition)
		return definitions

	@classmethod
	def getById (cls, word_id):
		return cls.query.filter_by(ID = word_id).first()

	@classmethod
	def getByMatch (cls, word):
		word = word.replace('_', '__').replace('*', '%').replace('?', '_')
		return cls.query.filter(cls.WORD.contains(f"%{word}%")).all()

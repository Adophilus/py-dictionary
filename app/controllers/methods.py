import json

def unjsonize (json_data, *args, **kwargs):
	dict_object = json.loads(json_data, *args, **kwargs)
	return dict_object

def jsonize (dict_object, *args, **kwargs):
	json_data = json.dumps(dict_object, *args, **kwargs)
	return json_data

def loadJson (path, *args, **kwargs):
	with open(path, "r") as file:
		return unjsonize(file.read(), *args, **kwargs)

def saveJson (path, data, *args, **kwargs):
	with open(path, "w") as file:
		file.write(jsonize(data, *args, **kwargs))

def putContentIn (filePath, data):
	with open(filePath, "w") as file:
		file.write(data)

def getContentOf (filePath):
	with open(filePath, "r") as file:
		return file.read()

def getContentOfBinary (filePath):
	with open(filePath, "rb") as file:
		return file.read()

def sendTrue (data):
	return jsonize({"data": data, "status": True})

def sendFalse (data):
	return jsonize({"error": data, "status": False})

def getIpAddress ():
	return ""

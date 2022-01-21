from collections import namedtuple
from types import SimpleNamespace
from pprint import pprint
from . import methods
import os

def Config (folder_path):
	return methods.unjsonize(
		methods.jsonize({
			file_name.replace(".json", ""): methods.loadJson(os.path.join(folder_path, file_name)) for file_name in os.listdir(folder_path) if (file_name.endswith(".json"))
		}),
		object_hook = lambda d: namedtuple("X", d.keys())(*d.values())
	)

# def ConfigSave (config, folder_path):
# 	for field_name in config._fields():
# 		file_path = os.path.join(folder_path, field_name + ".json")
# 		methods.saveJson(file_path, config._asdict()[field_name]._asdict())

if __name__ == "__main__":
	config = Config("../data/config")
	pprint(dir(config))
	print()
	# pprint(config._fields)
	pprint(config)
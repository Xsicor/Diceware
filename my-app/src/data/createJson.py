import json

data = {}

with open('my-app/src/data/words.txt') as file:
    for line in file:
      wordAndId = []
      wordAndId.extend(line.split())
      data[wordAndId[0]] = wordAndId[1]

with open('my-app/src/data/wordList.json', 'w') as outfile:
    json.dump(data, outfile,indent=2)
import json
rules = {
  "vue/multi-word-component-names": "off", 
  "no-unused-vars": "off"
}

env = {
  "node": True,
  "vue/setup-compiler-macros": True
}

with open('frontend/package.json', 'r') as f:
    data = json.load(f)

data['eslintConfig']['rules'] = rules
data['eslintConfig']['env'] = env

with open('frontend/package.json', 'w') as f:
    json.dump(data, f, indent=2)

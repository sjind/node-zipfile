all: zipfile

zipfile:
	npm install

test:
	@PATH=./node_modules/mocha/bin:${PATH} && NODE_PATH=./lib:$NODE_PATH mocha -R spec

.PHONY: test
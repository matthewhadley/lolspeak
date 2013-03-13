readme:
	node build.js

test:
	./node_modules/.bin/mocha test.js --reporter spec

.PHONY: readme
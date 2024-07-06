lint:
	npx eslint .

test-coverage:
	npm test -- --coverage --coverageProvider=v8

install:
	npm ci

test: 
	NODE_OPTIONS=--experimental-vm-modules npx jest
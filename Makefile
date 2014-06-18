REPORTER ?= spec

test: lint build
	@./node_modules/.bin/mocha-phantomjs ./test/index.html \
		--reporter $(REPORTER)

lint: ./lib/*.js
	@./node_modules/.bin/jshint $^ \
		--reporter ./node_modules/jshint-stylish/stylish.js

build:
	@./node_modules/.bin/component build

clean:
	rm -fr build components node_modules

.PHONY: test lint build clean

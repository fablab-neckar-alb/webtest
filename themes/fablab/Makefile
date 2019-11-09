# @file
# Makefile for Fablab hugo theme
# @author Joris Karl Dzaack <hola@arebours.de>
#

# Configuration
.SECONDARY:
.DEFAULT_GOAL := dev

# Folders
BIN := ./bin
NODE_MODULES := ./node_modules
NODE_BIN := $(NODE_MODULES)/.bin

# FILES
SASS_ENTRY := scss/fablab.scss
JS_ENTRY := es/fablab.es

# BINARIES
FSWATCH := fswatch
POSTCSS := $(NODE_BIN)/postcss
ROLLUP := $(NODE_BIN)/rollup
SASS := $(NODE_BIN)/sass

# FLAGS
FSWATCH_FLAGS := --directories ./ --exclude "_site/.*|js/.*|css/.*|\.jekyll-metadata|node_modules/.*" --recursive --latency 2 --print0
POSTCSS_FLAGS :=
ROLLUP_FLAGS := --config ./rollup.config.js --sourcemap --compact
SASS_FLAGS := -I node_modules/bourbon/core/ -I node_modules/sass-mediaqueries/ -I node_modules/quantity-queries/stylesheets/ -I node_modules/normalize-scss/sass/

# SOURCES
SCSS_SOURCE_FILES := $(shell find ./scss -type f \( -iname "*.scss" ! -wholename "$(SASS_ENTRY)" \))
JS_SOURCE_FILES := $(shell find ./es -type f \( -iname "*.es" ! -wholename "$(JS_ENTRY)" \))

# FILES
DEPS := static/css/fablab.min.css static/js/module/fablab.js static/js/nomodule/fablab.js

# Rules
static/css/%.css: scss/%.scss $(SCSS_SOURCE_FILES)
	@mkdir -p $(@D)
	@$(SASS) $(SASS_FLAGS) $< > $@

static/css/%.min.css: static/css/%.css
	@$(POSTCSS) $(POSTCSS_FLAGS) $< > $@

static/js/module/%.js: es/%.es $(JS_SOURCE_FILES)
	@$(ROLLUP) $(ROLLUP_FLAGS) --format es --input $< --file $@

static/js/nomodule/%.js: es/%.es $(JS_SOURCE_FILES)
	@$(ROLLUP) $(ROLLUP_FLAGS) --format system --input $< --file $@

# PHONIES
assets: $(DEPS)
.PHONY: assets

dev: real_dev
	@true
.PHONY: dev

list:
	@$(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$' | xargs
.PHONY: list

prod: real_prod
	@true
.PHONY: prod

real_dev: assets
.PHONY: real_dev

real_prod: assets
.PHONY: real_prod

watch:
	@$(FSWATCH) $(FSWATCH_FLAGS) | xargs -0 -n 1 -I % sh -c 'echo "Changed: % file(s)"; $(MAKE) dev'
.PHONY: watch

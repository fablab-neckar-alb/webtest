# @file
# Makefile for Fablab hugo theme
# @author Joris Karl Dzaack <hola@arebours.de>
#

# CONFIGURATION
.SECONDARY:
.DEFAULT_GOAL := dev

# FOLDERS
BIN := ./bin
NODE_MODULES := ./node_modules
NODE_BIN := $(NODE_MODULES)/.bin
COLOR_DIR := design/color

# FILES
SASS_ENTRY := scss/fablab.scss
JS_ENTRY := es/fablab.js

# BINARIES
FSWATCH := fswatch
POSTCSS := $(NODE_BIN)/postcss
ROLLUP := $(NODE_BIN)/rollup
SASS := $(NODE_BIN)/sass
HTTP_SERVER := $(NODE_BIN)/http-server

# FLAGS
FSWATCH_FLAGS := --directories ./ --exclude "_site/.*|js/.*|css/.*|\.jekyll-metadata|node_modules/.*" --recursive --latency 2 --print0
POSTCSS_FLAGS :=
ROLLUP_FLAGS := --config ./rollup.config.js --sourcemap --compact
SASS_FLAGS := -I node_modules/bourbon/core/ -I node_modules/sass-mediaqueries/ -I node_modules/quantity-queries/stylesheets/ -I node_modules/normalize-scss/sass/

# SOURCES
SCSS_SOURCE_FILES := $(shell find ./scss -type f \( -iname "*.scss" ! -wholename "$(SASS_ENTRY)" \))
JS_SOURCE_FILES := $(shell find ./es -type f \( -iname "*.js" ! -wholename "$(JS_ENTRY)" \))

# FILES
DEPS := static/css/fablab.min.css static/js/module/fablab.js static/js/nomodule/fablab.js

# RULES
# color file generation rules
design/_export/color/%.ase: $(COLOR_DIR)/%.gamut
	@mkdir -p $(@D)
	@bin/gamut2ase --input "$<" --output "$@" --verbose

design/_export/color/%.sketchpalette: $(COLOR_DIR)/%.gamut
	@mkdir -p $(@D)
	@bin/gamut2sketchpalette --input "$<" --output "$@" --verbose

design/_export/color/%.swatches:  $(COLOR_DIR)/%.gamut
	@mkdir -p $(@D)
	@bin/gamut2swatches --input "$<" --output "$@" --verbose

scss/variable/_color.scss: design/color/fablab.gamut
	bin/gamut2sass --input "$<" --output "$@" --verbose

static/css/%.css: scss/%.scss scss/variable/_color.scss $(SCSS_SOURCE_FILES)
	@mkdir -p $(@D)
	@$(SASS) $(SASS_FLAGS) $< > $@

static/css/%.min.css: static/css/%.css
	@$(POSTCSS) $(POSTCSS_FLAGS) $< > $@

static/js/module/%.js: es/%.js $(JS_SOURCE_FILES)
	@$(ROLLUP) $(ROLLUP_FLAGS) --format es --input $< --file $@

static/js/nomodule/%.js: es/%.js $(JS_SOURCE_FILES)
	@$(ROLLUP) $(ROLLUP_FLAGS) --format system --input $< --file $@

# PHONIES
assets: $(DEPS)
.PHONY: assets

color: $(patsubst $(COLOR_DIR)/%.gamut,design/_export/color/%.ase,$(wildcard $(COLOR_DIR)/*.gamut)) $(patsubst $(COLOR_DIR)/%.gamut,design/_export/color/%.sketchpalette,$(wildcard $(COLOR_DIR)/*.gamut)) $(patsubst $(COLOR_DIR)/%.gamut,design/_export/color/%.swatches,$(wildcard $(COLOR_DIR)/*.gamut))
.PHONY: color

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

serve_skeleton:
	@$(HTTP_SERVER) ./ --cors -p 1313
.PHONY: serve_skeleton

watch:
	@$(FSWATCH) $(FSWATCH_FLAGS) | xargs -0 -n 1 -I % sh -c 'echo "Changed: % file(s)"; $(MAKE) dev'
.PHONY: watch

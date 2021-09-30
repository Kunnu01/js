packages := $(shell find packages -type f \( ! -path "*node_modules*" \) -name Makefile | xargs -n 1 dirname)
.PHONY: $(packages)

all: $(packages)

# utiltiy for building packages by specifying the package folder only.
$(patsubst packages/%, %, $(packages)): % : packages/%

api types: packages/openapi
packages/react: packages/sdk packages/proxy packages/openapi
packages/sdk: packages/proxy packages/openapi
packages/proxy: packages/openapi

$(packages):
	@[ -f ./$@/Makefile ] || exit 0
	@echo "🔨 Building $@"
	@$(MAKE) -C ./$@ > $@.log 2>&1 || (echo "🔥 Building $@ failed" && cat $@.log && rm -rf tmp && exit 1)



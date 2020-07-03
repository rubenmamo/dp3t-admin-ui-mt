######################
#      Makefile      #
######################

all: clean all1
all1: clean updateproject
docker-build: updateproject docker

updateproject:
	npm run build

docker:
	docker build -t peppptdweacr.azurecr.io/dpppt-mt-authz-ui:latest .

clean:
	@rm -f build
